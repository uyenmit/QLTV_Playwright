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
function exportcardRFID() {

    test('export cardRFID', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        const downloadPromise = page.waitForEvent('download');
        await page.locator('.ant-table-row > td').first().click();
        await page.locator('tr:nth-child(3) > td').first().click();
        await page.getByText('Xuất file').click();
        const download = await downloadPromise;
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "exportcardRFID" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()

    })
}
function exportallcardRFID() {

    test('export all cardRFID', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        //Click exxport file
        const downloadPromise = page.waitForEvent('download');
        await page.getByText('Xuất tất cả').click();
        const download = await downloadPromise;
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'c:/Users/Admin/Downloads/QLTV_exportfile/' + "exportallcardRFID" + suggestedFileName;
        await download.saveAs(filePath)
        console.log('Tên file path:', filePath);
        expect(fs.existsSync(filePath)).toBeTruthy()
    })
}

function reportLostCardRFID() {

    test('report Lost CardRFID()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        await page.locator('.ant-table-row > td').first().click();
        await page.locator('tr:nth-child(3) > td').first().click();
        await page.getByRole('button', { name: 'Báo mất' }).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Báo mất thẻ RFID thành công!')).toBeVisible();
    })
}

function assignCardRFID() {

    test('assign CardRFID()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        await page.locator('tr:nth-child(5) > td').first().click();
        await page.getByRole('button', { name: 'credit-card Gán thẻ' }).click();
        await page.getByLabel('Loại chủ thẻ').click();
        await page.getByTitle('Ấn phẩm').click();
        await page.getByLabel('Chọn chủ thẻ').click();
        await page.getByTitle('KNT-2-1').getByText('KNT-2-1').click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thẻ RFID mã 0011 đã gắn với chủ thể KNT-2-1 thành công!')).toBeVisible();
    })
}

function recallCardRFID() {

    test('recall CardRFID()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        await page.locator('tr:nth-child(3) > td').first().click();
        await page.getByRole('button', { name: 'Thu hồi' }).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Thu hồi thẻ RFID thành công!')).toBeVisible();
    })
}
function deleteCardRFID() {

    test('delete CardRFID()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Danh sách thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/listCardRFID');
        await page.locator('tr:nth-child(3) > td').first().click();
        await page.getByRole('button', { name: 'close-square Xóa' }).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Xóa thẻ RFID thành công!')).toBeVisible();
    })
}

function main() {
    beforeEach();
    exportcardRFID();
    exportallcardRFID();
    reportLostCardRFID();
    assignCardRFID();
    recallCardRFID();
    deleteCardRFID()
}

main()