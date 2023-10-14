const { test, expect } = require('@playwright/test');
function beforeEach() {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
    });
};
function loanRegister() {
    test('loanRegister', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Quản lý đăng ký mượn' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanRegisterManager');
        await page.getByRole('row', { name: '1 HS00002 Học sinh Trần Uyên Phương trannam@gmail.com 0364112281 11/10/2023 14/10/2023 Chờ duyệt' }).getByLabel('').click();
        await page.getByRole('button', { name: 'Duyệt / Chi tiết' }).click();
        await page.getByText('Duyệt', { exact: true }).click();
        await page.getByRole('button', { name: 'Lưu lại' }).click();
        await expect(page.getByText('Thao tác thành công !')).toBeVisible();


    })
}
function browseQuickly() {
    test('browse quickly', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Quản lý đăng ký mượn' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanRegisterManager');
        await page.goto('https://qa.qltv.mobiedu.vn/admin/loanRegisterManager');
        await page.getByRole('row', { name: '2 HS00002 Học sinh Trần Uyên Phương trannam@gmail.com 0364112281 11/10/2023 12/10/2023 Chờ duyệt' }).getByLabel('').check();
        await page.getByRole('row', { name: '3 HS00002 Học sinh Trần Uyên Phương trannam@gmail.com 0364112281 11/10/2023 12/10/2023 Chờ duyệt' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Duyệt nhanh' }).click();
        await page.getByText('Duyệt', { exact: true }).click();
        await page.getByRole('button', { name: 'Lưu lại' }).click();
        await expect(page.getByText('Thao tác thành công !')).toBeVisible();


    })
}

//Từ chối
function main() {
    beforeEach();
    loanRegister();
    browseQuickly()

}
main()