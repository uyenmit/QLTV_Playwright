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
function addLibrarian() {

    test('add Librarian', async ({ page }) => {

        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Danh sách quản thư' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/librarianManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/librarianManager/addLibrarian');
        await page.getByLabel('Họ và tên').click();
        await page.getByLabel('Họ và tên').fill('Trần Trọng Nam');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').fill('0343123820');
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('trongnam@gmail.com');
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByText('Nhóm quyền khảo sát').click();
        await page.getByText('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới tài khoản quản trị viên thành công!')).toBeVisibl();
    });
}

function editLibrarian() {

    test('edit Librarian', async ({ page }) => {

        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Danh sách quản thư' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/librarianManager');
        await page.getByRole('button', { name: 'Sửa' }).first().click();
        await page.getByLabel('Họ và tên').click();
        await page.getByLabel('Họ và tên').clear();
        await page.getByLabel('Họ và tên').fill('Nguyễn Trọng Khánh');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').clear();
        await page.getByLabel('Số điện thoại').fill('0343123720');
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').clear();
        await page.getByLabel('Email').fill('trongkhanh@gmail.com');
        await page.locator('div').filter({ hasText: /^Nhóm quyền khảo sát$/ }).click();
        await page.getByTitle('Nhóm quyền kiểm tra').click();
        await page.getByText('Nhóm quyền khảo sátNhóm quyền kiểm tra+ 0 ...').click();
        await page.getByRole('switch').click();
        await page.getByLabel('Mật khẩu mới').click();
        await page.getByLabel('Mật khẩu mới').fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật tài khoản thành công!')).toBeVisible();

    });
}

function deleteLibrarian() {

    test('delete Librarian', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Danh sách quản thư' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/librarianManager');
        // await page.getByRole('button', { name: 'Xóa' }).first().click();
        // await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        // await expect(page.getByText('Xoá thành công!')).toBeVisible();
        await page.getByRole('button', { name: 'Xóa' }).first().click();
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xoá thành công!')).toBeVisible();

    })
}
function main() {
    beforeEach();
    addLibrarian();
    editLibrarian();
    deleteLibrarian();

}
main();