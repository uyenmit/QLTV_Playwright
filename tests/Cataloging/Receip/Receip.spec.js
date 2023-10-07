const { test, expect } = require('@playwright/test');
function beforeEach () {
  // Khởi tạo trình duyệt trước khi chạy mỗi test case
  test.beforeEach(async ({ page }) => {
    // Mở trình duyệt và điều hướng đến trang mobiedu.vn
    await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
    await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

    await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
  });
};

function addR () {

  test('add Receip', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');

      await page.getByRole('button', { name: 'Thêm chứng từ' }).click();

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Nhan đề ấn phẩm').click();

      await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

      await page.getByLabel('Kho ấn phẩm').click();
      
      await page.getByText('Kho ngôn tình').click();
      
      await page.getByLabel('Số lượng').click();

      await page.getByLabel('Số lượng').fill('4');

      await page.getByLabel('Đơn giá').click();

      await page.getByLabel('Đơn giá').fill('1000000');

      await page.getByRole('button', { name: 'Thêm' }).click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await page.getByLabel('minus-circle').locator('svg').click();

      await page.getByLabel('Môn loại').click();
      await page.getByText('Ấn phẩm định kỳ tổng quát').click();
      await page.getByLabel('Tác giả').click();
      await page.getByText('Ernest Miller Hemingway').click();
      await page.getByPlaceholder('Chọn năm').click();
      await page.getByRole('cell', { name: '2020' }).click();
      await page.getByLabel('Ngôn ngữ').click();
      await page.getByTitle('Tiếng Anh').click();
      await page.getByLabel('Định dạng').click();
      await page.getByText('Báo, tạp chí').click();
      await page.getByLabel('Loại bìa').click();
      await page.getByText('Bìa cứng').click();
      await page.locator('#publication-info').getByText('Báo, tạp chí').click();
      await page.getByLabel('Kích thước').click();
      await page.getByLabel('Kích thước').fill('25x30');
      await page.getByLabel('Số trang').click();
      await page.getByLabel('Số trang').fill('200');
      await page.getByRole('button', { name: 'Lưu' }).click();
      await page.getByLabel('Mã hóa đơn').click();
  

      await page.getByLabel('Mã hóa đơn').fill('123456');

      await page.getByLabel('Nguồn nhập', { exact: true }).click();

      await page.getByText('Nhà xuất bản Kim Đồng').first().click();

      await page.getByLabel('Tính chất nguồn nhập').click();

      await page.getByText('Cấp phát').click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addRfromEstimate () {

  test('add Receip from Estimate ', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');

      await page.getByRole('button', { name: 'Thêm chứng từ' }).click();

      await page.getByRole('button', { name: 'Thêm từ dự toán' }).click();

      await page.getByRole('row', { name: '2 DT00014 05/10/2023 Đại lý sách Văn Minh Mua mới' }).getByLabel('').check();
      
      await page.getByRole('button', { name: 'Chọn' }).click();

      await page.getByLabel('minus-circle').click();

      await page.getByLabel('Môn loại').click();

      await page.getByText('Anh ngữ và Anh ngữ cổ').click();

      await page.getByLabel('Tác giả').click();

      await page.getByText('J.R.R.Tolkien').click();

      await page.getByLabel('Định dạng').click();

      await page.getByText('Mô hình').click();

      await page.getByLabel('Loại bìa').click();

      await page.getByText('Bìa cứng').click();

      await page.getByLabel('Ngôn ngữ').click();

      await page.getByText('Tiếng Anh').click();

      await page.getByPlaceholder('Chọn năm').click();

      await page.getByText('2020', { exact: true }).click();

      await page.getByLabel('Kích thước').click();

      await page.getByLabel('Kích thước').fill('25x30');

      await page.getByLabel('Số trang').click();

      await page.getByLabel('Số trang').fill('2,00');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await page.getByLabel('Mã hóa đơn').click();

      await page.getByLabel('Mã hóa đơn').fill('000111');

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();
    });
}

function addRNcode () {

  test('add Receip no code', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');

      await page.getByRole('button', { name: 'Thêm chứng từ' }).click();

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Nhan đề ấn phẩm').click();

      await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện');

      await page.getByLabel('Kho ấn phẩm').click();
      
      await page.getByText('Kho ngôn tình').click();
      
      await page.getByLabel('Số lượng').click();

      await page.getByLabel('Số lượng').fill('4');

      await page.getByLabel('Đơn giá').click();

      await page.getByLabel('Đơn giá').fill('1000000');

      await page.getByRole('button', { name: 'Thêm' }).click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await page.getByLabel('minus-circle').locator('svg').click();

      await page.getByLabel('Môn loại').click();

      await page.getByText('Ấn phẩm định kỳ tổng quát').click();

      await page.getByLabel('Tác giả').click();

      await page.getByText('Ernest Miller Hemingway').click();

      await page.getByPlaceholder('Chọn năm').click();

      await page.getByRole('cell', { name: '2020' }).click();

      await page.getByLabel('Ngôn ngữ').click();

      await page.getByTitle('Tiếng Anh').click();

      await page.getByLabel('Định dạng').click();

      await page.getByText('Báo, tạp chí').click();

      await page.getByLabel('Loại bìa').click();

      await page.getByText('Bìa cứng').click();

      await page.getByLabel('Kích thước').click();

      await page.getByLabel('Kích thước').fill('25x30');

      await page.getByLabel('Số trang').click();

      await page.getByLabel('Số trang').fill('200');

      await page.getByRole('button', { name: 'Lưu' }).click();
    
      await page.getByLabel('Nguồn nhập', { exact: true }).click();

      await page.getByText('Nhà xuất bản Kim Đồng').first().click();

      await page.getByLabel('Tính chất nguồn nhập').click();

      await page.getByText('Cấp phát').click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await expect(page.getByText('Mã hóa đơn không được để trống!')).toBeVisible();

    });
}

