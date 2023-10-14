const { test, expect } = require('@playwright/test');
import fs from 'fs';
import path from 'path';
function beforeEach() {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
    });
};
function addDigitalPub() {

    test('add DigitalPub', async ({ page }) => {

        await page.getByText('Biên mục số').click();
        await page.getByRole('link', { name: 'Danh sách biên mục số' }).click();
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-27 Thủy Xa Quán Kho sách tiểu thuyết eye' }).getByRole('link').click();
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('10 Vạn câu hỏi vì sao');
        await page.getByLabel('Định dạng tài liệu').click();
        await page.getByText('Sách điện tử').click();
        await page.getByLabel('Định dạng file').click();
        await page.getByText('epub', { exact: true }).click();
        await page.getByLabel('Trạng thái khai thác').click();
        await page.getByPlaceholder('Phí xem tài liệu').click();
        await page.getByPlaceholder('Phí xem tài liệu').fill('10000');
        await page.getByPlaceholder('Phí tải tài liệu').click();
        await page.getByPlaceholder('Phí tải tài liệu').fill('10000');
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('button').filter({ hasText: 'Chọn file' }).click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([`C:/Users/Admin/Downloads/(Zoe Bentley #3) Mike Omer - Thicker than Blood.epub`])
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới tài liệu số đính kèm thành công!')).toBeVisible();

    })
}
function editDigitalPub() {

    test('edit DigitalPub', async ({ page }) => {

        await page.getByText('Biên mục số').click();
        await page.getByRole('link', { name: 'Danh sách biên mục số' }).click();
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-27 Thủy Xa Quán Kho sách tiểu thuyết eye' }).getByRole('link').click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/digitalPublicationList/digitalPublication?id=620');
        await page.getByRole('row', { name: '1 00018 Epub_Sách những data update Sách điện tử epub 07/10/2023 eye edit close-circle' }).getByRole('link').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('Epub_Sách những data update 13/10');
        await page.getByText('epub', { exact: true }).click();
        await page.getByText('pdf', { exact: true }).click();
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('button').filter({ hasText: 'Chọn file' }).click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([`C:/Users/Admin/Downloads/Klune, T J - Bear, Otter and the Kid.pdf`])
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Sửa tài liệu số thành công! Quá trình cập nhật file đang diễn ra. Vui lòng chờ xem file sau khoảng 10 phút!')).toBeVisible();
    })
}
// Sửa thiếu trường bắt buộc
function editDigitalPubInvalid() {

    test('edit DigitalPub Invalid', async ({ page }) => {

        await page.getByText('Biên mục số').click();
        await page.getByRole('link', { name: 'Danh sách biên mục số' }).click();
        await page.getByRole('row', { name: '2 KNT-19 Ngày xưa có một chuyện tình Kho ngôn tình eye' }).getByRole('link').click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/digitalPublicationList/digitalPublication?id=609');
        await page.locator('div#__next tr:nth-child(2) > td:nth-child(8) > a').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').clear();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Vui lòng nhập tiêu đề tài liệu đính kèm!')).toBeVisible();
    })
}
// Click Huỷ khi sửa tài liệu đính kèm
function editDigitalPubFail() {

    test('edit DigitalPub Fail', async ({ page }) => {

        await page.getByText('Biên mục số').click();
        await page.getByRole('link', { name: 'Danh sách biên mục số' }).click();
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-27 Thủy Xa Quán Kho sách tiểu thuyết eye' }).getByRole('link').click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/digitalPublicationList/digitalPublication?id=620');
        await page.getByRole('row', { name: '1 00018 Epub_Sách những data update Sách điện tử epub 07/10/2023 eye edit close-circle' }).getByRole('link').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('Epub_Sách những data update 13/10');
        await page.getByText('epub', { exact: true }).click();
        await page.getByText('pdf', { exact: true }).click();
        await page.locator('div').filter({ hasText: 'Hủy' }).nth(2).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/digitalPublicationList/digitalPublication?id=620');
    })
}
function deleteDigitalPub() {

    test('delete DigitalPub', async ({ page }) => {

        await page.getByText('Biên mục số').click();
        await page.getByRole('link', { name: 'Danh sách biên mục số' }).click();
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-27 Thủy Xa Quán Kho sách tiểu thuyết eye' }).getByRole('link').click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/digitalPublicationList/digitalPublication?id=620');
        await page.getByRole('row', { name: '4 00038 Epub_Thuy Xa Quan Sách điện tử epub 12/10/2023 eye edit close-circle' }).locator('svg').nth(2).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    })
}
function main() {
    beforeEach();
    addDigitalPub();
    editDigitalPub();
    editDigitalPubInvalid();
    editDigitalPubFail();
    deleteDigitalPub();
}
main()