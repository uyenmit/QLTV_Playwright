const { test, expect } = require('@playwright/test');
function forgotPwd () {
    test('forgot Password', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await page.getByRole('link', {name: "Quên mật khẩu"}).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/forgotPassword');
    })
}
forgotPwd ();  