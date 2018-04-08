using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace OfferinoWeb.src.server {
    public class MainController : Controller {
        const string offerUrl = "http://localhost:7777/api/offer";

        public IActionResult Index(){
            return File("~/main.html", "text/html");
        }

        public async Task<IActionResult> Offers(){
            string offers;
            using(var client = new HttpClient()){
                var response = await client.GetAsync(offerUrl);

                offers = response.Content.ReadAsStringAsync().Result;    
            }

            return Json(JsonConvert.DeserializeObject(offers));
        }
    }
}