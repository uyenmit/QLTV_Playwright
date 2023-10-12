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
function addcardRFIDWarehousing() {

    test('add cardRFID Warehousing', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByPlaceholder('- Nhập mã hóa đơn -').click();
        await page.getByPlaceholder('- Nhập mã hóa đơn -').fill('HD000001');
        await page.getByLabel('Đơn vị cung cấp').click();
        await page.getByText('Đại lý sách Văn Minh').click();
        await page.getByLabel('Loại thẻ').click();
        await page.getByText('Thẻ chip').click();
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('3');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('001');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('002');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('003');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByLabel('Select all').check();
        await page.getByRole('button', { name: 'check-square Kiểm tra' }).click();
        await page.getByRole('dialog').getByRole('button', { name: 'Lưu' }).click();
        await page.getByPlaceholder('- Điền giá tiền -').click();
        await page.getByPlaceholder('- Điền giá tiền -').fill('10,0000');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Thêm mới nhập kho thẻ RFID thành công!')).toBeVisible();
    })

}

//Ko thành công do click Huỷ
function addcardRFIDWarehousingFailed() {
    test('add cardRFID Warehousing Failed', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByPlaceholder('- Nhập mã hóa đơn -').click();
        await page.getByPlaceholder('- Nhập mã hóa đơn -').fill('HD000001');
        await page.getByLabel('Đơn vị cung cấp').click();
        await page.getByText('Đại lý sách Văn Minh').click();
        await page.getByLabel('Loại thẻ').click();
        await page.getByText('Thẻ chip').click();
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('3');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0010');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0019');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0018');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByLabel('Select all').check();
        await page.getByRole('button', { name: 'check-square Kiểm tra' }).click();
        await page.getByRole('dialog').getByRole('button', { name: 'Lưu' }).click();
        await page.getByPlaceholder('- Điền giá tiền -').click();
        await page.getByPlaceholder('- Điền giá tiền -').fill('100000');
        await page.locator('[id="__next"] div').filter({ hasText: /^Hủy$/ }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
    })

}
//Nhập danh sách thể RFID nhưng ko nhập các trường thông tin
function addCardRFIDWarehousingInvalid() {
    test('add cardRFID Warehousing Invalid', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('2');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('011');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('022');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByLabel('Select all').check();
        await page.getByRole('button', { name: 'check-square Kiểm tra' }).click();
        await page.getByRole('dialog').getByRole('button', { name: 'Lưu' }).click();
        await page.locator('div#__next button[type=\"submit\"]').click();
        await expect(page.getByText('Đây là trường dữ liệu bắt buộc', { exact: true })).toBeVisible();
        await expect(page.locator('#supplier_help').getByText('Đây là trường dữ liệu bắt buộc!')).toBeVisible();
        await expect(page.locator('#type_card_help').getByText('Đây là trường dữ liệu bắt buộc!')).toBeVisible();
        await expect(page.locator('#price_help').getByText('Đây là trường dữ liệu bắt buộc!')).toBeVisible();
        await expect(page.getByText('Giá tiền phải lớn hơn hoặc bằng 0!')).toBeVisible();
    })
}
//Nhập giá tiền nhỏ hơn 0
function addPriceInvalid() {

    test('add Price Invalid', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByPlaceholder('- Nhập mã hóa đơn -').click();
        await page.getByPlaceholder('- Nhập mã hóa đơn -').fill('HD000001');
        await page.getByLabel('Đơn vị cung cấp').click();
        await page.getByText('Đại lý sách Văn Minh').click();
        await page.getByLabel('Loại thẻ').click();
        await page.getByText('Thẻ chip').click();
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('3');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0011');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0022');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('0033');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByLabel('Select all').check();
        await page.getByRole('button', { name: 'check-square Kiểm tra' }).click();
        await page.getByRole('dialog').getByRole('button', { name: 'Lưu' }).click();
        await page.getByPlaceholder('- Điền giá tiền -').click();
        await page.getByPlaceholder('- Điền giá tiền -').fill('-10,0000');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Giá tiền phải lớn hơn hoặc bằng 0!')).toBeVisible();
    })

}

