const { test, expect } = require('@playwright/test');

function accountSetting() {

    test('account Setting', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu QLTV/);
        await page.getByRole('button', { name: "Đăng nhập" }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('uyenquanthu@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
        await page.locator('a').filter({ hasText: 'Quản thư Uyên' }).click();
        await page.getByRole('link', { name: 'Tài khoản' }).click();
        await page.getByLabel('Họ và tên').click();
        await page.getByLabel('Họ và tên').fill('Quản thư Uyên Trần');
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('uyenquanthu@gmail.com');
        await page.getByLabel('Đổi mật khẩu').click();
        await page.getByLabel('Mật khẩu hiện tại').click();
        await page.getByLabel('Mật khẩu hiện tại').fill('inet@123');
        await page.getByLabel('Mật khẩu mới').click();
        await page.getByLabel('Mật khẩu mới').fill('iNet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thông tin tài khoản thành công!')).toBeVisible();
        await page.locator('a').filter({ hasText: 'Quản thư Uyên' }).click();
        await page.getByRole('link', { name: 'Đăng xuất' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('uyenquanthu@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

    });
};
accountSetting()