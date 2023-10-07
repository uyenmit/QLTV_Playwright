const { test, expect } = require('@playwright/test');
function editP () {

    test('Edit Publisher', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
      
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

        await page.getByText('Danh mục dùng chung').click();

        await page.getByRole('link', { name: 'Nhà xuất bản' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publisherManager');

        await page.getByTitle('6').getByText('6').click();

        await page.getByRole('row', { name: '8 HH Hồng Hải Sửa Xóa' }).getByRole('button').first().click();
        
        await page.getByLabel('Mã nhà xuất bản', { exact: true }).click();

        await page.getByLabel('Mã nhà xuất bản', { exact: true }).clear();

        await page.getByLabel('Mã nhà xuất bản', { exact: true }).fill('HH2');
        
        await page.getByLabel('Tên nhà xuất bản', { exact: true }).click();

        await page.getByLabel('Tên nhà xuất bản', { exact: true }).clear();

        await page.getByLabel('Tên nhà xuất bản', { exact: true }).fill('Hồng Hải 2');

        await page.getByRole('button', { name: 'Lưu' }).click();

        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


      });
}
editP ();  