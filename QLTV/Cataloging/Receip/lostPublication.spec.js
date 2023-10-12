const { test, expect } = require('@playwright/test');
function addLostPublication() {

    test('addLostPublication', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');

        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', { name: "Đăng nhập" }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Ấn phẩm mất' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/lostPublicationManager');
        await page.getByRole('button', { name: 'Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/lostPublicationManager/addLostPublication');
        await page.getByRole('row', { name: '2 KS_TIEU_THUYET-5-2 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien 2020' }).getByLabel('').check();
        await page.getByRole('row', { name: '3 KNT-2-4 KNT-2 Câu truyện tình yêu Kho ngôn tình Ernest Miller Hemingway 2020' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Báo mất' }).click();
        await expect(page.getByText('Thêm ấn phẩm mất thành công!')).toBeVisible();

    });
}
addLostPublication();