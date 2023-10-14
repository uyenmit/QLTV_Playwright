const { test, expect } = require('@playwright/test');
import fs from 'fs';
import path from 'path';
import { } from '@playwright/test';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync("QLTV/loginReader/dataReader.csv"),
    {
        columns: true,
        skip_empty_lines: true
    });

function loginReader() {
    for (const record of records) {
        test(`data:${record.UserReader} ${record.PassReader}`, async ({ page }) => {
            await page.goto('https://qa.qltv.mobiedu.vn/');
            await expect(page).toHaveTitle(/mobiEdu QLTV/);
            await page.getByRole('button', { name: 'Đăng nhập' }).click();
            await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
            await page.getByPlaceholder('Tài khoản').fill(record.UserReader);
            await page.getByPlaceholder('Mật khẩu').fill(record.PassReader);
            await page.getByRole('button', { name: 'Đăng nhập' }).click();
            await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
            await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');

        });
    }
}


loginReader()