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
function addExport() {

    test('add Export', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê tiền xuất ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/exportStatisticalManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Kho ấn phẩm').click();
        await page.getByText('Kho ngôn tình').click();
        await page.getByLabel('Môn loại').click();
        await page.getByText('Ấn phẩm định kỳ tổng quát').click();
        await page.getByLabel('Chọn từ mã ĐKCB').click();
        await page.getByTitle('KNT-19-2').getByText('KNT-19-2').click();
        await page.locator('#add-publication-export_quantity').click();
        await page.locator('#add-publication-export_quantity').fill('1');
        await page.getByRole('button', { name: 'Chọn ấn phẩm' }).click();
        await page.getByRole('button', { name: 'Lưu xuất ấn phẩm' }).click();
        await expect(page.getByText('Thêm xuất ấn phẩm thành công!')).toBeVisible();

    })
}

function exportStatistica() {

    test('export Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê tiền xuất ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/exportStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('row', { name: '2 12/10/2023 1 162,000 Chi tiết' }).getByLabel('').check();
        await page.getByRole('row', { name: '3 13/11/2023 Thanh lý 2 184,000 Chi tiết' }).getByLabel('').check();
        await page.getByRole('row', { name: '4 11/10/2023 Xuất bán 2 184,000 Chi tiết' }).getByLabel('').check();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/' + "dataexport" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function exportallStatistica() {

    test('export all Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê tiền xuất ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/exportStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "dataexport1" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function main() {
    beforeEach();
    addExport();
    exportStatistica()
    exportallStatistica();
}
main()