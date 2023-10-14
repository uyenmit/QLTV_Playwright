const { test, expect } = require('@playwright/test');
import fs from 'fs';
import path from 'path';
function beforeEach() {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
    });
};
function loginInvalid() {

    test('login Invalid', async ({ page }) => {
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Vui lòng nhập số điện thoại hoặc email!')).toBeVisible();
        await expect(page.getByText('Vui lòng nhập mật khẩu!')).toBeVisible();

    })
}

function loginInvalidPass() {

    test('login Invalid Pass', async ({ page }) => {
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await page.getByPlaceholder('Tài khoản').fill('tranaxuan@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('iNet');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Mật khẩu hoặc tài khoản không chính xác')).toBeVisible();

    })
}
function loginInvalidName() {

    test('login Invalid Name', async ({ page }) => {
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await page.getByPlaceholder('Tài khoản').fill('  !tranaxuan@gcom  ');
        await page.getByPlaceholder('Mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page.getByText('Tài khoản không tồn tại')).toBeVisible();

    })
}

function main() {
    beforeEach();
    loginInvalid();
    loginInvalidPass();
    loginInvalidName();
}
main()