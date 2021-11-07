/// <reference path="../angular.min.js" />
//var myap = angular.module('MyApp', []);
//myap.controller("ProductsController", function ($scope, $http) {
//    $http.get('/Products/GetSanPham').then(function ($scope, $http) {
//        $scope.ListSanPham = d.data;
//    }, function (error) { alert("Failed"); });
//});
var homeapp = angular.module('HomeApp', ['angularUtils.directives.dirPagination']);

//Menu động
homeapp.controller("MenuController",
    function ($scope, $rootScope, $http) {
        $http({
            method: 'get',
            url: '/Home/GetCategory'
        }).then(function Success(d) {
            $rootScope.ListCategory = d.data;
        }, function Error() {
            /*            alert('Lấy sp lỗi');*/
        });
        $rootScope.SelectCategory = function (l) {
            localStorage.setItem("CategoryID", l);
        }
    });

homeapp.controller("ProductsController", function ($scope, $http) {
    var maLoai = localStorage.getItem("CategoryID") //;
    $http({
        method: "get",
        url: '/Products/GetProductsTL',
        params: { maloai: maLoai }
    }).then(function success(d) {
        $scope.ListProducts = d.data;
        console.log(maLoai);
    }, function error(e) {
        alert("chua lay dc san pham")
    });

});






homeapp.controller("ProductsController", function ($scope, $http) {
//Begin sort
$rootScope.sortcolumn = "ProductsID";
$rootScope.reverse = true;
$rootScope.direct = "Ascending";
    //Khi nhấn button sẽ chuyển đổi chiều sắp xếp
    $scope.Chon = function (d) {
        if ($scope.dr == "Ascending") {
            $scope.reverse = false;
            $scope.dr = "Decreasing"
        }
        else {
            $scope.reverse = true;
            $scope.dr = "Ascending"
        }
    }
    ///Lấy sản phẩm hiển thị lên giao diện <phân trang>
    $scope.GetProducts = function () {
        var MaLoai = localStorage.getItem("CategoryID");
        if (MaLoai == undefined) {
            MaLoai = "";
        }
        $http.get('"/Products/GetProductsTL"',
            {
                params: {
                    maloai: MaLoai, pageIndex: $rootScope.pageIndex, pageSize:
                        $rootScope.pageSize, productName: $rootScope.searchName
                }
            }).then(function (d) {
                $scope.ListProducts = d.data;
                $rootScope.totalCount = $scope.ListProducts.totalCount;
            }, function (error) { alert('Failed'); });
    };
});




homeapp.controller("DetailProduct", function ($scope, $rootScope, $http) {
    $http({
        method: "get",
        url: "/DetailProducst/GetProducts",
        params: {
            ProductsID: localStorage.getItem("ProductsID")
        }
    }).then(function sucesss(d) { $scope.Products = d.data; }, function error() { });

});


