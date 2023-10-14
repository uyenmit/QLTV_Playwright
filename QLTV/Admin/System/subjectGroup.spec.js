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
function addSubjectGroup() {

    test('add SubjectGroup', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Tổ bộ môn' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectGroupManager');
        await page.getByRole('button', { name: 'plus-circle Thêm mới' }).click();
        await page.getByLabel('Ký hiệu').click();
        await page.getByLabel('Ký hiệu').fill('T-3');
        await page.getByLabel('Tổ bộ môn', { exact: true }).click();
        await page.getByLabel('Tổ bộ môn', { exact: true }).fill('Tổ khối 1');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới thành công!')).toBeVisible();

    })
}
function editSubjectGroup() {
    test('edit SubjectGroup', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Tổ bộ môn' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectGroupManager');
        await page.getByRole('row', { name: '1 Tổ Khoa học 5 edit close-circle' }).locator('path').first().click();
        await page.getByLabel('Ký hiệu').click();
        await page.getByLabel('Ký hiệu').clear();
        await page.getByLabel('Ký hiệu').fill('T-4');
        await page.getByLabel('Tổ bộ môn', { exact: true }).click();
        await page.getByLabel('Tổ bộ môn', { exact: true }).clear();
        await page.getByLabel('Tổ bộ môn', { exact: true }).fill('Tổ khối 2');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    })
}
function deleteSubjectGroup() {

    test('delete SubjectGroup', async ({ page }) => {
        await page.getByRole('menu').getByText('Hệ thống').click();
        await page.getByRole('link', { name: 'Tổ bộ môn' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/subjectGroupManager');
        await page.locator('div#__next tr:nth-child(3) > td:nth-child(4) > div > div:nth-child(2) > span').click();
        await page.getByRole('button', { name: 'Xóa' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    })
}



function main() {
    beforeEach();
    addSubjectGroup();
    editSubjectGroup();
    deleteSubjectGroup();

}
main()