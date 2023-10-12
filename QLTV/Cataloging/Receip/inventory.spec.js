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

function addInventory() {

    test('add Inventory', async ({ page }) => {

        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Kiểm kê' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/inventoryManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/inventoryManager/addInventory');
        await page.getByPlaceholder('Nhập tên đợt kiểm kê').click();
        await page.getByPlaceholder('Nhập tên đợt kiểm kê').fill('Kiểm kê ngày 9/10/2023');
        await page.getByPlaceholder('Từ ngày').click();
        await page.getByTitle('2023-10-09').getByText('9').click();
        await page.getByTitle('2023-10-12').getByText('12').click();
        await page.getByText('- Tất cả -').click();
        await page.getByText('Kho sách tiểu thuyết').click();
        await page.getByLabel('Tác giả').click();
        await page.getByText('J.R.R.Tolkien').click();
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByText('Kẻ Tầm Da - KS_TIEU_THUYET-5-9').click();
        await page.getByRole('button', { name: 'Chọn ấn phẩm' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Lập phiếu kiểm kê thành công!')).toBeVisible();
    });
}

function resultInventory() {

    test('result Inventory', async ({ page }) => {

        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Kiểm kê' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/inventoryManager');
        await page.getByRole('row', { name: '1 aa 01/10/2023 09/10/2023 Nguyễn Vân Anh Chi tiết Kết quả kiểm kê Danh sách đã kiểm kê Báo cáo' }).getByRole('button').nth(1).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/inventoryManager/resultInventory?id=31');
        await page.getByRole('row', { name: '1 STK-10-1 Tự Học Nhạc Lý Cơ Bản Kho sách tham khảo Ấn phẩm khác Mới' }).getByLabel('').first().check();
        await page.getByRole('row', { name: '2 STK-10-2 Tự Học Nhạc Lý Cơ Bản Kho sách tham khảo Ấn phẩm khác Bình thường' }).getByTitle('Bình thường').click();
        await page.getByText('Bình thường').nth(1).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật kết quả kiểm kê thành công!')).toBeVisible();
    });
}
function main() {
    beforeEach();
    addInventory();
    resultInventory();
}
main();