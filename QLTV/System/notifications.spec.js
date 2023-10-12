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
function addNotifications() {

    test('add Notifications', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Thông báo' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager/addNotification');
        await page.getByLabel('Tất cả').check();
        await page.getByLabel('Tiêu đề').click();
        await page.getByLabel('Tiêu đề').fill('THÔNG BÁO 10/11/2023');
        await page.getByLabel('Mô tả ngắn').click;
        await page.getByLabel('Mô tả ngắn').fill('THÔNG BÁO QUAN TRỌNG HỌP NGÀY 10/11');
        await page.locator('#add-notification').getByRole('paragraph').click();
        await page.locator('.ql-editor').fill('gày sinh là trường không bắt buộc nếu không nhập vào file khi import file lên hệ thống hệ thống báo dữ liệu nhập ko đúng');
        await page.getByLabel('Gửi ngay').check();
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page.getByText('Thêm thông báo thành công!')).toBeVisible();

    })
}

function addScheduledNotifications() {

    test('Add scheduled notifications', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Thông báo' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager/addNotification');
        await page.getByLabel('Tất cả').check();
        await page.getByLabel('Tiêu đề').click();
        await page.getByLabel('Tiêu đề').fill('THÔNG BÁO LỊCH TRÌNH');
        await page.getByLabel('Mô tả ngắn').click;
        await page.getByLabel('Mô tả ngắn').fill('THÔNG BÁO QUAN TRỌNG HỌP NGÀY 10/11');
        await page.getByText('Gửi theo lịch trình').click();
        await page.getByPlaceholder('Chọn thời gian').click();
        await page.getByTitle('2023-10-12').getByText('12').click();
        await page.getByText('05').first().click();
        await page.getByText('04').nth(1).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page.getByText('Thêm thông báo thành công!')).toBeVisible();

    })
}

function addPeriodicNotifications() {

    test('add Periodic Notifications', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Thông báo' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager/addNotification');
        await page.getByLabel('Tất cả').check();
        await page.getByLabel('Tiêu đề').click();
        await page.getByLabel('Tiêu đề').fill('THÔNG BÁO CHU KỲ 12/10');
        await page.getByLabel('Mô tả ngắn').click;
        await page.getByLabel('Mô tả ngắn').fill('THÔNG BÁO QUAN TRỌNG CHU KỲ 12/10');
        await page.getByLabel('Gửi theo chu kỳ').check();
        await page.getByPlaceholder('Từ ngày').click();
        await page.getByTitle('2023-10-12').click();
        await page.getByTitle('2023-10-21').getByText('21').click();
        await page.getByLabel('T2').check();
        await page.getByLabel('T3').check();
        await page.getByPlaceholder('Chọn thời gian').click();
        await page.getByText('07').first().click();
        await page.getByText('00').nth(1).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page.getByText('Thêm thông báo thành công!')).toBeVisible();

    })
}
function addNotificationsInvalid() {

    test('add Notifications invalid', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Thông báo' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/notificationsManager/addNotification');
        await page.getByLabel('Mô tả ngắn').click;
        await page.getByLabel('Mô tả ngắn').fill('THÔNG BÁO QUAN TRỌNG HỌP NGÀY 10/11');
        await page.locator('#add-notification').getByRole('paragraph').click();
        await page.locator('.ql-editor').fill('gày sinh là trường không bắt buộc nếu không nhập vào file khi import file lên hệ thống hệ thống báo dữ liệu nhập ko đúng');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await expect(page.getByText('Đối tượng gửi đến không được để trống!')).toBeVisible();
        await expect(page.getByText('Tiêu đề không được để trống!')).toBeVisible();
        await expect(page.getByText('Vui lòng chọn thời gian gửi!')).toBeVisible();
    })
}
function main() {
    beforeEach();
    addNotifications();
    addScheduledNotifications();
    addPeriodicNotifications();
    addNotificationsInvalid();
}
main();