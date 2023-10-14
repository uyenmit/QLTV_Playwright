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
function addLaterToArchive() {

    test('add LaterToArchive', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu đã thích' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsLiked');
        await page.getByRole('row', { name: '6 Doc_3 Megan Miranda close-circle' }).getByLabel('', { exact: true }).click();
        await page.getByRole('button', { name: 'plus-circle Thêm vào kho tư liệu' }).click();
        await page.getByRole('button', { name: 'plus-circle Tạo chủ đề mới' }).click();
        await page.getByPlaceholder('Nhập tên chủ đề').click();
        await page.getByPlaceholder('Nhập tên chủ đề').fill('Tiểu thuyết 2');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Tạo chủ đề thành công !')).toBeVisible();
        await page.getByLabel('Chọn chủ đề').click();
        await page.getByText('Tiểu thuyết 2', { exact: true }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm tư liệu thành công !')).toBeVisible();
    })
}

function addLaterToArchiveFail() {

    test('add LaterToArchive Fail', async ({ page }) => {

        await page.getByRole('link', { name: 'Tài liệu đã thích' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsLiked');
        await page.getByRole('row', { name: '6 Doc_3 Megan Miranda close-circle' }).getByLabel('', { exact: true }).click();
        await page.getByRole('button', { name: 'plus-circle Thêm vào kho tư liệu' }).click();
        await page.locator('div').filter({ hasText: /^Hủy$/ }).click();
        await expect(page.locator('div').filter({ hasText: /^Thêm mới vào kho tư liệu$/ }).first()).toBeHidden();
    })
}
function main() {
    beforeEach();
    addLaterToArchive();
    addLaterToArchiveFail();

}
main()