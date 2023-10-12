const { test, expect } = require('@playwright/test');
function beforeEach() {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
    });
};
function addLoan() {

    test('add Loan', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Mượn-trả ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanPayManager');
        await page.getByRole('button', { name: 'Báo mượn' }).click();
        await page.locator('div').filter({ hasText: /^Chọn mã thẻ$/ }).nth(4).click();
        await page.getByText('GV00011 - Phạm Tiến Nam').click();
        await page.locator('.ant-select-selection-overflow').click();
        await page.getByText('Nguyễn Vĩnh Nguyên').click();
        await page.getByLabel('Ấn phẩm').click();
        await page.getByText('KNT-19-1 - Ngày xưa có một chuyện tình').click();
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('17/10/2024');
        await page.getByTitle('2024-10-17').getByText('17').click();
        await page.getByRole('button', { name: 'Thêm vào danh sách' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm phiếu mượn ấn phẩm thành công!')).toBeVisible();
    })
}

function addLoanToBorrow() {
    test('add Loan To Borrow', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Mượn-trả ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanPayManager');
        await page.getByRole('button', { name: 'Báo mượn' }).click();
        await page.getByLabel('Mã thẻ bạn đọc').click();
        await page.getByLabel('Mã thẻ bạn đọc').fill('Diễm My');
        await page.getByText('HS00021 - Nguyễn Thị Diễm My').click();
        await page.getByRole('button', { name: 'Thêm từ đăng ký mượn' }).click();
        await page.getByRole('row', { name: '1 Yêu Sao Để Không Đau 11/10/2023 12/10/2023 18/10/2023' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Chọn' }).click();
        await page.getByRole('cell', { name: 'Chọn' }).locator('div').nth(2).click();
        await page.getByText('KS_TIEU_THUYET-17-4 - Yêu Sao Để Không Đau').click();
        await page.getByRole('row', { name: '1 11/10/2023 Yêu Sao Để Không Đau 2 KS_TIEU_THUYET-17-4 - Yêu Sao Để Không Đau' }).getByLabel('', { exact: true }).check();
        await page.getByPlaceholder('Chọn ngày').click();
        await page.getByPlaceholder('Chọn ngày').fill('12/10/2023');
        await page.getByTitle('2023-10-12').getByText('12').click();
        await page.getByRole('button', { name: 'Thêm vào danh sách' }).click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm phiếu mượn ấn phẩm thành công!')).toBeVisible();
    })
}
function addPay() {

    test('add Pay', async ({ page }) => {
        await page.getByRole('menu').getByText('Lưu thông').click();
        await page.getByRole('link', { name: 'Mượn-trả ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/loanPayManager');
        await page.getByRole('row', { name: '10 HS00001 Nguyễn Thị Uyên Thư Học sinh KS_TIEU_THUYET-17-1 Yêu Sao Để Không Đau 08/10/2023 14/10/2023 Đang mượn Đã cũ Chưa cập nhật' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Báo trả' }).click();
        await page.getByLabel('Tình trạng ấn phẩm (khi trả)').click();
        await page.getByTitle('Bình thường').getByText('Bình thường').click();
        await page.getByRole('button', { name: 'Lưu', exact: true }).click();
        await expect(page.getByText('Báo trả thành công!')).toBeVisible();

    })
}
//Gia hạn
// Báo mất
// Phạt
function main() {
    beforeEach();
    addLoan();
    addLoanToBorrow();
    addPay()
}
main()