const { test, expect } = require('@playwright/test');
function changePass() {

    test('changePass', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');

        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', { name: "Đăng nhập" }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('trannam@gmail.com');

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');
        await page.getByRole('link', { name: 'user Trần Uyên Phương' }).click();
        await page.getByRole('link', { name: 'Đổi mật khẩu' }).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Vui lòng nhập mật khẩu hiện tại!')).toBeVisible();
        await expect(page.getByText('Vui lòng nhập mật khẩu mới!')).toBeVisible();
        await expect(page.getByText('Vui lòng nhập lại mật khẩu mới!')).toBeVisible();
        await page.getByPlaceholder('Nhập mật khẩu', { exact: true }).click();
        await page.getByPlaceholder('Nhập mật khẩu', { exact: true }).fill('inet@123');
        await page.getByPlaceholder('Nhập mật khẩu mới').click();
        await page.getByPlaceholder('Nhập mật khẩu mới').fill('iNet@123');
        await page.getByPlaceholder('Nhập lại mật khẩu mới').click();
        await page.getByPlaceholder('Nhập lại mật khẩu mới').fill('iNet@123');
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Bạn đã đổi mật khẩu thành công !')).toBeVisible();

    });
}
changePass();  