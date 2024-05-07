var currentPg;


function login() {
    window.location = "home.html";
}
function signUp() {
    window.location = "Login.html";
}

function profileClick() {
    window.location = "admin_product_view.html";
}

function profileClickBack() {
    window.location = "home.html";

}

function addItemPress() {
    window.location = "add_new_product.html";
}

function addProduct() {
    alert("Product Added Successfully...")
    window.location = "admin_Update_product.html";
}

function viewProduct() {
    window.location = "single_product_view.html";
}


function updateProductProcess() {

    var pName = "micro:bit Development Board V1";
    var pPrice = 6250;
    var pAvailability = "In stock";
    var noOfUnits = 3;
    var packageInclude = ["Micro bit Module", "Connectivity cable"];
    var mainCategory = 1;
    var subCategory = 2;
    var updateBtn = `<button id="newProductBtn" onclick="update();" class="col-4 offset-4 addP-btn poppins-regular">Update Product</button>`;
    var pDetails = `
    The Arduino Uno is a open source microcontroller board based on the ATmega328 chip.This Board has 14 digital input / output pins, 6 analog input pins, Onboard 16 MHz ceramic resonator, Port for USB connection, Onboard DC power jack, An ICSP header and a microcontroller reset button.It contains everything needed to support the microcontroller.Using the board is also very easy, simply connect it to a computer with a USB cable or power it with DC adapter or battery to get started.

    The Uno differs from all preceding boards in that it does not use the FTDI USB - to - serial driver chip.Instead, it features the Atmega16U2Atmega8U2 up to version R2) programmed as a USB - to - serial converter.While the Arduino UNO can be powered via the USB connection or with an external power supply, the power source is selected automatically.

    External(non - USB) power can come either from an AC - to - DC adapter(wall - wart) or battery.The adapter can be connected by plugging a 2.1mm center - positive plug into the board's power jack. Also leads from a battery can be inserted in the GND and Vin pin headers of the Power connector. The board can operate on an external supply of 6 to 20 volts. If supplied with less than 7V, however, the 5V pin may supply less than five volts and the board may be unstable. If using more than 12V, the voltage regulator may overheat and damage the board. The recommended range is 5v to 12v for Arduino Uno.`;
    // document.getElementById("pg-title").innerHTML = "Update Product Details";
    // document.getElementById("upbtn").innerHTML = updateBtn;
    document.getElementById("ProductName").value = pName;
    document.getElementById("ProductPrice").value = pPrice;
    document.getElementById("mainCat").value = mainCategory;
    document.getElementById("subCat").value = subCategory;
    document.getElementById("pDescription").value = pDetails;





}
function update() {
    alert("Product Updated Successfully...");
    // window.location = "admin_product_view.html";
}

function admin_login() {
    window.location = "admin_Dashboard.html";

}

function singleProductView(x) {
    if (x == 1) {
        window.location = "microBit_singleView.html";
    } else if (x == 2) {
        window.location = "raspberryPi_singleView.html";
    } else if (x == 3) {
        window.location = "robotArm_singleView.html";
    }
}

//  function backProcess(id){
//      alert(id);
//  }

function adminPanelNavigation(id) {
    if (id == "dashboard-btn") {
        window.location = "admin_Dashboard.html";
    } else if (id == "manageProduct-btn") {
        window.location = "admin_panel_productManage.html";
    } else if (id == "manageUser-btn") {
        window.location = "admin_userManage.html";
    }
}

function loadTrig() {
    currentPg = "cart";
    cart_history_switch();

}

function gotoHistory(){
    currentPg = "history";
    cart_history_switch();
}

