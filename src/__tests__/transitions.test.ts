import transitions, { duration, easing } from '../transitions';

describe('transitions', () => {
  describe('创建', () => {
    it('不指定参数时创建默认的过渡样式', () => {
      const transition = transitions.create();

      expect(transition).toBe(
        `all ${duration.standard}ms ${easing.easeInOut} 0ms`,
      );
    });

    it('指定一个字符串值作为第一个参数', () => {
      const transition = transitions.create('transform');

      expect(transition).toBe(
        `transform ${duration.standard}ms ${easing.easeInOut} 0ms`,
      );
    });

    it('指定数组作为第一个参数', () => {
      const multiple = transitions.create(['transform', 'size']);
      const transform = transitions.create('transform');
      const size = transitions.create('size');
      const expected = `${transform},${size}`;
      expect(multiple).toBe(expected);
    });

    it('指定第二个参数中的 duration 选项', () => {
      const transition = transitions.create('color', { duration: 500 });
      expect(transition).toBe(`color 500ms ${easing.easeInOut} 0ms`);
    });

    it('对第二个参数中的 duration 选项值四舍五入', () => {
      const transition = transitions.create('color', { duration: 100.8 });
      expect(transition).toBe(`color 101ms ${easing.easeInOut} 0ms`);
    });

    it('指定第二个参数中的 easing 选项', () => {
      const transition = transitions.create('color', {
        easing: easing.easeOut,
      });
      expect(transition).toEqual(
        `color ${duration.standard}ms ${easing.easeOut} 0ms`,
      );
    });

    it('指定第二个参数的 delay 选项', () => {
      const transition = transitions.create('color', {
        delay: 20,
      });

      expect(transition).toEqual(
        `color ${duration.standard}ms ${easing.easeInOut} 20ms`,
      );
    });
  });

  describe('getAutoHeightDuration() 函数', () => {
    it('不指定参数应返回0', () => {
      const autoHeightDuration = transitions.getAutoHeightDuration();

      expect(autoHeightDuration).toBe(0);
    });

    it('指定 undefined 应返回0', () => {
      const autoHeightDuration = transitions.getAutoHeightDuration(undefined);

      expect(autoHeightDuration).toBe(0);
    });

    it('指定 null 应返回0', () => {
      const autoHeightDuration = transitions.getAutoHeightDuration(null);

      expect(autoHeightDuration).toBe(0);
    });

    it('指定负值返回 NaN', () => {
      const autoHeightDuration = transitions.getAutoHeightDuration(-1);
      expect(autoHeightDuration).toBeNaN();
    });

    it('指定预先计算过的位置例子返回正确的值', () => {
      let autoHeightDuration = transitions.getAutoHeightDuration(14);
      expect(autoHeightDuration).toEqual(159);
      autoHeightDuration = transitions.getAutoHeightDuration(100);
      expect(autoHeightDuration).toEqual(239);
      autoHeightDuration = transitions.getAutoHeightDuration(0.0001);
      expect(autoHeightDuration).toEqual(46);
      autoHeightDuration = transitions.getAutoHeightDuration(100000);
      expect(autoHeightDuration).toEqual(6685);
    });
  });
});
