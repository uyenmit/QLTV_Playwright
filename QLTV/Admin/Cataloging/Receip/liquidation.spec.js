const { test, expect } = require('@playwright/test');
function liquidation() {

    test('liquidation', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');

        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', { name: "Đăng nhập" }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Thanh lý ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/liquidationManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/liquidationManager/addLiquidation');
        await page.getByRole('row', { name: '1 KS_TIEU_THUYET-5-8 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien Tiếng Anh Mô hình 2020' }).getByLabel('').check();
        await page.getByRole('row', { name: '2 KS_TIEU_THUYET-5-7 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien Tiếng Anh Mô hình 2020' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Thanh lý' }).click();
        await page.getByPlaceholder('Nhập lý do (*)').click();
        await page.getByPlaceholder('Nhập lý do (*)').fill('Sách đã cũ');
        await page.getByPlaceholder('Nhập ghi chú').click();
        await page.getByPlaceholder('Nhập ghi chú').fill('2020');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới thanh lý thành công')).toBeVisible();

    });
}
liquidation();