//Nhập thẻ PFID đã tồn tại
function addcardRFIDWarehousingDuplicate() {

    test('add cardRFID Warehousing duplicate', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('2');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('001');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('002');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByLabel('Select all').check();
        await page.getByRole('button', { name: 'check-square Kiểm tra' }).click();
        await expect(page.getByText('Đã tồn tại').first()).toBeVisible();
        await expect(page.getByText('Đã tồn tại').nth(1)).toBeVisible();
    })

}

//Thêm thẻ nhiều hoặc ít hơn số lượng nhập
function addcardRFIDWarehousingInvalid() {

    test('add cardRFID Warehousing Invalid()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing/addCard');
        await page.getByRole('spinbutton').first().click();
        await page.getByRole('spinbutton').first().fill('2');
        await page.getByText('Danh sách thẻ (0) *').click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('001');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('002');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await page.getByPlaceholder('ID thẻ RFID').click();
        await page.getByPlaceholder('ID thẻ RFID').fill('003');
        await page.getByRole('button', { name: 'plus-circle Thêm' }).click();
        await expect(page.getByRole('button', { name: 'check-square Kiểm tra' })).toBeDisabled();
        await page.getByRole('row', { name: '1 001 close-circle' }).getByLabel('', { exact: true }).check();
        await page.getByRole('row', { name: '2 002 close-circle' }).getByLabel('', { exact: true }).check();
        await page.getByRole('button', { name: 'close-square Xóa' }).click();
        await expect(page.getByRole('button', { name: 'check-square Kiểm tra' })).toBeDisabled();


    })

}
function editcardRFIDWarehousingInvalid() {

    test('edit cardRFID Warehousing Invalid()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.getByRole('row', { name: '1 HD000078 đại lý sách văn minh 2 nguyễn vân anh 11/10/2023 edit close-circle' }).getByRole('link').click();
        //await page.locator('.ant-select-selector').first().click();
        await page.locator('div').filter({ hasText: /^Đại lý sách Văn Minh$/ }).nth(4).click();
        await page.getByTitle('Đại lý sách Hồng Gấm').click();
        await page.getByText('Thẻ chip').click();
        await page.getByText('Thẻ tag').click();
        await page.getByPlaceholder('- Điền giá tiền -').click();
        await page.getByPlaceholder('- Điền giá tiền -').fill('100000');
        await page.getByRole('button', { name: 'Lưu' }).click();
        await expect(page.getByText('Sửa nhập kho thẻ RFID thành công!')).toBeVisible();
        // await page.getByRole('spinbutton').first().click();
        // await page.getByRole('spinbutton').first().fill('2');
        // await page.getByText('Danh sách thẻ (6) *').click();
        // await page.getByRole('row', { name: '6 HD123456 mua mới 5 nguyễn vân anh 02/10/2023 edit close-circle' }).getByRole('link').click();
        // await page.getByText('Danh sách thẻ (6) *').click();
        // await page.getByRole('row', { name: '5 T005 Chưa gán chủ thẻ check-circle close-circle' }).locator('svg').nth(1).click();
    })
}
function deletecardRFIDWarehousingInvalid() {

    test('delete cardRFID Warehousing Invalid()', async ({ page }) => {
        await page.getByRole('menu').getByText('Quản lý RFID').click();
        await page.getByRole('link', { name: 'Nhập kho thẻ RFID' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/cardRFIDWarehousing');
        await page.locator('.ant-table-row > td').first().click();
        await page.getByRole('button', { name: 'close-square Xóa' }).click();
        await page.getByRole('button', { name: 'Xác nhận' }).click();
        await expect(page.getByText('Xóa thành công!')).toBeVisible();

    })
}

function main() {
    beforeEach();
    addcardRFIDWarehousing();
    addcardRFIDWarehousingFailed();
    addCardRFIDWarehousingInvalid();
    addPriceInvalid();
    addcardRFIDWarehousingDuplicate();
    addcardRFIDWarehousingInvalid();
    editcardRFIDWarehousingInvalid();
    deletecardRFIDWarehousingInvalid();

}
main()


