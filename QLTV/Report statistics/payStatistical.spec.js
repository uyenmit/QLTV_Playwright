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
function payStatistica() {

    test('pay Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê trả ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/payStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-17-4 Yêu Sao Để Không Đau 1 Kho sách tiểu thuyết Nguyễn Nhật Ánh Khác Sách điện tử 2020 Lưu kho Bình thường 92,000' }).getByLabel('').check();
        await page.getByRole('row', { name: '2 KNT-19-3 Ngày xưa có một chuyện tình 1 Kho ngôn tình Nguyễn Nhật Ánh Khác Sách in 2021 Đang mượn Bình thường 1,000,000' }).getByLabel('').check();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "datapayS1" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function pay1Statistica() {

    test('pay1 Statistica', async ({ page }) => {
        await page.getByRole('menu').getByText('Thống kê báo cáo').click();
        await page.getByRole('link', { name: 'Thống kê trả ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/payStatisticalManager');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        // console.log('ádasd', download);
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "datapayS" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()
    })
}
function main() {
    beforeEach();
    payStatistica();
    pay1Statistica();
}
main()