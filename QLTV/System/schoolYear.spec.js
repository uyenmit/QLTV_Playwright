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
function addschoolYear() {

    test('add schoolYear', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Năm học' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/schoolYearManager');
        await page.getByRole('button', { name: 'Thêm mới' }).click();
        await page.getByLabel('Tên năm học').click();
        await page.getByLabel('Tên năm học').fill('Năm học 2023-2024');
        await page.getByLabel('Ngày bắt đầu học kỳ 1').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 1').fill('13/10/2023');
        await page.getByTitle('2023-10-13').getByText('13').click();
        await page.getByLabel('Ngày kết thúc học kỳ 1').click();
        await page.getByLabel('Ngày kết thúc học kỳ 1').fill('31/12/2023');
        await page.getByTitle('2023-12-31').getByText('31').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 2').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 2').fill('10/01/2024');
        await page.getByTitle('2024-01-10').getByText('10').click();
        await page.getByLabel('Ngày kết thúc học kỳ 2').click();
        await page.getByLabel('Ngày kết thúc học kỳ 2').fill('30/06/2024');
        await page.getByTitle('2024-06-30').getByText('30').click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới thông tin năm học thành công!')).toBeVisible();
    })
}

function editSchoolYear() {

    test('edit SchoolYear', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Năm học' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/schoolYearManager');
        await page.getByRole('row', { name: 'Năm học 2023 - 2024 11/10/2023 31/12/2023 01/01/2024 30/06/2024 Sửa' }).getByRole('button').click();
        await page.getByLabel('Tên năm học').click();
        await page.getByLabel('Tên năm học').clear();
        await page.getByLabel('Tên năm học').fill('Năm học 2023-2025');
        await page.getByLabel('Ngày bắt đầu học kỳ 1').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 1').clear();
        await page.getByLabel('Ngày bắt đầu học kỳ 1').fill('14/10/2023');
        await page.getByTitle('2023-10-14').getByText('14').click();
        await page.getByLabel('Ngày kết thúc học kỳ 1').click();
        await page.getByLabel('Ngày kết thúc học kỳ 1').clear();
        await page.getByLabel('Ngày kết thúc học kỳ 1').fill('30/12/2023');
        await page.getByTitle('2023-12-30').getByText('30').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 2').click();
        await page.getByLabel('Ngày bắt đầu học kỳ 2').clear();
        await page.getByLabel('Ngày bắt đầu học kỳ 2').fill('11/01/2024');
        await page.getByTitle('2024-01-11').getByText('11').click();
        await page.getByLabel('Ngày kết thúc học kỳ 2').click();
        await page.getByLabel('Ngày kết thúc học kỳ 2').clear();
        await page.getByLabel('Ngày kết thúc học kỳ 2').fill('29/06/2024');
        await page.getByTitle('2024-06-29').getByText('29').click();
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thông tin năm học thành công!')).toBeVisible();

    })
}
function main() {
    beforeEach();
    addschoolYear();
    editSchoolYear();
}

main()