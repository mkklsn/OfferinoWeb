using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace OfferinoWeb.src.server {
    public class MainController : Controller {
        const string offerUrl = "http://localhost:5790/api/offer/GetByBatch?itemCountToSkip=";

        public IActionResult Index(){
            return File("~/main.html", "text/html");
        }

        public IActionResult Callback(){
            return Index();
        }

        public async Task<IActionResult> OffersbyBatch(int itemCountToSkip){
            string offers;
            using(var client = new HttpClient()){
                var response = await client.GetAsync($"{offerUrl}{itemCountToSkip}");

                offers = response.Content.ReadAsStringAsync().Result;    
            }

            return Json(JsonConvert.DeserializeObject(offers));
        }
    }
}