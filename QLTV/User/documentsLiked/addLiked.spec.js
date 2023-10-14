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
function addLikedToArchive() {

    test('add LikedToArchive', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.getByRole('row', { name: '1 Dưới Một Mái Nhà Ở Paris close-circle' }).getByLabel('', { exact: true }).click();
        await page.getByRole('button', { name: 'plus-circle Thêm vào kho tư liệu' }).click();
        await page.getByRole('button', { name: 'plus-circle Tạo chủ đề mới' }).click();
        await page.getByPlaceholder('Nhập tên chủ đề').click();
        await page.getByPlaceholder('Nhập tên chủ đề').fill('Tiểu thuyết 1');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Tạo chủ đề thành công !')).toBeVisible();
        await page.getByLabel('Chọn chủ đề').click();
        await page.getByText('Tiểu thuyết 1', { exact: true }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm tư liệu thành công !')).toBeVisible();
    })
}

function addLikedToArchiveFail() {

    test('add LikedToArchive Fail', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.getByRole('row', { name: '1 Dưới Một Mái Nhà Ở Paris close-circle' }).getByLabel('', { exact: true }).click();
        await page.getByRole('button', { name: 'plus-circle Thêm vào kho tư liệu' }).click();
        await page.locator('div').filter({ hasText: /^Hủy$/ }).click();
        await expect(page.locator('div').filter({ hasText: /^Thêm mới vào kho tư liệu$/ }).first()).toBeHidden();
    })
}
function main() {
    beforeEach();
    addLikedToArchive();
    addLikedToArchiveFail();

}
main()