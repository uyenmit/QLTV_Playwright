const { test, expect } = require('@playwright/test');
function viewDocumentsSeen() {

    test('view DocumentsSeen', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu QLTV/);
        await page.getByRole('button', { name: "Đăng nhập" }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('trannam@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');
        await page.getByRole('link', { name: 'user Trần Uyên Phương' }).click();
        await page.getByRole('link', { name: 'Tài liệu đã xem' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsSeen');
        await page.getByRole('row', { name: '1 Epub_Nhung dua tre close-circle' }).locator('label').click();
        await page.getByRole('button', { name: 'eye Xem' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/searchPublication/publication?id=627');

    })
}
viewDocumentsSeen();