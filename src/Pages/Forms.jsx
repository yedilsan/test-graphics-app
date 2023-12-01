import DefaultLayout from "../Layout/DefaultLayout";
import { DatePicker, Form, Radio, Select, Button, ConfigProvider } from "antd";
const { RangePicker } = DatePicker;
import "./form.css";

const Forms = () => {
  return (
    <DefaultLayout>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              multipleItemBg: "rgba(38, 83, 138, 1)",
              optionActiveBg: "#4c73a1",
            },
            DatePicker: {
              cellActiveWithRangeBg: "#161514",
              cellHoverBg: "#4c73a1",
              cellHoverWithRangeBg: "#4c73a1",
            },
          },
        }}
      >
        <h1 style={{ color: "white" }}>Form</h1>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 15,
          }}
          layout="vertical"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item>
            <Radio.Group
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div>
                <Radio value="graph"> Графики </Radio>
                <Radio value="map"> Карта </Radio>
              </div>
              <div>
                <Radio value="analysTable">Аналитическая таблица</Radio>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Период">
            <RangePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Тип обращения">
            <Select>
              <Select.Option value="appeal1">Жалоба</Select.Option>
              <Select.Option value="appeal2">Заявление</Select.Option>
              <Select.Option value="appeal3">Отклик</Select.Option>
              <Select.Option value="appeal4">Предложение</Select.Option>
              <Select.Option value="appeal5">Запрос</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Оценка">
            <Select>
              <Select.Option value="grade1">Нет оценки</Select.Option>
              <Select.Option value="grade2">Не определена</Select.Option>
              <Select.Option value="grade3">Удовлетворительно</Select.Option>
              <Select.Option value="grade4">Неудовлетворительно</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Источник">
            <Select>
              <Select.Option value="source1">Личный прием</Select.Option>
              <Select.Option value="source2">Звонок</Select.Option>
              <Select.Option value="source3">
                Письмо на бумажном носителе
              </Select.Option>
              <Select.Option value="source4">Электронная почта</Select.Option>
              <Select.Option value="source5">ИС Внешний портал</Select.Option>
              <Select.Option value="source6">ИС ЦЭУ</Select.Option>
              <Select.Option value="source7">ИС Бакылау</Select.Option>
              <Select.Option value="source8">WhatsApp</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Тема">
            <Select>
              <Select.Option value="theme1">Другие</Select.Option>
              <Select.Option value="theme2">
                Земля и землепользование
              </Select.Option>
              <Select.Option value="theme3">
                ЖКХ, бытовые обслуживание населения
              </Select.Option>
              <Select.Option value="theme4">ЧС</Select.Option>
              <Select.Option value="theme5">
                Государственное устройство
              </Select.Option>
              <Select.Option value="theme6">Предпринимательство</Select.Option>
              <Select.Option value="theme7">
                Транспорт, коммуникации
              </Select.Option>
              <Select.Option value="theme8">образование</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Первый исполнитель">
            <Select>
              <Select.Option value="executor1">Исполнитель 1</Select.Option>
              <Select.Option value="executor2">Исполнитель 2</Select.Option>
              <Select.Option value="executor3">Исполнитель 3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Второй исполнитель">
            <Select>
              <Select.Option value="executor4">Исполнитель 4</Select.Option>
              <Select.Option value="executor5">Исполнитель 5</Select.Option>
              <Select.Option value="executor6">Исполнитель 6</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Статус">
            <Select>
              <Select.Option value="status1">На модерации</Select.Option>
              <Select.Option value="status2">Зарегистрировано</Select.Option>
              <Select.Option value="status3">На рассмотрении</Select.Option>
              <Select.Option value="status4">Рассмотрено</Select.Option>
              <Select.Option value="status5">
                Проверено инспектором
              </Select.Option>
              <Select.Option value="status6">
                Ответ доставлен заявителю
              </Select.Option>
              <Select.Option value="status7">Отклонено</Select.Option>
              <Select.Option value="status7">Пост опубликован</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Регион">
            <Select>
              <Select.Option value="region1">
                Восточно-Казахстанская область
              </Select.Option>
              <Select.Option value="region2">
                Усть-Каменогорск Г.А
              </Select.Option>
              <Select.Option value="region3">г.Усть-Каменогорск</Select.Option>
              <Select.Option value="region4">Курчатов Г.А</Select.Option>
              <Select.Option value="region5">Риддер Г.А</Select.Option>
              <Select.Option value="region6">г.Риддер</Select.Option>
              <Select.Option value="region7">Семей Г.А</Select.Option>
              <Select.Option value="region8">г.Семей</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Просрочка">
            <Select>
              <Select.Option value="overdue1">Не просроченные</Select.Option>
              <Select.Option value="overdue2">Просроченные</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label=" ">
            <Button type="default " htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </DefaultLayout>
  );
};
export default Forms;
