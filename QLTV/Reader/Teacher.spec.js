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

function addTeacher() {

    test('add Teacher', async ({ page }) => {

        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Giáo viên' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager/addTeacher');
        await page.getByLabel('Họ tên').click();
        await page.getByLabel('Họ tên').fill('Trần Đình Sơn');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').fill('0364223720');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
        await page.getByText('22').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('trannam22@gmail.com');
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByText('Tổ Khoa học').click();
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới giáo viên thành công')).toBeVisible();
    });
}

function addTQuickly() {
    test('add Teacher quickly', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Giáo viên' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager');
        await page.getByRole('button', { name: 'Nhập nhanh' }).click();
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('input[type="file"]').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([`C:/Users/Admin/Downloads/Nhap_nhanh_giao_vien.xlsx`])
        await page.getByRole('button', { name: 'Tải lên' }).click();
        await expect(page.locator('span').filter({ hasText: 'Thêm mới thành công 2/2 bản ghi' })).toBeVisible();
    });
}

function addTNoName() {

    test('add Teacher no name', async ({ page }) => {

        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Giáo viên' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager/addTeacher');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').fill('0364223820');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
        await page.getByText('22').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('trannam2@gmail.com');
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByText('Tổ Khoa học').click();
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Họ và tên không được để trống!')).toBeVisible();
    });
}

function editTeacher() {

    test('edit Teacher', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Giáo viên' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager');
        await page.getByRole('row', { name: '8 GV00003 Trần Đình Sơn trannam22@gmail.com       0364223720 22/06/1999 Tổ Khoa học Đang hoạt động 10/10/2023 10/04/2024 Sửa Xóa' }).getByRole('button').first().click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager/editTeacher?id=350');
        await page.getByLabel('Họ tên').click();
        await page.getByLabel('Họ tên').clear();
        await page.getByLabel('Họ tên').fill('Trần Đình Phương');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').clear();
        await page.getByLabel('Số điện thoại').fill('0364223721');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('21/06/1999');
        await page.getByText('21').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').clear();
        await page.getByLabel('Email').fill('dinhphuong@gmail.com');
        await page.getByRole('switch').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật giáo viên thành công!')).toBeVisible();

    });
}

function deleteTeacher() {

    test('delete Teacher', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Giáo viên' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/teacherManager');
        await page.getByRole('row', { name: '7 GV00004 Nguyễn Thu Tuyết nguyentuyet1@gmail.com 0348482992 01/12/2000 Tổ Khoa học Đang hoạt động 10/10/2023 10/04/2024 Sửa Xóa' }).getByRole('button').nth(1).click();
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xoá dữ liệu thành công!')).toBeVisible();

    });
}
function cardSetting() {

    test('card Setting', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Cài đặt thẻ bạn đọc' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardSettingManager');
        await page.getByRole('row', { name: '1 Học viên 6' }).getByRole('button').click();
        await page.getByLabel('Thời hạn thẻ học viên (tháng)').click();
        await page.getByLabel('Thời hạn thẻ học viên (tháng)').fill('7');
        await page.getByLabel('Thời hạn thẻ giáo viên (tháng)').click();
        await page.getByLabel('Thời hạn thẻ giáo viên (tháng)').fill('7');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cài đặt thẻ bạn đọc thành công!')).toBeVisible();

    });
}
function main() {
    beforeEach();
    addTeacher();
    addTQuickly();
    addTNoName();
    editTeacher();
    deleteTeacher();
    cardSetting();


}
main();
