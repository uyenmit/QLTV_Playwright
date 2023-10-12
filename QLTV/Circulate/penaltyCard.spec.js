const { test, expect } = require('@playwright/test');
function beforeEach() {
    // Khởi tạo trình duyệt trước khi chạy mỗi test case
    test.beforeEach(async ({ page }) => {
        // Mở trình duyệt và điều hướng đến trang mobiedu.vn
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
    });
};
function addpenaltyCard() {

    test('addpenaltyCard', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Phạt thẻ bạn đọc' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/penaltyCardManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Mã thẻ bạn đọc').click();
        await page.getByText('GV00011 - Phạm Tiến Nam').click();
        await page.getByLabel('Lý do phạt', { exact: true }).click();
        await page.getByTitle('Làm mất sách').getByText('Làm mất sách').click();
        await page.getByLabel('Tiền phạt').click();
        await page.getByLabel('Tiền phạt').fill('100,000');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm đối tượng phạt thẻ thành công!')).toBeVisible();
    })
}
function main() {
    beforeEach()
    addpenaltyCard();
}
main()