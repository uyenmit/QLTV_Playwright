//@ts-check
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
function addSubject() {

    test('add Subject', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Môn học' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Mã môn').click();
        await page.getByLabel('Mã môn').fill('MH-2');
        await page.getByLabel('Tên môn', { exact: true }).click();
        await page.getByLabel('Tên môn', { exact: true }).fill('Ngữ Văn');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

    })
}
function editSubject() {
    test('edit Subject', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Môn học' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectManager');
        await page.getByRole('button', { name: 'Sửa' }).first().click();
        await page.getByLabel('Mã môn').click();
        await page.getByLabel('Mã môn').clear();
        await page.getByLabel('Mã môn').fill('MH-11');
        await page.getByLabel('Tên môn', { exact: true }).click();
        await page.getByLabel('Tên môn', { exact: true }).clear();
        await page.getByLabel('Tên môn', { exact: true }).fill('Toán');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    })
}
function deleteSubject() {

    test('delete Subject', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Môn học' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectManager');
        await page.getByRole('button', { name: 'Xóa' }).nth(1).click();
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    })
}
function main() {
    beforeEach();
    addSubject();
    editSubject();
    deleteSubject();

}
main()