function addRIcode () {

  test('add Receip invalid code ', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');

      await page.getByRole('button', { name: 'Thêm chứng từ' }).click();

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Nhan đề ấn phẩm').click();

      await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

      await page.getByLabel('Kho ấn phẩm').click();
      
      await page.getByText('Kho ngôn tình').click();
      
      await page.getByLabel('Số lượng').click();

      await page.getByLabel('Số lượng').fill('4');

      await page.getByLabel('Đơn giá').click();

      await page.getByLabel('Đơn giá').fill('1000000');

      await page.getByRole('button', { name: 'Thêm' }).click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await page.getByLabel('minus-circle').locator('svg').click();

      await page.getByLabel('Môn loại').click();

      await page.getByText('Ấn phẩm định kỳ tổng quát').click();

      await page.getByLabel('Tác giả').click();

      await page.getByText('Ernest Miller Hemingway').click();

      await page.getByPlaceholder('Chọn năm').click();

      await page.getByRole('cell', { name: '2020' }).click();

      await page.getByLabel('Ngôn ngữ').click();

      await page.getByTitle('Tiếng Anh').click();

      await page.getByLabel('Định dạng').click();

      await page.getByText('Báo, tạp chí').click();

      await page.getByLabel('Loại bìa').click();

      await page.getByText('Bìa cứng').click();

      await page.getByLabel('Kích thước').click();

      await page.getByLabel('Kích thước').fill('25x30');

      await page.getByLabel('Số trang').click();

      await page.getByLabel('Số trang').fill('200');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await page.getByLabel('Mã hóa đơn').click();

      await page.getByLabel('Mã hóa đơn').fill('12345');

      await expect(page.getByText('Mã hóa đơn bao gồm 6 ký tự số!')).toBeVisible();

    });
}

function addRNSupply () {

  test('add Receip no supply', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');

      await page.getByRole('button', { name: 'Thêm chứng từ' }).click();

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Nhan đề ấn phẩm').click();

      await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

      await page.getByLabel('Kho ấn phẩm').click();
      
      await page.getByText('Kho ngôn tình').click();
      
      await page.getByLabel('Số lượng').click();

      await page.getByLabel('Số lượng').fill('4');

      await page.getByLabel('Đơn giá').click();

      await page.getByLabel('Đơn giá').fill('1000000');

      await page.getByRole('button', { name: 'Thêm' }).click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await page.getByLabel('minus-circle').locator('svg').click();

      await page.getByLabel('Môn loại').click();

      await page.getByText('Ấn phẩm định kỳ tổng quát').click();

      await page.getByLabel('Tác giả').click();

      await page.getByText('Ernest Miller Hemingway').click();

      await page.getByPlaceholder('Chọn năm').click();

      await page.getByRole('cell', { name: '2020' }).click();

      await page.getByLabel('Ngôn ngữ').click();

      await page.getByTitle('Tiếng Anh').click();

      await page.getByLabel('Định dạng').click();

      await page.getByText('Báo, tạp chí').click();
      
      await page.getByLabel('Loại bìa').click();

      await page.getByText('Bìa cứng').click();
      
      await page.getByLabel('Kích thước').click();

      await page.getByLabel('Kích thước').fill('25x30');

      await page.getByLabel('Số trang').click();

      await page.getByLabel('Số trang').fill('200');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await page.getByLabel('Mã hóa đơn').click();

      await page.getByLabel('Mã hóa đơn').fill('123456');

      await page.getByLabel('Tính chất nguồn nhập').click();

      await page.getByText('Cấp phát').click();

      await page.getByRole('button', { name: 'Lưu lại' }).click();

      await expect(page.getByText('Nguồn nhập không được để trống!')).toBeVisible();

    });
}

function detailReceipt () {

  test('detail Receipt ', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Chứng từ ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager');
      await page.getByRole('row', { name: '1 CT00010 000007 05/10/2023 Đại lý sách Hồng Gấm Mua mới Chi tiết' }).getByRole('button').click();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/receiptManager/detailReceipt?code=CT00010'); 

    });
  } 
  
  
function main() {
    beforeEach();
    addR();
    addRfromEstimate();
    addRNcode();
    addRIcode();
    addRNSupply();
    detailReceipt();
  }
  main();