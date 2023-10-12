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
function addPermission() {

    test('add Permission', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Phân quyền' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/permissionManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Tên nhóm quyền').click();
        await page.getByLabel('Tên nhóm quyền').fill('Nhóm quyền ngày 10/10');
        await page.getByLabel('Mô tả').click();
        await page.getByLabel('Mô tả').fill('10/10/2023');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới nhóm quyền thành công!')).toBeVisible();
    });
}

function addPermissionNoName() {

    test('add Permission No Name', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Phân quyền' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/permissionManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Mô tả').click();
        await page.getByLabel('Mô tả').fill('10/10/2023');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Tên nhóm quyền không được để trống!')).toBeVisible();
    });
}

function permission() {

    test('Permission', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Phân quyền' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/permissionManager');
        await page.getByRole('button', { name: 'Phân quyền' }).first().click();
        await page.getByRole('row', { name: 'Danh sách quản thư' }).getByLabel('').check();
        await page.getByRole('row', { name: 'Lịch sử người dùng' }).getByLabel('').check();
        await page.getByRole('row', { name: 'Cấu hình ngày mượn ấn phẩm' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật phân quyền thành công!')).toBeVisible();
    });
}
function deletePermission() {

    test('delete Permission', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Phân quyền' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/permissionManager');
        await page.getByRole('button', { name: 'Xóa' }).first().click();
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa nhóm quyền thành công!')).toBeVisible();
    })
}

function loanPaySetting() {

    test('loanPay Setting', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Cấu hình ngày mượn-trả' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanPaySettingManager');
        await page.getByRole('row', { name: '1 Học viên 5 5 5 1' }).getByRole('button').first().click();
        await page.locator('#edit-loan-pay-setting_studentMaxInPlace').click();
        await page.locator('#edit-loan-pay-setting_studentMaxInPlace').fill('6');
        await page.locator('#edit-loan-pay-setting_studentMaxDocuments').click();
        await page.locator('#edit-loan-pay-setting_studentMaxDocuments').fill('6');
        await page.locator('#edit-loan-pay-setting_studentMaxItems').click();
        await page.locator('#edit-loan-pay-setting_studentMaxItems').fill('6');
        await page.locator('#edit-loan-pay-setting_studentDefaultDaysReturn').click();
        await page.locator('#edit-loan-pay-setting_studentDefaultDaysReturn').fill('6');
        await page.locator('#edit-loan-pay-setting_teacherMaxInPlace').click();
        await page.locator('#edit-loan-pay-setting_teacherMaxInPlace').fill('6');
        await page.locator('#edit-loan-pay-setting_teacherMaxDocuments').click();
        await page.locator('#edit-loan-pay-setting_teacherMaxDocuments').fill('6');
        await page.locator('#edit-loan-pay-setting_teacherMaxItems').click();
        await page.locator('#edit-loan-pay-setting_teacherMaxItems').fill('6');
        await page.locator('#edit-loan-pay-setting_teacherDefaultDaysReturn').click();
        await page.locator('#edit-loan-pay-setting_teacherDefaultDaysReturn').fill('6');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

    });
}

function main() {
    beforeEach();
    addPermission();
    addPermissionNoName();
    permission();
    deletePermission();
    loanPaySetting();

}
main();