function cart_history_switch() {

    // alert("function called");
    // alert(currentPg);

    var cart = ` 
            <div class="row p-3 d-flex flex-lg-row flex-column-reverse">

                <div class="col-lg-8 col-12 mb-5" style="height: fit-content;">
                    <div class="row px-0 px-lg-2">

                        <!-- single product card start -->
                        <div class="col-12 shadow-sm mb-2 border rounded-1  d-flex justify-content-between align-items-center"
                            style="font-size: 12px;">
                            <div class="p-admin-img"
                                style="height: 80px; width: 100px; background: url(Product-imgs/arm.jpg) no-repeat center; background-size: cover;">
                            </div>
                            <div class="edit-icons d-flex justify-content-start" style="width: 40%;">
                                <span class="poppins-regular">Optimus 4 DOF Robot Arm</span>
                            </div>
                            <div class="edit-icons d-flex justify-content-start" style="width: 30%;">
                                <span class="poppins-regular">Rs: 5,400</span>
                            </div>
                            <div class="edit-icons d-flex flex-sm-row flex-column justify-content-between"
                                style="width: fit-content;">
                                <a title="View details" href="robotArm_singleView.html"><img src="resources/Eye.png" style="height: 20px;"
                                        alt=""></a>
                                <img src="resources/Remove.png" class="ms-0 ms-sm-3 mt-sm-0 mt-1" style="height: 20px;"
                                    alt="">
                            </div>
                        </div>
                        <!-- single product card start -->

                        <!-- single product card start -->
                        <div class="col-12 shadow-sm mb-2 border rounded-1  d-flex justify-content-between align-items-center"
                            style="font-size: 12px;">
                            <div class="p-admin-img"
                                style="height: 80px; width: 100px; background: url(Product-imgs/images.jpeg) no-repeat center; background-size: cover;">
                            </div>
                            <div class="edit-icons d-flex justify-content-start" style="width: 40%;">
                                <span class="poppins-regular">Raspberry Pi 4 Model B 2GB Original UK</span>
                            </div>
                            <div class="edit-icons d-flex justify-content-start" style="width: 30%;">
                                <span class="poppins-regular">Rs.25,750</span>
                            </div>
                            <div class="edit-icons d-flex flex-sm-row flex-column justify-content-between"
                                style="width:fit-content;">
                                <a title="View details" href="raspberryPi_singleView.html"><img src="resources/Eye.png" style="height: 20px;"
                                        alt=""></a>
                                <img src="resources/Remove.png" class="ms-0 ms-sm-3 mt-sm-0 mt-1" style="height: 20px;"
                                    alt="">
                            </div>
                        </div>
                        <!-- single product card start -->

                    </div>
                </div>

                <div class="col-lg-4 col-12 p-3 rounded-2 shadow mb-4 mb-lg-0"
                    style="background-color: #FDD700; height: fit-content;">
                    <div class="row poppins-light d-flex justify-content-center" style="font-size: 13px;"">
                        <div class=" col-12 poppins-medium fs-5">
                        <span>Order Summary</span>
                    </div>
                    <div class="col-12 d-flex justify-content-between m-2">
                        <span>Subtotal(2 items)</span>
                        <span class="poppins-regular">Rs: 31,150.00</span>
                    </div>
                    <div class="col-12 d-flex justify-content-between m-2">
                        <span>Shipping Cost</span>
                        <span class="poppins-regular">Rs: 495.00</span>
                    </div>
                    <hr style="margin: 5px; width: 100%;">
                    <div class="col-12 d-flex justify-content-between m-2">
                        <span>Total</span>
                        <span class="poppins-medium">Rs: 35,645.00</span>
                    </div>
                    <button id="" style="margin-bottom: 0;" class="col-11 mt-3 checkout-btn poppins-regular">Proceed to
                        checkout</button>

                </div>
            </div>`;


    var history = `
            <div class="row">
            <div class="col-12 col-lg-3">

                <div class="row">

                    <div class="col-12">
                        <div class="mb-3">
                            <label for="OrderId" class="form-label">Order No.</label>
                            <input type="email" class="form-control" id="OrderId" placeholder="#254363">
                        </div>
                    </div>

                    <div class="col-12 mb-3">
                        <label for="shippingStatus" class="form-label">Status</label>
                        <select id="shippingStatus" class="form-select form-select" aria-label="Small select example">
                            <option>Open this select menu</option>
                            <option value="1">Picked</option>
                            <option value="2">Shipping</option>
                            <option value="3">Recieved</option>
                        </select>
                    </div>

                    <div class="col-12 mb-3">
                        <label for="shippingStatus" class="form-label">Time Period</label>
                        <select id="shippingStatus" class="form-select form-select" aria-label="Small select example">
                            <option>Open this select menu</option>
                            <option value="1">Today</option>
                            <option value="2">Last Week</option>
                            <option value="3">Last Month</option>
                        </select>
                    </div>

                    <div class="col-12">
                        <button class="col-12" id="history-cart-btn">Filter</button>
                    </div>

                </div>
            </div>

            <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                <table class="table user-table" style="border: #FDD700;">

                    <thead class="poppins-medium">
                        <tr>
                            <th scope="col">Order No.</th>
                            <th scope="col">Odered Day</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody class="poppins-light">
                        <tr>
                            <th scope="row">#202020</th>
                            <td>20.03.2024</td>
                            <td>Picked</td>
                            <td>
                                <div class="d-flex flex-column flex-md-row">
                                    <img title="View Invoice" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/Bill.png" alt="">
                                    <img title="Download As a PDF" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/ExportPdf.png" alt="">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">#FDD700</th>
                            <td>20.03.2024</td>
                            <td>Delivered</td>
                            <td>
                                <div class="d-flex flex-column flex-md-row">
                                    <img title="View Invoice" class="custom-icon ms-1" src="resources/admin_dashboard/userManage/Bill.png" alt="">
                                    <img title="Download As a PDF" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/ExportPdf.png" alt="">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">#F2325g</th>
                            <td>20.03.2024</td>
                            <td>Shipping</td>
                            <td>
                                <div class="d-flex flex-column flex-md-row">
                                    <img title="View Invoice" class="custom-icon ms-1" src="resources/admin_dashboard/userManage/Bill.png" alt="">
                                    <img title="Download As a PDF" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/ExportPdf.png" alt="">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">#a45742</th>
                            <td>20.03.2024</td>
                            <td>Delivered</td>
                            <td>
                                <div class="d-flex flex-column flex-md-row">
                                    <img title="View Invoice" class="custom-icon ms-1" src="resources/admin_dashboard/userManage/Bill.png" alt="">
                                    <img title="Download As a PDF" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/ExportPdf.png" alt="">
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">#K424k5</th>
                            <td>20.03.2024</td>
                            <td>Delivered</td>
                            <td>
                                <div class="d-flex flex-column flex-md-row">
                                    <img title="View Invoice" class="custom-icon ms-1" src="resources/admin_dashboard/userManage/Bill.png" alt="">
                                    <img title="Download As a PDF" class="custom-icon ms-1" onclick="showInvoice();" src="resources/admin_dashboard/userManage/ExportPdf.png" alt="">
                                </div>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>

    `;

    if (currentPg == "cart") {
        document.getElementById("history-cart-btn").innerHTML = "Order History";
        document.getElementById("cart-title").innerHTML = "Shopping Cart";
        document.getElementById("content-container").innerHTML = cart;
        currentPg = "history";
    } else if (currentPg == "history") {
        document.getElementById("history-cart-btn").innerHTML = "Go to Cart";
        document.getElementById("cart-title").innerHTML = "Order History";
        document.getElementById("content-container").innerHTML = history;
        currentPg = "cart";

    }


}

