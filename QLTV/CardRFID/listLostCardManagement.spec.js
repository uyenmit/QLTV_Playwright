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
function exportlistLostCard() {

    test('export list LostCard', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách mất thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listLostCardManagement');
        const downloadPromise = page.waitForEvent('download');
        await page.locator('.ant-table-row > td').first().click();
        await page.locator('tr:nth-child(3) > td').first().click();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "exportlistLostCard" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function exportalllistLostCard() {

    test('export all listLostCard', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách mất thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listLostCardManagement');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "exportalllistLostCard" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()
    })
}
function detailLostCard() {

    test('detail LostCard', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách mất thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listLostCardManagement');
        await page.getByRole('row', { name: '2 T002 Ấn phẩm 13/10/2023 eye close-circle' }).locator('a').click();
        await expect(page.locator('div').filter({ hasText: /^Xem thông tin mất thẻ RFID$/ }).first()).toBeVisible();

    })
}

function deletelLostCard() {

    test('delete LostCard', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách mất thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listLostCardManagement');
        await page.getByRole('row', { name: '1 T002 Ấn phẩm 13/10/2023 eye close-circle' }).locator('svg').nth(1).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Khôi phục thẻ mất thành công!')).toBeVisible();
    })
}

function main() {
    beforeEach()
    exportlistLostCard();
    exportalllistLostCard();
    detailLostCard();
    deletelLostCard()
}
main()