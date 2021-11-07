using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OBJ;
using BUS;


namespace QLTrangSuc.Controllers
{
    [Route("Products")]
    public class ProductsController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        ProductsBUS pdbus = new ProductsBUS();
        [HttpGet]
        public JsonResult GetProductsTL(string maloai)
        {
            List<Products> lpd = pdbus.GetProductsTL(maloai);
            return Json(lpd, JsonRequestBehavior.AllowGet);
        }
        //
        //public JsonResult GetProducts()
        //{
        //    List<Products> lp = pdbus.GetProducts();
        //    @ViewBag.SoSanPham = lp.Count;
        //    return Json(new { sp = lp }, JsonRequestBehavior.AllowGet);
        //}

        //public JsonResult GetSanPhamTL(string maloai, int pageIndex, int pageSize, string productName)
        //{
        //    SanphamList spl = pdbus.GetSanphams(maloai, pageIndex, pageSize, productName);

        //    return Json(spl, JsonRequestBehavior.AllowGet);
        //}

    }
}