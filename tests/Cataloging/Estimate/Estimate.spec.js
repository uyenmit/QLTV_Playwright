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

function editE () {

  test('edit Estimate', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

      await page.getByRole('row', { name: '3 DT00007 04/10/2023 Đại lý sách Văn Minh Cấp phát Chờ duyệt Sửa Xóa' }).getByRole('button').first().click();

      await page.getByPlaceholder('Chọn ngày').click();

      await page.getByTitle('2023-10-05').getByText('5').click();

      await page.getByLabel('Đại lý sách Hồng Gấm', { exact: true }).click();

      await page.getByText('').first().click();

      await page.getByLabel('Tính chất nguồn nhập').click();

      await page.getByText('Mua mới').click();

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

      await expect(page.getByText('Cập nhật thành công')).toBeVisible();

    });
}

function browseE () {

  test('Browse Estimate', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

      await page.getByRole('row', { name: '2 DT00009 04/10/2023 Nhà xuất bản Phụ nữ 01 Cấp phát Chờ duyệt Sửa Xóa' }).getByLabel('').check();
      
      await page.getByRole('button', { name: 'Duyệt' }).click();
      
      await page.getByRole('button', { name: 'OK' }).click();

      await expect(page.getByText('Duyệt thành công')).toBeVisible();

    });
}

function refuseE () {

  test('Refuse Estimate', async ({ page }) => {

      await page.getByText('Biên mục',{exact: true}).click();

      await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

      await page.getByRole('row', { name: '5 DT00003 25/10/2023 Nhà xuất bản Phụ nữ 01 Mua mới Chờ duyệt Sửa Xóa' }).getByLabel('').check();
      
      await page.getByRole('button', { name: 'Từ chối' }).click();

      await page.getByLabel('Lý do không đồng ý duyệt dự toán').click();
      
      await page.getByLabel('Lý do không đồng ý duyệt dự toán').fill('Không phù hợp');
      
      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Từ chối dự toán thành công!')).toBeVisible();

    });
}

function deleteE () {

  test('Delete Estimate', async ({ page }) => {
    await page.getByText('Biên mục',{exact: true}).click();

    await page.getByRole('link', { name: 'Dự toán ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/estimateManager');

    await page.getByRole('row', { name: '6 DT00007 04/10/2023 Đại lý sách Văn Minh Cấp phát Chờ duyệt Sửa Xóa' }).getByRole('button').nth(1).click();
    
    await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();

    await expect(page.getByText('Xóa dự toán thành công!')).toBeVisible();
    });
}

function main() {
    beforeEach();
    editE();
    browseE();
    refuseE();
    deleteE();
  }
  main();