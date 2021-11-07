using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OBJ;
using BUS.Interface;
using BUS;

namespace QLTrangSuc.Controllers
{
    public class DetailProductsController : Controller
    {
        // GET: DescribeProducts
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetProducts(string ProductsID)
        {
            IDetailProducts pb = new DetailProductsBUS();
            Products p = pb.GetProducts(ProductsID);
            return Json(p, JsonRequestBehavior.AllowGet);
        }
    }
}