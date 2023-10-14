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
// function addStudent() {
//     test('add student', async ({ page }) => {
//         await page.getByRole('menu').getByText('Bạn đọc').click();
//         await page.getByRole('link', { name: 'Học sinh' }).click();
//         await page.getByRole('button', { name: 'Thêm mới' }).click();
//         await page.getByLabel('Họ tên').click();
//         await page.getByLabel('Họ tên').fill('Nguyen Oanh');
//         await page.getByLabel('Số điện thoại').click();
//         await page.getByLabel('Số điện thoại').fill('0385555556');
//         await page.getByPlaceholder('Chọn ngày').click();
//         await page.getByPlaceholder('Chọn ngày').fill('26/11/1999');
//         await page.getByPlaceholder('Chọn ngày').press('Enter');
//         await page.getByLabel('Email').click();
//         await page.getbyLabel('Email').fill('kieuoanh@gmail.com');
//         await page.getByLabel('Giới tính').click();
//         await page.getByText('Nữ').click();
//         await page.getByPlaceholder('Từ năm').click();
//         await page.getByPlaceholder('Từ năm').fill('2023');
//         await page.getByPlaceholder('Từ năm').press('Enter');
//         await page.getByPlaceholder('Đến năm').fill('2024');
//         await page.getByPlaceholder('Đến năm').press('Enter');
//         await page.getByLabel('Mật khẩu', { exact: true }).click();
//         await page.getByLabel('Mật khẩu', { exact: true }).fill('123456');
//         await page.getByLabel('Nhập lại mật khẩu').click();
//         await page.getByLabel('Nhập lại mật khẩu').fill('1123456');
//         await page.getByLabel('Nhập lại mật khẩu').dblclick();
//         await page.getByLabel('Nhập lại mật khẩu').fill('123456');
//         await page.getByRole('button', { name: 'Lưu' }).click();
//         await expect(page.getByText('Thêm mới học sinh thành công')).toBeVisible();
//     });
// }
function addStudent() {

    test('add Student', async ({ page }) => {

        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Học sinh' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager/addStudent');
        await page.getByLabel('Họ tên').click();
        await page.getByLabel('Họ tên').fill('Trần Đình Nam');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').fill('0364123820');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
        await page.getByText('22').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('trannam2@gmail.com');
        await page.getByPlaceholder('Từ năm').click();
        await page.getByText('2022').click();
        await page.getByText('2026').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới học sinh thành công')).toBeVisible();
    });
}

function addSquickly() {
    test('add Student quickly', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Học sinh' }).click();
        await page.getByRole('button', { name: 'Nhập nhanh' }).click();
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('input[type="file"]').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([`C:/Users/Admin/Downloads/Nhap_nhanh_hoc_sinh.xlsx`])
        await page.getByRole('button', { name: 'Tải lên' }).click();
        await expect(page.locator('span').filter({ hasText: 'Thêm mới thành công 2/2 bản ghi' })).toBeVisible();
    });
}

function addSnoname() {

    test('add Student no name', async ({ page }) => {

        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Học sinh' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager/addStudent');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').fill('0364122820');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
        await page.getByText('22').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').fill('trannam@gmail.com');
        await page.getByPlaceholder('Từ năm').click();
        await page.getByText('2022').click();
        await page.getByText('2026').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Họ và tên không được để trống!')).toBeVisible();
    });
}

function editStudent() {

    test('edit Student', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Học sinh' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager');
        await page.getByRole('row', { name: '10 HS00002 Trần Uyên Phương trannam@gmail.com       0364112281 22/06/1999 2022 - 2024 Đang hoạt động 02/10/2023 02/04/2024 Sửa Xóa' }).getByRole('button').first().click();
        await page.getByLabel('Họ tên').click();
        await page.getByLabel('Họ tên').clear();
        await page.getByLabel('Họ tên').fill('Trần Uyên Phương');
        await page.getByLabel('Số điện thoại').click();
        await page.getByLabel('Số điện thoại').clear();
        await page.getByLabel('Số điện thoại').fill('0364112281');
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
        await page.getByText('22').click();
        await page.getByLabel('Email').click();
        await page.getByLabel('Email').clear();
        await page.getByLabel('Email').fill('trannam@gmail.com');
        await page.getByPlaceholder('Từ năm').click();
        await page.getByText('2022').click();
        await page.getByText('2024').click();
        await page.getByRole('switch').click();
        await page.getByLabel('Mật khẩu', { exact: true }).click();
        await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
        await page.getByLabel('Nhập lại mật khẩu').click();
        await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật học sinh thành công!')).toBeVisible();

    });
}

function deleteStudent() {

    test('delete Student', async ({ page }) => {
        await page.getByRole('menu').getByText('Bạn đọc').click();
        await page.getByRole('link', { name: 'Học sinh' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/studentManager');
        await page.getByRole('row', { name: '9 HS00018 Nguyễn Minh Nam nguyenbnam@gmail.com 0363178823 20/10/2000 Nam 2022 - 2025 Đang hoạt động 09/10/2023 09/04/2024 Sửa Xóa' }).getByRole('button').nth(1).click();
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xoá dữ liệu thành công!')).toBeVisible();

    });
}
// import fs from 'fs';
// import path from 'path';
// import { } from '@playwright/test';
// import { parse } from 'csv-parse/sync';

// const records = parse(fs.readFileSync("tests/Cataloging/Reader/dataStudent.csv"),
//     {
//         columns: true,
//         skip_empty_lines: true
//     });

// function loginfile() {
//     for (const record of records) {
//         test(`data:${record.Hoten} ${record.Sodienthoai} ${record.Email} ${record.Tunam} ${record.Dennam} ${record.Matkhau} ${record.Nhaplaimatkhau} `, async ({ page }) => {
//             await page.getByRole('menu').getByText('Bạn đọc').click();
//             await page.getByRole('link', { name: 'Học sinh' }).click();
//             await page.getByRole('button', { name: 'Thêm mới' }).click();
//             await page.getByLabel('Họ tên').fill('record.Hoten');
//             await page.getByLabel('Số điện thoại').fill('record.Sodienthoai');
//             await page.getByPlaceholder('Chọn ngày').click();
//             await page.getByPlaceholder('Chọn ngày').fill('22/06/1999');
//             await page.getByText('22').click();
//             await page.getByLabel('Email').click();
//             await page.getByLabel('Email').fill('trannam@gmail.com');
//             await page.getByPlaceholder('Từ năm').click();
//             await page.getByText('2023').click();
//             await page.getByText('Biên mục', { exact: true }).click(); tByText('2032').click();
//             await page.getByLabel('Mật khẩu', { exact: true }).click();
//             await page.getByLabel('Mật khẩu', { exact: true }).fill('inet@123');
//             await page.getByLabel('Nhập lại mật khẩu').click();
//             await page.getByLabel('Nhập lại mật khẩu').fill('inet@123');
//             await page.getByRole('button', { name: 'Lưu' }).click();
//             await expect(page.getByText('Thêm mới học sinh thành công')).toBeVisible();

//         });
//     }
// }
function main() {
    beforeEach();
    addStudent();
    addSquickly();
    addSnoname();
    editStudent();
    deleteStudent();

}
main();

