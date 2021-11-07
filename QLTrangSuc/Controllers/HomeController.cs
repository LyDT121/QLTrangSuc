using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OBJ;
using BUS;

namespace QLTrangSuc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public PartialViewResult GetMenu()
        {
            return PartialView("Menu");
        }
       
        [HttpGet]
        public JsonResult GetCategory()
        {
            CategoryBUS bl = new CategoryBUS();
            List<Category> lct = bl.GetCategory();
            return Json(lct, JsonRequestBehavior.AllowGet);
        }

        ProductsBUS pdbus = new ProductsBUS();
        [HttpGet]
        public JsonResult GetProductsTL(string maloai)
        {
            List<Products> lpd = pdbus.GetProductsTL(maloai);
            return Json(lpd, JsonRequestBehavior.AllowGet);
        }

    }
}