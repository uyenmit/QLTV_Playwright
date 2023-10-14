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
function penaltyStatistical() {

    test('penalty Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê tiền phạt' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/penaltyStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('row', { name: '2 GV00009 Lê Thị Thúy Giáo viên 10/10/2023 10/04/2024 11/10/2023 100,000' }).getByLabel('').check();
        await page.getByRole('row', { name: '3 GV00011 Phạm Tiến Nam Giáo viên 10/10/2023 10/04/2024 11/10/2023 200,000' }).getByLabel('').check();
        await page.getByRole('row', { name: '4 GV00010 Đỗ Minh Nam Giáo viên 10/10/2023 10/04/2024 11/10/2023 75,000' }).getByLabel('').check();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "datapenalty" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function penalty1Statistical() {

    test('penalty1 Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê tiền phạt' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/penaltyStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "datapenalty1" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()
    })
}
function main() {
    beforeEach();
    penaltyStatistical();
    penalty1Statistical()
}
main()

