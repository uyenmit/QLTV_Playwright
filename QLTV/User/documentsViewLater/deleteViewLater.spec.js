const { test, expect } = require('@playwright/test');
function beforeEach() {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('trannam@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');
        await page.getByRole('link', { name: 'user Trần Uyên Phương' }).click();
    });
};
function deleteViewLater() {

    test('delete ViewLater', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.locator('.ant-space > div:nth-child(2)').first().click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Xóa thành công 1/1 bản ghi')).toBeVisible();

    })
}

function deleteViewLaters() {
    test('deleteViewLaters', async ({ page }) => {
        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.getByRole('row', { name: '2 Thủy Xa Quán close-circle' }).getByLabel('', { exact: true }).check();
        await page.getByRole('row', { name: '1 Những đứa trẻ không bao giờ lớn Nguyễn Nhật Ánh close-circle' }).getByLabel('', { exact: true }).check();
        await page.getByRole('button', { name: 'close-square Xóa' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Xóa thành công 2/2 bản ghi')).toBeVisible();
    })
}

function deleteViewLatersFail() {

    test('deleteViewLatersFail', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.locator('.ant-space > div:nth-child(2)').first().click();
        await page.locator('div').filter({ hasText: /^Hủy$/ }).click();
        await expect(page.locator('div').filter({ hasText: /^Xoá tài liệu xem sau$/ }).first()).toBeHidden();

    })
}

function main() {
    beforeEach();
    deleteViewLater();
    deleteViewLaters();
    deleteViewLatersFail();
}
main()