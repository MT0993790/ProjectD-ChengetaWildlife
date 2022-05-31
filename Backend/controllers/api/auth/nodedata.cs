using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;

namespace ProjectD_ChengetaWildlife.controllers
{
    
    [Route("api/auth/mqttdata")]
    [ApiController]
    public class Nodedata : Controller
    {

        [HttpGet]
        public IActionResult GetActionResult(string filter = "time", string order = "DESC", int limit = 15)
        {
            string query = $"SELECT * FROM mqttdata ORDER BY {filter} {order} LIMIT {limit}";

            Database database = new Database();
            DataTable data1 = database.BuildQuery(query)
                .Select();
            database.Close();
            return Ok(JsonConvert.SerializeObject(data1));
        }
    }
}
