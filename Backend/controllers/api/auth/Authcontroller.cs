using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using ProjectD_ChengetaWildlife.controllers;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Text;
using System.Runtime.Serialization.Formatters.Binary;
using System.Data;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using System.Web;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectD_ChengetaWildlife.controllers {

	[Route("api/auth/login")]
	[ApiController]
	public class AuthController : ControllerBase {
	
		// POST api/auth/login
		[HttpPost]
		public string Post() {
			// Get a values from the Request 
			string email_input = HttpContext.Request.Form["email"];
			string password_input = HttpContext.Request.Form["password"];
			int loginAttempt = 0;
			string ClientIP = Request.HttpContext.Connection.RemoteIpAddress.ToString();
			bool contains = false;
			string timeout = "99999999";
			if(email_input == null && password_input == null){
				return JsonSerializer.Serialize(new{
					success = false,
					message = "Het e-mail adres of wachtwoord is onjuist",
				});
			}
			//Get current unix time 
			DateTime foo = DateTime.Now;
			long unixTime = ((DateTimeOffset)foo).ToUnixTimeSeconds();
			int unixtime = Convert.ToInt32(unixTime);

			// Get current unix timestamp
			DateTime current = DateTime.Now;
			long unixTimeStamp = ((DateTimeOffset)current).ToUnixTimeSeconds();
			int CurrentTimeStamp = Convert.ToInt32(unixTimeStamp);

			Database database = new Database();
			
			// CheckDB(ClientIP, CurrentTimeStamp, timeout);
			// DataTable data1 = database.BuildQuery("SELECT ipadress,timeout,attempts FROM loginattempts").Select();
			// foreach (DataRow row in data1.Rows){
			// 	if(ClientIP == row["ipadress"].ToString()){
			// 		loginAttempt += Int32.Parse(row["attempts"].ToString()) + 1;
			// 		if(Int32.Parse(row["attempts"].ToString()) > 3){
			// 			// add the timeout of 5 minutes.
			// 			unixtime += 5*60 *1000;
			// 		}
					
			// 		// if IP adress exist in db update it with new counter and timeout
			// 		database.BuildQuery($"UPDATE loginattempts SET attempts=@counter, timeout=@unixtime WHERE ipadress=@ip")
			// 			.AddParameter("ip", ClientIP)
			// 			.AddParameter("counter", loginAttempt)
			// 			.AddParameter("unixtime", unixtime)
			// 			.Query();
			// 		contains = true;
			// 		timeout = row["timeout"].ToString();
			// 	}
			// }


			// // if IP adress doesnt exist in db add it
			// if(!contains){
			// 	loginAttempt += 1;
			// 	database.BuildQuery($"INSERT INTO loginattempts (ipadress, attempts, timeout) VALUES (@ip, @counter, @unixtime)")
			// 	.AddParameter("ip", ClientIP)
			// 	.AddParameter("counter", loginAttempt)
			// 	.AddParameter("unixtime", unixtime)
			// 	.Query();
			// }


			// if(CurrentTimeStamp < Int32.Parse(timeout) && loginAttempt > 3){
			// 	database.Close();
			// 	return JsonSerializer.Serialize(new {
			// 		message = "U heeft te veel inlog pogingen gehad probeer het over 5 minuten nog een keer."
			// 	});
			// }

			// if(CurrentTimeStamp > Int32.Parse(timeout)){
			// // Delete rows if Current time is later then timeout
			// 	database.BuildQuery("DELETE FROM loginattempts WHERE @timeout > @current ")
			// 		.AddParameter("timeout", Int32.Parse(timeout))
			// 		.AddParameter("current", CurrentTimeStamp)
			// 		.Query();
			// 	// database.BuildQuery($"UPDATE loginattempts SET attempts=@counter WHERE ipadress=@ip")
			// 	// 	.AddParameter("ip", ClientIP)
			// 	// 	.AddParameter("counter", 0)
			// 	// 	.Query();
			// }
			
			// Execute the query on the database.
			DataTable data = database.BuildQuery("select * from admins").Select();
			// Loop through each row in the query and check if the details are correct.
			foreach (DataRow row in data.Rows) {
				var newPassword = password_input + row["salt"].ToString();
				var crypt = new SHA256Managed();
				byte[] crypto = crypt.ComputeHash(Encoding.ASCII.GetBytes(newPassword));
				string hash = Encoding.ASCII.GetString(crypto);

				if (row["email"].ToString() == email_input && row["password"].ToString() == hash) {
					string oauth_token = GetToken(email_input, password_input);
					database.Close();
					return JsonSerializer.Serialize(new {
						id = Int32.Parse(row["id"].ToString()),
						success = true,
						token = oauth_token,
					});
				}
			}
			database.Close();
			return JsonSerializer.Serialize(new{
				success = false,
				message = "Het e-mail adres of wachtwoord is onjuist",
				
			});
		}

		public void CheckDB(string ClientIP, int CurrentTimeStamp, string timeout){
			Database database = new Database();
			DataTable data1 = database.BuildQuery("SELECT ipadress,timeout,attempts FROM loginattempts").Select();
			foreach (DataRow row in data1.Rows){
				if(ClientIP == row["ipadress"].ToString()){
					if(CurrentTimeStamp > Int32.Parse(row["timeout"].ToString())){
					// Delete rows if Current time is later then timeout
						database.BuildQuery("DELETE FROM loginattempts WHERE @timeout > @current ")
							.AddParameter("timeout", Int32.Parse(row["timeout"].ToString()))
							.AddParameter("current", CurrentTimeStamp)
							.Query();

					}
				}
			}
			database.Close();
		}
		public string GetToken(string email_input, string password_input){
			string oauth_token;
			Database database = new Database();
			using(RandomNumberGenerator rng = new RNGCryptoServiceProvider())
			{
				byte[] tokenData = new byte[32];
				rng.GetBytes(tokenData);
				oauth_token = Convert.ToBase64String(tokenData);
			}
			database.BuildQuery($"UPDATE admins SET oauth_token = @oauth_token WHERE email=@email")
			.AddParameter("oauth_token", oauth_token)
			.AddParameter("email", email_input)
			.AddParameter("password", password_input)
			.Query();
			database.Close();
			return oauth_token;
		}


	}
}