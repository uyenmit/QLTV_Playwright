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

function editpublicationReceipt() {

    test('edit publicationReceipt', async ({ page }) => {

        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Ấn phẩm đã biên mục' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publicationReceiptManager');
        await page.getByRole('row', { name: '2 STK-25 Tâm Tĩnh Lặng - Miệng Mỉm Cười - Sống An Nhiên Kho ngôn tình Ernest Miller Hemingway Tiếng Lào Sách điện tử 2021 Sửa Xóa' }).getByRole('button').first().click();
        await page.getByLabel('Nhan đề', { exact: true }).click();
        await page.getByLabel('Nhan đề', { exact: true }).fill('10 Vạn Câu Hỏi Vì Sao');
        await page.getByTitle('Kho ngôn tình').click();
        await page.getByTitle('Kho sách đạo đức').click();
        await page.getByTitle('Văn học của những ngôn ngữ khác').click();
        await page.getByText('Từ điển').click();
        await page.getByTitle('Ernest Miller Hemingway').click();
        await page.getByText('Megan Miranda').click();
        await page.getByTitle('2021').click();
        await page.getByRole('cell', { name: '2022' }).click();
        await page.getByTitle('Tiếng Lào').click();
        await page.getByTitle('Tiếng Đức').click();
        await page.getByTitle('Sách điện tử').click();
        await page.getByText('Sách in').click();
        await page.getByTitle('Bìa cứng').click();
        await page.getByText('Bìa mềm').nth(1).click();
        await page.getByLabel('Kích thước').click();
        await page.getByLabel('Kích thước').fill('25x30');
        await page.getByLabel('Số trang').click();
        await page.getByLabel('Số trang').fill('200');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
        await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('Bản 1');
        await page.getByLabel('Định dạng tài liệu').click();
        await page.getByText('Sách điện tử').nth(1).click();
        await page.getByLabel('Định dạng file').click();
        await page.getByText('pdf', { exact: true }).click();
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('button').filter({ hasText: 'Chọn file' }).click()
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([`C:/Users/Admin/Downloads/Đề test pdf/Toán GK1 K11 NBK 006 HN.pdf`])

        await page.getByRole('dialog').getByRole('button', { name: 'Lưu' }).click()
        await page.locator('#publication-info > div:nth-child(3) > div').first().getByRole('button', { name: 'Lưu' }).click()
        await expect(page.getByText('Cập nhật biên mục ấn phẩm thành công')).toBeVisible();

    });
}
function main() {
    beforeEach();
    editpublicationReceipt();
}
main();
