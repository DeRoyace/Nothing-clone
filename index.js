window.addEventListener("load", function () {
    let load = this.document.querySelector(".loading");
    load.style.opacity = "0";
    load.style.visibility = "hidden"
});

var c = 0;
function navResponse() {
    let nav_menus = document.getElementById('nav-menus');
    let ham_icon = document.getElementById('ham-icon');
    console.log(nav_menus);
    // let links = document.getElementsByClassName('nav-link');
    let links = document.querySelector('#nav-menus a');
    var pos = 0;
    if (c % 2 === 0) {
        // nav_menus.classList.add('icon-nav-menu');
        // for (let index = 0; index < 4; index++) {
        //     if(links[index].classList.contains('active-link'))
        //         pos = index;
        // }
        // links[pos].classList.remove('active-link');
        // ham_icon.style.position="fixed";
        ham_icon.classList.add('make-cross');
        // nav_menus.style.visibility = "visible";
        // nav_menus.style.position = 'absolute';
        nav_menus.style.top = '60px';
        nav_menus.style.left = '0';
        nav_menus.style.background = 'white';
        nav_menus.style.width = '100%';
        nav_menus.style.flexDirection = 'column';
        // nav_menus.style.opacity = "1";
    }
    else {
        // nav_menus.classList.remove('icon-nav-menu');
        // nav_menus.style.opacity = "0"
        // setTimeout(function(){
        //     links[pos].classList.add('active-link');
        // }, 350);
        nav_menus.style.top = '-999px';
        // nav_menus.style.visibility = "hidden"
        // ham_icon.style.position="absolute";
        ham_icon.classList.remove('make-cross');
    }
    c += 1;
}


var drop = document.getElementsByClassName('drop-down')[0];
var navhead = document.getElementById('nav-bar');
var arrow = document.getElementsByClassName('hover-up-down')[0];

function drop_visible() {
    drop.style.top = '0px';
    drop.style.display = 'flex'
    navhead.style.background = 'black';
    drop.style.visibility = 'visible';
    arrow.style.transform = 'rotate(180deg)';
}

function drop_hide() {
    if(screen.width >= 1024)
    {
        drop.style.top = '-999px';
        navhead.style.background = 'rgba(255, 255, 255, 0.1)';
        arrow.style.transform = 'rotate(0deg)';
    }

}

function product_click()
{
    console.log('clicked')
    if(drop.style.display == 'none')
    {
        // console.log('first condition')
        drop_visible();
    }
    else
    {
        drop.style.display = 'none';
        // drop_hide();
    }
}

function product_img(product) {
    var img = document.getElementsByClassName('drop-link-img')[0];
    // img.style.height = '300px';
    // img.style.width = '200px';

    if (product == 'phone-2')
        img.style.backgroundImage = "url('https://cdn.shopifycdn.net/s/files/1/0692/5988/6904/files/BA_ALAK_200.1001.png?v=1688611423')";
    else if (product == 'phone-1')
        img.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0514/8554/0505/files/BA_ABR_300_1060.png?v=1661861483')";
    else if (product == 'ear-2')
        img.style.backgroundImage = "url('https://cdn.shopifycdn.net/s/files/1/0692/5988/6904/files/ELEV_AZU_BL_050_230703_V001_1001.png?v=1688527646')";
    else if (product == 'ear-stick')
        img.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0514/8554/0505/files/BA_ABR_360_02_0000_BA_BEL_030_1060.png?v=1668050200')";
    else if (product == '1-screen-protector')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/products/screen-protector-main_1292x.png?v=1669001145')";
    else if (product == '2-screen-protector')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/files/BA_ALAK_290_1600x2160_10385934-10c5-4627-b7d5-7cc80f3e4df3_1292x.png?v=1688737372')";
    else if (product == 'phone-1-case')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/products/clearcase1600x2160clear_a_1292x.png?v=1658475908')";
    else if (product == 'phone-2-case')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/products/BA_ALAK_310_1600x2160_35ea31c3-4283-4587-b7c7-55a399241df1_1292x.png?v=1688651338')";
    else if (product == 'power-45w')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/products/AdapterIN_1292x.png?v=1657571682')";
    else if (product == 'cable-cc')
        img.style.backgroundImage = "url('https://in.nothing.tech/cdn/shop/products/BA_ALAK_240_1600x2160_b61b7711-710a-42f0-9f60-f33c0a6f5480_1292x.png?v=1688651343')";
    else
        img.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0586/3270/0077/files/26Image_1280x1020_fc93e97b-7f99-4709-9253-8330d7d1c8ac_1292x.png?v=1658151723')";

}

console.log(screen.width);