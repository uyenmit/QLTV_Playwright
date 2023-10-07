import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.qltv.mobiedu.vn/home');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tài khoản').click();
  await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
  await page.getByPlaceholder('Mật khẩu').click();
  await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
  await page.getByPlaceholder('Mật khẩu').press('Enter');
  await page.getByRole('menuitem', { name: 'book Biên mục' }).click();
  await page.getByRole('link', { name: 'Ấn phẩm mất' }).click();
  await page.getByRole('button', { name: 'Thêm' }).click(); await page.getByRole('row', { name: '1 KS_TIEU_THUYET-5-5 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien Tiếng Anh Mô hình 2020' }).getByLabel('').check();
  await page.getByRole('row', { name: '1 KS_TIEU_THUYET-5-5 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien Tiếng Anh Mô hình 2020' }).locator('label').click();
  await page.getByRole('row', { name: '2 KS_TIEU_THUYET-5-4 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien Tiếng Anh Mô hình 2020' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Thanh lý' }).click();
  await page.getByPlaceholder('Nhập lý do (*)').click();
  await page.getByPlaceholder('Nhập lý do (*)').fill('123');
  await page.getByPlaceholder('Nhập ghi chú').click();
  await page.getByPlaceholder('Nhập ghi chú').fill('123');
  await page.getByRole('button', { name: 'Lưu' }).click();
  await page.getByRole('row', { name: '1 KS_TIEU_THUYET-5-10 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien 2020' }).getByLabel('').check();
  await page.getByRole('row', { name: '2 KS_TIEU_THUYET-5-1 KS_TIEU_THUYET-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien 2020' }).getByLabel('').check();
  await page.getByRole('button', { name: 'Báo mất' }).click();

});