function showInvoice(){

    var invoice = `
    <div class="row border p-3" style="font-size: 12px;margin-bottom: 100px;">

            <div class="col-12 d-flex justify-content-start">
                <img src="resources/Go Back.png" onclick="gotoHistory();" class="custom-icon" alt="">
            </div>

            <div class="col-12 d-flex flex-column justify-content-end align-items-end">
                <div class="">
                    <img src="resources/logo.png" height="30px" alt="">
                    <img src="resources/NewTech..png" height="30px" alt="">
                </div>
                <Span class="poppins-medium mt-4" style="text-align: end;">Invoice From <br><span
                        class="poppins-light">No:20/A, NewTech Pvt Ltd, Piliyandala. <br> +94 774 772 526 <br> newtechshop@gmail.com </span></Span>
                <div class="mb-3 mt-4" style="font-size: small; text-align: end;">
                    <span class="poppins-medium">Date and Time</span><br>
                    <span class="poppins-light">28-03-2024</span> &nbsp;
                    <span class="poppins-light">00:00:00</span>
                </div>
            </div>

            <div class="col-12 col-lg-3">

                <div class="row mt-3">

                    <div class="col-12 mb-3" style="font-size: small;">
                        <span class="poppins-medium">Invoice To :</span><br>
                        <span class="poppins-light">No:227, Piliyandala,  Colombo. <br> +94 774 772 526 <br> sachala@gmail.com </span>
                    </div>

                    <div class="col-12 mb-3" style="font-size: small;">
                        <span class="poppins-medium">Order No.</span><br>
                        <span class="poppins-light">#202020</span>
                    </div>

                    <div class="col-12 mb-3" style="font-size: small;">
                        <span class="poppins-medium">Status</span><br>
                        <span class="poppins-light">Picked Up</span>
                    </div>

                </div>
            </div>

            <div class="col-12 mt-4">



                <div class="row mt-3">

                      <!-- single product card start -->
                      <div class="col-12 mb-2  d-flex justify-content-between align-items-center poppins-medium" style="color: rgb(153, 153, 153);">
                        <div class="p-admin-img d-none d-lg-block"
                            style=" width: 100px; margin-right: 10px;">
                        </div>
                        <div class="edit-icons d-flex justify-content-start" style=" flex: 3;">
                            <span class="poppins-regular">Product Name</span>
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style=" flex: 1;">
                            Quantity
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style="flex: 2; ">
                            <span class="poppins-regular">Price</span>
                        </div>
                    </div>
                    <!-- single product card start -->
                    <hr>
                    <!-- single product card start -->
                    <div class="col-12 mb-2  d-flex justify-content-between align-items-center">
                        <div class="p-admin-img d-none d-lg-block"
                            style="height: 80px; width: 100px; margin-right: 10px; background: url(Product-imgs/arm.jpg) no-repeat center; background-size: cover;">
                        </div>
                        <div class="edit-icons d-flex justify-content-start" style=" flex: 3;">
                            <span class="poppins-regular">Optimus 4 DOF Robot Arm</span>
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style=" flex: 1;">
                            1
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style="flex: 2; ">
                            <span class="poppins-regular">Rs: 5,400 </span>
                        </div>
                    </div>
                    <!-- single product card start -->
                    <hr>
                    <!-- single product card start -->
                    <div class="col-12 mb-2  d-flex justify-content-between align-items-center">
                        <div class="p-admin-img d-none d-lg-block"
                            style="height: 80px; width: 100px; margin-right: 10px; background: url(Product-imgs/images.jpeg) no-repeat center; background-size: cover;">
                        </div>
                        <div class="edit-icons d-flex justify-content-start" style=" flex: 3;">
                            <span class="poppins-regular">Raspberry Pi 4 Model B 2GB Original UK</span>
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style=" flex: 1;">
                            1
                        </div>
                        <div class="edit-icons d-flex justify-content-end" style="flex: 2; ">
                            <span class="poppins-regular">Rs.25,750</span>
                        </div>
                    </div>
                    <!-- single product card start -->
                    <hr>

                </div>

            </div>


            <div class="col-12 col-lg-6 offset-0 offset-lg-6 mt-4 p-3" style="font-size: small; background-color: rgb(228, 228, 228);">
                <div class=" col-12 poppins-medium fs-5">
                    <span>Order Summary</span>
                </div>
                <div class="col-12 d-flex justify-content-between mt-2 ">
                    <span>Subtotal (2 items)</span>
                    <span class="poppins-regular">Rs: 31,150.00</span>
                </div>
                <div class="col-12 d-flex justify-content-between mt-2">
                    <span>Shipping Cost</span>
                    <span class="poppins-regular">Rs: 495.00</span>
                </div>
                <hr style=" width: 100%;">
                <div class="col-12 d-flex justify-content-between mt-2">
                    <span>Total</span>
                    <span class="poppins-medium">Rs: 35,645.00</span>
                </div>
            </div>


        </div>
    `;

    document.getElementById("content-container").innerHTML = invoice;



}
