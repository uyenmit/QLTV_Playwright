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
function printGeneralBook() {

    test('print General Book', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'In sổ đăng ký tổng quát' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/printGeneralBookManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "datagenneral" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function printIndividualCode() {

    test('print Individual Code', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'In sổ đăng ký cá biệt' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/printIndividualCodeManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('row', { name: '2 11/10/2023 KS_TIEU_THUYET-32-1 Nguyễn Nhật Ánh - Yêu Sao Để Không Đau 2022 92,000 Âm nhạc' }).getByLabel('').check();
        await page.getByRole('row', { name: '2 11/10/2023 KS_TIEU_THUYET-32-1 Nguyễn Nhật Ánh - Yêu Sao Để Không Đau 2022 92,000 Âm nhạc' }).getByLabel('').check();
        await page.getByRole('row', { name: '4 11/10/2023 KS_TIEU_THUYET-32-2 Nguyễn Nhật Ánh - Yêu Sao Để Không Đau 2022 92,000 Âm nhạc' }).getByLabel('').check();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "dataIndividual" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}

function printallIndividualCode() {

    test('print1 Individual Code', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'In sổ đăng ký cá biệt' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/printIndividualCodeManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "dataIndividual" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()
    })
}
function main() {
    beforeEach();
    printGeneralBook();
    printIndividualCode();
    printallIndividualCode();

}
main()