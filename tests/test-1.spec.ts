import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.qltv.mobiedu.vn/home');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  await page.getByPlaceholder('Tài khoản').click();
  await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
  await page.getByPlaceholder('Mật khẩu').click();
  await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
  await page.getByPlaceholder('Mật khẩu').press('Enter');
  await page.getByText('Biên mục', { exact: true }).click();
  await page.getByRole('link', { name: 'Ấn phẩm đã biên mục' }).click();
  await page.getByRole('row', { name: '2 STK-25 Tâm Tĩnh Lặng - Miệng Mỉm Cười - Sống An Nhiên Kho sách tham khảo Megan Miranda Tiếng Việt Sách in 2020 Sửa Xóa' }).getByRole('button').first().click();
  await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
  await page.getByPlaceholder('Tiêu đề ấn phẩm').click();
  await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('ba');
  await page.getByPlaceholder('Tiêu đề ấn phẩm').press('Shift+ArrowLeft');
  await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('b');
  await page.getByPlaceholder('Tiêu đề ấn phẩm').press('Shift+ArrowLeft');
  await page.getByPlaceholder('Tiêu đề ấn phẩm').fill('ban1');
  await page.getByLabel('Định dạng tài liệu').click();
  await page.getByText('Sách điện tử').click();
  await page.getByLabel('Định dạng file').click();
  await page.getByText('pdf', { exact: true }).click();
  await page.locator('button').filter({ hasText: 'Chọn file' }).click();
  await page.locator('button').filter({ hasText: 'Chọn file' }).click(); await page.locator('button').filter({ hasText: 'Chọn file' }).click();
  await page.locator('button').filter({ hasText: 'Chọn file' }).setInputFiles('Toán GK1 K11 NBK 006 HN.pdf');
});

await page.getByLabel('Nhan đề', { exact: true }).click();
await page.getByLabel('Nhan đề', { exact: true }).click({
  clickCount: 3
});
await page.getByLabel('Nhan đề', { exact: true }).fill('sdsdsd');
await page.getByText('Kho sách tham khảo').click();
await page.getByText('Văn học Mỹ bằng Tiếng Anh').click();
await page.getByLabel('Kích thước').click();
await page.getByText('Sách in').click();
await page.getByTitle('Kho sách tham khảo').click();
await page.getByTitle('Kho ngôn tình').click();
await page.locator('#publication-info').getByText('Megan Miranda').click();
await page.locator('#publication-info').getByTitle('Megan Miranda').click();
await page.getByText('Sách điện tử').nth(2).click();