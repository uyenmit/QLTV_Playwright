const { test, expect } = require('@playwright/test');
function beforeEach() {
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

function addE() {

  test('add Estimate', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

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

    await page.getByRole('button', { name: 'Lưu dự toán' }).click();

    await expect(page.getByText('Thêm mới thành công')).toBeVisible();

  });
}

function addENSupply() {

  test('add Estimate no supply', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu 1');

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('4');

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await page.getByRole('button', { name: 'Lưu lại' }).click();

    await page.getByRole('button', { name: 'Lưu dự toán' }).click();

    await expect(page.getByText('Nguồn nhập không được để trống!')).toBeVisible();

  });
}

function addENsupplyType() {

  test('add Estimate no supplyType', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

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

    await page.getByRole('button', { name: 'Lưu dự toán' }).click();

    await expect(page.getByText('Tính chất nguồn nhập không được để trống!')).toBeVisible();

  });
}

function addENName() {

  test('add Estimate no name', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('4');

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Nhan đề không được để trống!')).toBeVisible();

  });
}

function addENstorageArea() {

  test('add Estimate no storageArea', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('4');

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Kho không được để trống!')).toBeVisible();

  });
}

function addENQuantity() {

  test('add Estimate no Quantity', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Số lượng không được để trống!')).toBeVisible();
    await expect(page.getByText('Số lượng phải lớn hơn 0!')).toBeVisible();


  });
}

function addENUnitprice() {

  test('add Estimate no Unit price', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('4');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Đơn giá không được để trống!')).toBeVisible();

    await expect(page.getByText('Đơn giá phải lớn hơn 0!')).toBeVisible();

  });
}

function addEIQuantity() {

  test('add Estimate invalid Quantity ', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Đại lý sách Hồng Gấm').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('-4');

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Số lượng phải lớn hơn 0!')).toBeVisible();

  });
}

function addEIUnitprice() {

  test('add Estimate invalid Unit price ', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Đại lý sách Hồng Gấm').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Thêm ấn phẩm' }).click();

    await page.getByLabel('Nhan đề ấn phẩm').click();

    await page.getByLabel('Nhan đề ấn phẩm').fill('Câu truyện tình yêu');

    await page.getByLabel('Kho ấn phẩm').click();

    await page.getByText('Kho ngôn tình').click();

    await page.getByLabel('Số lượng').click();

    await page.getByLabel('Số lượng').fill('4');

    await page.getByLabel('Đơn giá').click();

    await page.getByLabel('Đơn giá').fill('-1000000');

    await page.getByRole('button', { name: 'Thêm' }).click();

    await expect(page.getByText('Đơn giá phải lớn hơn 0!')).toBeVisible();

  });
}

function addE() {

  test('add Estimate', async ({ page }) => {

    await page.getByText('Biên mục', { exact: true }).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByPlaceholder('Chọn ngày').click();

    await page.getByTitle('2023-10-05').getByText('5').click();

    await page.getByLabel('Nguồn nhập', { exact: true }).click();

    await page.getByText('Mua mới').first().click();

    await page.getByLabel('Tính chất nguồn nhập').click();

    await page.getByText('Cấp phát').click();

    await page.getByRole('button', { name: 'Nhập nhanh' }).click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('input[type="file"]').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([`C:/Users/Admin/Downloads/Them_nhanh.xlsx`])
    await page.getByRole('button', { name: 'Tải lên' }).click();
    await expect(page.locator('span').filter({ hasText: 'Thêm mới thành công 3/3 bản ghi' })).toBeVisible();
    await expect(page.getByLabel('Nhập nhanh từ file excel').getByText('Thêm mới thành công 3/3 bản ghi')).toBeVisible();

    await page.getByRole('button', { name: 'Thêm' }).click();

    await page.getByRole('button', { name: 'Lưu lại' }).click();

    await page.getByRole('button', { name: 'Lưu dự toán' }).click();

    await expect(page.getByText('Thêm mới thành công')).toBeVisible();
  });
}


function main() {
  beforeEach();
  addE();
  addENSupply();
  addENsupplyType();
  addENName();
  addENstorageArea();
  addENQuantity();
  addENUnitprice();
  addEIQuantity();
  addEIUnitprice();

}
main();