"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43737],
  {
    99477: function (t, e, n) {
      n.d(e, {
        CP7: function () {
          return Ss;
        },
        FIo: function () {
          return Ao;
        },
        Ilk: function () {
          return xt;
        },
        Kj0: function () {
          return En;
        },
        TlE: function () {
          return Ye;
        },
        ehD: function () {
          return r;
        },
        iKG: function () {
          return ii;
        },
        u9r: function () {
          return on;
        },
        xsS: function () {
          return As;
        },
      });
      const i = "139",
        r = 2,
        s = 100,
        a = 301,
        o = 302,
        l = 303,
        c = 304,
        h = 306,
        u = 1e3,
        d = 1001,
        p = 1002,
        f = 1003,
        m = 1004,
        g = 1005,
        v = 1006,
        x = 1008,
        y = 1009,
        _ = 1012,
        M = 1014,
        b = 1015,
        w = 1016,
        S = 1020,
        E = 1023,
        T = 1026,
        A = 1027,
        R = 33776,
        C = 33777,
        L = 33778,
        P = 33779,
        D = 2300,
        I = 2301,
        N = 2302,
        O = 2400,
        z = 2401,
        B = 2402,
        U = 2500,
        H = 3e3,
        F = 3001,
        G = "srgb",
        V = "srgb-linear",
        k = 7680,
        W = 35044,
        j = 35048,
        q = "300 es",
        X = 1035;
      class J {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null;
          }
        }
      }
      const Y = [];
      for (let rc = 0; rc < 256; rc++)
        Y[rc] = (rc < 16 ? "0" : "") + rc.toString(16);
      const Z = Math.PI / 180,
        K = 180 / Math.PI;
      function Q() {
        const t = (4294967295 * Math.random()) | 0,
          e = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          i = (4294967295 * Math.random()) | 0;
        return (
          Y[255 & t] +
          Y[(t >> 8) & 255] +
          Y[(t >> 16) & 255] +
          Y[(t >> 24) & 255] +
          "-" +
          Y[255 & e] +
          Y[(e >> 8) & 255] +
          "-" +
          Y[((e >> 16) & 15) | 64] +
          Y[(e >> 24) & 255] +
          "-" +
          Y[(63 & n) | 128] +
          Y[(n >> 8) & 255] +
          "-" +
          Y[(n >> 16) & 255] +
          Y[(n >> 24) & 255] +
          Y[255 & i] +
          Y[(i >> 8) & 255] +
          Y[(i >> 16) & 255] +
          Y[(i >> 24) & 255]
        ).toLowerCase();
      }
      function $(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function tt(t, e) {
        return ((t % e) + e) % e;
      }
      function et(t, e, n) {
        return (1 - n) * t + n * e;
      }
      function nt(t) {
        return 0 === (t & (t - 1)) && 0 !== t;
      }
      function it(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
      }
      class rt {
        constructor(t = 0, e = 0) {
          (this.x = t), (this.y = e);
        }
        get width() {
          return this.x;
        }
        set width(t) {
          this.x = t;
        }
        get height() {
          return this.y;
        }
        set height(t) {
          this.y = t;
        }
        set(t, e) {
          return (this.x = t), (this.y = e), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), this;
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), this);
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), this;
        }
        addVectors(t, e) {
          return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        }
        addScaledVector(t, e) {
          return (this.x += t.x * e), (this.y += t.y * e), this;
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), this);
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), this;
        }
        subVectors(t, e) {
          return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), this;
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = t.elements;
          return (
            (this.x = i[0] * e + i[3] * n + i[6]),
            (this.y = i[1] * e + i[4] * n + i[7]),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        }
        negate() {
          return (this.x = -this.x), (this.y = -this.y), this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            this
          );
        }
        equals(t) {
          return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
          return (this.x = t[e]), (this.y = t[e + 1]), this;
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), t;
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            this
          );
        }
        rotateAround(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            s = this.y - t.y;
          return (
            (this.x = r * n - s * i + t.x), (this.y = r * i + s * n + t.y), this
          );
        }
        random() {
          return (this.x = Math.random()), (this.y = Math.random()), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y;
        }
      }
      rt.prototype.isVector2 = !0;
      class st {
        constructor() {
          (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            arguments.length > 0 &&
              console.error(
                "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
              );
        }
        set(t, e, n, i, r, s, a, o, l) {
          const c = this.elements;
          return (
            (c[0] = t),
            (c[1] = i),
            (c[2] = a),
            (c[3] = e),
            (c[4] = r),
            (c[5] = o),
            (c[6] = n),
            (c[7] = s),
            (c[8] = l),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
          );
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[3],
            o = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            u = n[2],
            d = n[5],
            p = n[8],
            f = i[0],
            m = i[3],
            g = i[6],
            v = i[1],
            x = i[4],
            y = i[7],
            _ = i[2],
            M = i[5],
            b = i[8];
          return (
            (r[0] = s * f + a * v + o * _),
            (r[3] = s * m + a * x + o * M),
            (r[6] = s * g + a * y + o * b),
            (r[1] = l * f + c * v + h * _),
            (r[4] = l * m + c * x + h * M),
            (r[7] = l * g + c * y + h * b),
            (r[2] = u * f + d * v + p * _),
            (r[5] = u * m + d * x + p * M),
            (r[8] = u * g + d * y + p * b),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8];
          return (
            e * s * c -
            e * a * l -
            n * r * c +
            n * a * o +
            i * r * l -
            i * s * o
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = c * s - a * l,
            u = a * o - c * r,
            d = l * r - s * o,
            p = e * h + n * u + i * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const f = 1 / p;
          return (
            (t[0] = h * f),
            (t[1] = (i * l - c * n) * f),
            (t[2] = (a * n - i * s) * f),
            (t[3] = u * f),
            (t[4] = (c * e - i * o) * f),
            (t[5] = (i * r - a * e) * f),
            (t[6] = d * f),
            (t[7] = (n * o - l * e) * f),
            (t[8] = (s * e - n * r) * f),
            this
          );
        }
        transpose() {
          let t;
          const e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        }
        setUvTransform(t, e, n, i, r, s, a) {
          const o = Math.cos(r),
            l = Math.sin(r);
          return (
            this.set(
              n * o,
              n * l,
              -n * (o * s + l * a) + s + t,
              -i * l,
              i * o,
              -i * (-l * s + o * a) + a + e,
              0,
              0,
              1
            ),
            this
          );
        }
        scale(t, e) {
          const n = this.elements;
          return (
            (n[0] *= t),
            (n[3] *= t),
            (n[6] *= t),
            (n[1] *= e),
            (n[4] *= e),
            (n[7] *= e),
            this
          );
        }
        rotate(t) {
          const e = Math.cos(t),
            n = Math.sin(t),
            i = this.elements,
            r = i[0],
            s = i[3],
            a = i[6],
            o = i[1],
            l = i[4],
            c = i[7];
          return (
            (i[0] = e * r + n * o),
            (i[3] = e * s + n * l),
            (i[6] = e * a + n * c),
            (i[1] = -n * r + e * o),
            (i[4] = -n * s + e * l),
            (i[7] = -n * a + e * c),
            this
          );
        }
        translate(t, e) {
          const n = this.elements;
          return (
            (n[0] += t * n[2]),
            (n[3] += t * n[5]),
            (n[6] += t * n[8]),
            (n[1] += e * n[2]),
            (n[4] += e * n[5]),
            (n[7] += e * n[8]),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            t
          );
        }
        clone() {
          return new this.constructor().fromArray(this.elements);
        }
      }
      function at(t) {
        for (let e = t.length - 1; e >= 0; --e) if (t[e] > 65535) return !0;
        return !1;
      }
      st.prototype.isMatrix3 = !0;
      Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
      function ot(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t);
      }
      function lt(t) {
        return t < 0.04045
          ? 0.0773993808 * t
          : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
      }
      function ct(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
      }
      const ht = { [G]: { [V]: lt }, [V]: { [G]: ct } },
        ut = {
          legacyMode: !0,
          get workingColorSpace() {
            return V;
          },
          set workingColorSpace(t) {
            console.warn(
              "THREE.ColorManagement: .workingColorSpace is readonly."
            );
          },
          convert: function (t, e, n) {
            if (this.legacyMode || e === n || !e || !n) return t;
            if (ht[e] && void 0 !== ht[e][n]) {
              const i = ht[e][n];
              return (t.r = i(t.r)), (t.g = i(t.g)), (t.b = i(t.b)), t;
            }
            throw new Error("Unsupported color space conversion.");
          },
          fromWorkingColorSpace: function (t, e) {
            return this.convert(t, this.workingColorSpace, e);
          },
          toWorkingColorSpace: function (t, e) {
            return this.convert(t, e, this.workingColorSpace);
          },
        },
        dt = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        },
        pt = { r: 0, g: 0, b: 0 },
        ft = { h: 0, s: 0, l: 0 },
        mt = { h: 0, s: 0, l: 0 };
      function gt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - n)
            : t
        );
      }
      function vt(t, e) {
        return (e.r = t.r), (e.g = t.g), (e.b = t.b), e;
      }
      class xt {
        constructor(t, e, n) {
          return void 0 === e && void 0 === n
            ? this.set(t)
            : this.setRGB(t, e, n);
        }
        set(t) {
          return (
            t && t.isColor
              ? this.copy(t)
              : "number" === typeof t
              ? this.setHex(t)
              : "string" === typeof t && this.setStyle(t),
            this
          );
        }
        setScalar(t) {
          return (this.r = t), (this.g = t), (this.b = t), this;
        }
        setHex(t, e = "srgb") {
          return (
            (t = Math.floor(t)),
            (this.r = ((t >> 16) & 255) / 255),
            (this.g = ((t >> 8) & 255) / 255),
            (this.b = (255 & t) / 255),
            ut.toWorkingColorSpace(this, e),
            this
          );
        }
        setRGB(t, e, n, i = "srgb-linear") {
          return (
            (this.r = t),
            (this.g = e),
            (this.b = n),
            ut.toWorkingColorSpace(this, i),
            this
          );
        }
        setHSL(t, e, n, i = "srgb-linear") {
          if (((t = tt(t, 1)), (e = $(e, 0, 1)), (n = $(n, 0, 1)), 0 === e))
            this.r = this.g = this.b = n;
          else {
            const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
              r = 2 * n - i;
            (this.r = gt(r, i, t + 1 / 3)),
              (this.g = gt(r, i, t)),
              (this.b = gt(r, i, t - 1 / 3));
          }
          return ut.toWorkingColorSpace(this, i), this;
        }
        setStyle(t, e = "srgb") {
          function n(e) {
            void 0 !== e &&
              parseFloat(e) < 1 &&
              console.warn(
                "THREE.Color: Alpha component of " + t + " will be ignored."
              );
          }
          let i;
          if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t))) {
            let t;
            const r = i[1],
              s = i[2];
            switch (r) {
              case "rgb":
              case "rgba":
                if (
                  (t =
                    /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      s
                    ))
                )
                  return (
                    (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
                    (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
                    (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
                    ut.toWorkingColorSpace(this, e),
                    n(t[4]),
                    this
                  );
                if (
                  (t =
                    /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      s
                    ))
                )
                  return (
                    (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
                    (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
                    (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
                    ut.toWorkingColorSpace(this, e),
                    n(t[4]),
                    this
                  );
                break;
              case "hsl":
              case "hsla":
                if (
                  (t =
                    /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      s
                    ))
                ) {
                  const i = parseFloat(t[1]) / 360,
                    r = parseInt(t[2], 10) / 100,
                    s = parseInt(t[3], 10) / 100;
                  return n(t[4]), this.setHSL(i, r, s, e);
                }
            }
          } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
            const t = i[1],
              n = t.length;
            if (3 === n)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255),
                (this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255),
                (this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255),
                ut.toWorkingColorSpace(this, e),
                this
              );
            if (6 === n)
              return (
                (this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255),
                (this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255),
                (this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255),
                ut.toWorkingColorSpace(this, e),
                this
              );
          }
          return t && t.length > 0 ? this.setColorName(t, e) : this;
        }
        setColorName(t, e = "srgb") {
          const n = dt[t.toLowerCase()];
          return (
            void 0 !== n
              ? this.setHex(n, e)
              : console.warn("THREE.Color: Unknown color " + t),
            this
          );
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
          return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        }
        copySRGBToLinear(t) {
          return (
            (this.r = lt(t.r)), (this.g = lt(t.g)), (this.b = lt(t.b)), this
          );
        }
        copyLinearToSRGB(t) {
          return (
            (this.r = ct(t.r)), (this.g = ct(t.g)), (this.b = ct(t.b)), this
          );
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this;
        }
        getHex(t = "srgb") {
          return (
            ut.fromWorkingColorSpace(vt(this, pt), t),
            ($(255 * pt.r, 0, 255) << 16) ^
              ($(255 * pt.g, 0, 255) << 8) ^
              ($(255 * pt.b, 0, 255) << 0)
          );
        }
        getHexString(t = "srgb") {
          return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = "srgb-linear") {
          ut.fromWorkingColorSpace(vt(this, pt), e);
          const n = pt.r,
            i = pt.g,
            r = pt.b,
            s = Math.max(n, i, r),
            a = Math.min(n, i, r);
          let o, l;
          const c = (a + s) / 2;
          if (a === s) (o = 0), (l = 0);
          else {
            const t = s - a;
            switch (((l = c <= 0.5 ? t / (s + a) : t / (2 - s - a)), s)) {
              case n:
                o = (i - r) / t + (i < r ? 6 : 0);
                break;
              case i:
                o = (r - n) / t + 2;
                break;
              case r:
                o = (n - i) / t + 4;
            }
            o /= 6;
          }
          return (t.h = o), (t.s = l), (t.l = c), t;
        }
        getRGB(t, e = "srgb-linear") {
          return (
            ut.fromWorkingColorSpace(vt(this, pt), e),
            (t.r = pt.r),
            (t.g = pt.g),
            (t.b = pt.b),
            t
          );
        }
        getStyle(t = "srgb") {
          return (
            ut.fromWorkingColorSpace(vt(this, pt), t),
            t !== G
              ? `color(${t} ${pt.r} ${pt.g} ${pt.b})`
              : `rgb(${(255 * pt.r) | 0},${(255 * pt.g) | 0},${
                  (255 * pt.b) | 0
                })`
          );
        }
        offsetHSL(t, e, n) {
          return (
            this.getHSL(ft),
            (ft.h += t),
            (ft.s += e),
            (ft.l += n),
            this.setHSL(ft.h, ft.s, ft.l),
            this
          );
        }
        add(t) {
          return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        }
        addColors(t, e) {
          return (
            (this.r = t.r + e.r),
            (this.g = t.g + e.g),
            (this.b = t.b + e.b),
            this
          );
        }
        addScalar(t) {
          return (this.r += t), (this.g += t), (this.b += t), this;
        }
        sub(t) {
          return (
            (this.r = Math.max(0, this.r - t.r)),
            (this.g = Math.max(0, this.g - t.g)),
            (this.b = Math.max(0, this.b - t.b)),
            this
          );
        }
        multiply(t) {
          return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        }
        multiplyScalar(t) {
          return (this.r *= t), (this.g *= t), (this.b *= t), this;
        }
        lerp(t, e) {
          return (
            (this.r += (t.r - this.r) * e),
            (this.g += (t.g - this.g) * e),
            (this.b += (t.b - this.b) * e),
            this
          );
        }
        lerpColors(t, e, n) {
          return (
            (this.r = t.r + (e.r - t.r) * n),
            (this.g = t.g + (e.g - t.g) * n),
            (this.b = t.b + (e.b - t.b) * n),
            this
          );
        }
        lerpHSL(t, e) {
          this.getHSL(ft), t.getHSL(mt);
          const n = et(ft.h, mt.h, e),
            i = et(ft.s, mt.s, e),
            r = et(ft.l, mt.l, e);
          return this.setHSL(n, i, r), this;
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
          return (
            (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.r = t.getX(e)),
            (this.g = t.getY(e)),
            (this.b = t.getZ(e)),
            !0 === t.normalized &&
              ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
            this
          );
        }
        toJSON() {
          return this.getHex();
        }
      }
      let yt;
      (xt.NAMES = dt),
        (xt.prototype.isColor = !0),
        (xt.prototype.r = 1),
        (xt.prototype.g = 1),
        (xt.prototype.b = 1);
      class _t {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === yt && (yt = ot("canvas")),
              (yt.width = t.width),
              (yt.height = t.height);
            const n = yt.getContext("2d");
            t instanceof ImageData
              ? n.putImageData(t, 0, 0)
              : n.drawImage(t, 0, 0, t.width, t.height),
              (e = yt);
          }
          return e.width > 2048 || e.height > 2048
            ? (console.warn(
                "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
                t
              ),
              e.toDataURL("image/jpeg", 0.6))
            : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
          if (
            ("undefined" !== typeof HTMLImageElement &&
              t instanceof HTMLImageElement) ||
            ("undefined" !== typeof HTMLCanvasElement &&
              t instanceof HTMLCanvasElement) ||
            ("undefined" !== typeof ImageBitmap && t instanceof ImageBitmap)
          ) {
            const e = ot("canvas");
            (e.width = t.width), (e.height = t.height);
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
              r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * lt(r[t] / 255);
            return n.putImageData(i, 0, 0), e;
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++)
              e instanceof Uint8Array || e instanceof Uint8ClampedArray
                ? (e[t] = Math.floor(255 * lt(e[t] / 255)))
                : (e[t] = lt(e[t]));
            return { data: e, width: t.width, height: t.height };
          }
          return (
            console.warn(
              "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
            ),
            t
          );
        }
      }
      class Mt {
        constructor(t = null) {
          (this.uuid = Q()), (this.data = t), (this.version = 0);
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        toJSON(t) {
          const e = void 0 === t || "string" === typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const n = { uuid: this.uuid, url: "" },
            i = this.data;
          if (null !== i) {
            let t;
            if (Array.isArray(i)) {
              t = [];
              for (let e = 0, n = i.length; e < n; e++)
                i[e].isDataTexture ? t.push(bt(i[e].image)) : t.push(bt(i[e]));
            } else t = bt(i);
            n.url = t;
          }
          return e || (t.images[this.uuid] = n), n;
        }
      }
      function bt(t) {
        return ("undefined" !== typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
          ("undefined" !== typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" !== typeof ImageBitmap && t instanceof ImageBitmap)
          ? _t.getDataURL(t)
          : t.data
          ? {
              data: Array.prototype.slice.call(t.data),
              width: t.width,
              height: t.height,
              type: t.data.constructor.name,
            }
          : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
      }
      Mt.prototype.isSource = !0;
      let wt = 0;
      class St extends J {
        constructor(
          t = St.DEFAULT_IMAGE,
          e = St.DEFAULT_MAPPING,
          n = 1001,
          i = 1001,
          r = 1006,
          s = 1008,
          a = 1023,
          o = 1009,
          l = 1,
          c = 3e3
        ) {
          super(),
            Object.defineProperty(this, "id", { value: wt++ }),
            (this.uuid = Q()),
            (this.name = ""),
            (this.source = new Mt(t)),
            (this.mipmaps = []),
            (this.mapping = e),
            (this.wrapS = n),
            (this.wrapT = i),
            (this.magFilter = r),
            (this.minFilter = s),
            (this.anisotropy = l),
            (this.format = a),
            (this.internalFormat = null),
            (this.type = o),
            (this.offset = new rt(0, 0)),
            (this.repeat = new rt(1, 1)),
            (this.center = new rt(0, 0)),
            (this.rotation = 0),
            (this.matrixAutoUpdate = !0),
            (this.matrix = new st()),
            (this.generateMipmaps = !0),
            (this.premultiplyAlpha = !1),
            (this.flipY = !0),
            (this.unpackAlignment = 4),
            (this.encoding = c),
            (this.userData = {}),
            (this.version = 0),
            (this.onUpdate = null),
            (this.isRenderTargetTexture = !1),
            (this.needsPMREMUpdate = !1);
        }
        get image() {
          return this.source.data;
        }
        set image(t) {
          this.source.data = t;
        }
        updateMatrix() {
          this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.source = t.source),
            (this.mipmaps = t.mipmaps.slice(0)),
            (this.mapping = t.mapping),
            (this.wrapS = t.wrapS),
            (this.wrapT = t.wrapT),
            (this.magFilter = t.magFilter),
            (this.minFilter = t.minFilter),
            (this.anisotropy = t.anisotropy),
            (this.format = t.format),
            (this.internalFormat = t.internalFormat),
            (this.type = t.type),
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            (this.rotation = t.rotation),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this.matrix.copy(t.matrix),
            (this.generateMipmaps = t.generateMipmaps),
            (this.premultiplyAlpha = t.premultiplyAlpha),
            (this.flipY = t.flipY),
            (this.unpackAlignment = t.unpackAlignment),
            (this.encoding = t.encoding),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            (this.needsUpdate = !0),
            this
          );
        }
        toJSON(t) {
          const e = void 0 === t || "string" === typeof t;
          if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid];
          const n = {
            metadata: {
              version: 4.5,
              type: "Texture",
              generator: "Texture.toJSON",
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
          };
          return (
            "{}" !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e || (t.textures[this.uuid] = n),
            n
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        transformUv(t) {
          if (300 !== this.mapping) return t;
          if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
            switch (this.wrapS) {
              case u:
                t.x = t.x - Math.floor(t.x);
                break;
              case d:
                t.x = t.x < 0 ? 0 : 1;
                break;
              case p:
                1 === Math.abs(Math.floor(t.x) % 2)
                  ? (t.x = Math.ceil(t.x) - t.x)
                  : (t.x = t.x - Math.floor(t.x));
            }
          if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
              case u:
                t.y = t.y - Math.floor(t.y);
                break;
              case d:
                t.y = t.y < 0 ? 0 : 1;
                break;
              case p:
                1 === Math.abs(Math.floor(t.y) % 2)
                  ? (t.y = Math.ceil(t.y) - t.y)
                  : (t.y = t.y - Math.floor(t.y));
            }
          return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
          !0 === t && (this.version++, (this.source.needsUpdate = !0));
        }
      }
      (St.DEFAULT_IMAGE = null),
        (St.DEFAULT_MAPPING = 300),
        (St.prototype.isTexture = !0);
      class Et {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this.x = t), (this.y = e), (this.z = n), (this.w = i);
        }
        get width() {
          return this.z;
        }
        set width(t) {
          this.z = t;
        }
        get height() {
          return this.w;
        }
        set height(t) {
          this.w = t;
        }
        set(t, e, n, i) {
          return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setW(t) {
          return (this.w = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
          return (
            (this.x = t.x),
            (this.y = t.y),
            (this.z = t.z),
            (this.w = void 0 !== t.w ? t.w : 1),
            this
          );
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x),
              (this.y += t.y),
              (this.z += t.z),
              (this.w += t.w),
              this);
        }
        addScalar(t) {
          return (
            (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
          );
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            (this.w = t.w + e.w),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e),
            (this.y += t.y * e),
            (this.z += t.z * e),
            (this.w += t.w * e),
            this
          );
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x),
              (this.y -= t.y),
              (this.z -= t.z),
              (this.w -= t.w),
              this);
        }
        subScalar(t) {
          return (
            (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
          );
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            (this.w = t.w - e.w),
            this
          );
        }
        multiply(t) {
          return (
            (this.x *= t.x),
            (this.y *= t.y),
            (this.z *= t.z),
            (this.w *= t.w),
            this
          );
        }
        multiplyScalar(t) {
          return (
            (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
          );
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            s = t.elements;
          return (
            (this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r),
            (this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r),
            (this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r),
            (this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r),
            this
          );
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return (
            e < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
            this
          );
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, n, i, r;
          const s = 0.01,
            a = 0.1,
            o = t.elements,
            l = o[0],
            c = o[4],
            h = o[8],
            u = o[1],
            d = o[5],
            p = o[9],
            f = o[2],
            m = o[6],
            g = o[10];
          if (
            Math.abs(c - u) < s &&
            Math.abs(h - f) < s &&
            Math.abs(p - m) < s
          ) {
            if (
              Math.abs(c + u) < a &&
              Math.abs(h + f) < a &&
              Math.abs(p + m) < a &&
              Math.abs(l + d + g - 3) < a
            )
              return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
              o = (d + 1) / 2,
              v = (g + 1) / 2,
              x = (c + u) / 4,
              y = (h + f) / 4,
              _ = (p + m) / 4;
            return (
              t > o && t > v
                ? t < s
                  ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                  : ((n = Math.sqrt(t)), (i = x / n), (r = y / n))
                : o > v
                ? o < s
                  ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                  : ((i = Math.sqrt(o)), (n = x / i), (r = _ / i))
                : v < s
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((r = Math.sqrt(v)), (n = y / r), (i = _ / r)),
              this.set(n, i, r, e),
              this
            );
          }
          let v = Math.sqrt(
            (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
          );
          return (
            Math.abs(v) < 0.001 && (v = 1),
            (this.x = (m - p) / v),
            (this.y = (h - f) / v),
            (this.z = (u - c) / v),
            (this.w = Math.acos((l + d + g - 1) / 2)),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            (this.w = Math.min(this.w, t.w)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            (this.w = Math.max(this.w, t.w)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            (this.w = Math.max(t.w, Math.min(e.w, this.w))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            (this.w = Math.max(t, Math.min(e, this.w))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        }
        length() {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        }
        manhattanLength() {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            (this.w += (t.w - this.w) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            (this.w = t.w + (e.w - t.w) * n),
            this
          );
        }
        equals(t) {
          return (
            t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            (this.w = t[e + 3]),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            (t[e + 3] = this.w),
            t
          );
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            (this.w = t.getW(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            (this.w = Math.random()),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w;
        }
      }
      Et.prototype.isVector4 = !0;
      class Tt extends J {
        constructor(t, e, n = {}) {
          super(),
            (this.width = t),
            (this.height = e),
            (this.depth = 1),
            (this.scissor = new Et(0, 0, t, e)),
            (this.scissorTest = !1),
            (this.viewport = new Et(0, 0, t, e));
          const i = { width: t, height: e, depth: 1 };
          (this.texture = new St(
            i,
            n.mapping,
            n.wrapS,
            n.wrapT,
            n.magFilter,
            n.minFilter,
            n.format,
            n.type,
            n.anisotropy,
            n.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.flipY = !1),
            (this.texture.generateMipmaps =
              void 0 !== n.generateMipmaps && n.generateMipmaps),
            (this.texture.internalFormat =
              void 0 !== n.internalFormat ? n.internalFormat : null),
            (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : v),
            (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
            (this.stencilBuffer =
              void 0 !== n.stencilBuffer && n.stencilBuffer),
            (this.depthTexture =
              void 0 !== n.depthTexture ? n.depthTexture : null),
            (this.samples = void 0 !== n.samples ? n.samples : 0);
        }
        setSize(t, e, n = 1) {
          (this.width === t && this.height === e && this.depth === n) ||
            ((this.width = t),
            (this.height = e),
            (this.depth = n),
            (this.texture.image.width = t),
            (this.texture.image.height = e),
            (this.texture.image.depth = n),
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.width = t.width),
            (this.height = t.height),
            (this.depth = t.depth),
            this.viewport.copy(t.viewport),
            (this.texture = t.texture.clone()),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.image = Object.assign({}, t.texture.image)),
            (this.depthBuffer = t.depthBuffer),
            (this.stencilBuffer = t.stencilBuffer),
            null !== t.depthTexture &&
              (this.depthTexture = t.depthTexture.clone()),
            (this.samples = t.samples),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      Tt.prototype.isWebGLRenderTarget = !0;
      class At extends St {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null),
            (this.image = { data: t, width: e, height: n, depth: i }),
            (this.magFilter = f),
            (this.minFilter = f),
            (this.wrapR = d),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      At.prototype.isDataArrayTexture = !0;
      (class extends Tt {
        constructor(t, e, n) {
          super(t, e),
            (this.depth = n),
            (this.texture = new At(null, t, e, n)),
            (this.texture.isRenderTargetTexture = !0);
        }
      }.prototype.isWebGLArrayRenderTarget = !0);
      class Rt extends St {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null),
            (this.image = { data: t, width: e, height: n, depth: i }),
            (this.magFilter = f),
            (this.minFilter = f),
            (this.wrapR = d),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      Rt.prototype.isData3DTexture = !0;
      (class extends Tt {
        constructor(t, e, n) {
          super(t, e),
            (this.depth = n),
            (this.texture = new Rt(null, t, e, n)),
            (this.texture.isRenderTargetTexture = !0);
        }
      }.prototype.isWebGL3DRenderTarget = !0);
      (class extends Tt {
        constructor(t, e, n, i = {}) {
          super(t, e, i);
          const r = this.texture;
          this.texture = [];
          for (let s = 0; s < n; s++)
            (this.texture[s] = r.clone()),
              (this.texture[s].isRenderTargetTexture = !0);
        }
        setSize(t, e, n = 1) {
          if (this.width !== t || this.height !== e || this.depth !== n) {
            (this.width = t), (this.height = e), (this.depth = n);
            for (let i = 0, r = this.texture.length; i < r; i++)
              (this.texture[i].image.width = t),
                (this.texture[i].image.height = e),
                (this.texture[i].image.depth = n);
            this.dispose();
          }
          return (
            this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e), this
          );
        }
        copy(t) {
          this.dispose(),
            (this.width = t.width),
            (this.height = t.height),
            (this.depth = t.depth),
            this.viewport.set(0, 0, this.width, this.height),
            this.scissor.set(0, 0, this.width, this.height),
            (this.depthBuffer = t.depthBuffer),
            (this.stencilBuffer = t.stencilBuffer),
            (this.depthTexture = t.depthTexture),
            (this.texture.length = 0);
          for (let e = 0, n = t.texture.length; e < n; e++)
            this.texture[e] = t.texture[e].clone();
          return this;
        }
      }.prototype.isWebGLMultipleRenderTargets = !0);
      class Ct {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this._x = t), (this._y = e), (this._z = n), (this._w = i);
        }
        static slerp(t, e, n, i) {
          return (
            console.warn(
              "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
            ),
            n.slerpQuaternions(t, e, i)
          );
        }
        static slerpFlat(t, e, n, i, r, s, a) {
          let o = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3];
          const u = r[s + 0],
            d = r[s + 1],
            p = r[s + 2],
            f = r[s + 3];
          if (0 === a)
            return (
              (t[e + 0] = o),
              (t[e + 1] = l),
              (t[e + 2] = c),
              void (t[e + 3] = h)
            );
          if (1 === a)
            return (
              (t[e + 0] = u),
              (t[e + 1] = d),
              (t[e + 2] = p),
              void (t[e + 3] = f)
            );
          if (h !== f || o !== u || l !== d || c !== p) {
            let t = 1 - a;
            const e = o * u + l * d + c * p + h * f,
              n = e >= 0 ? 1 : -1,
              i = 1 - e * e;
            if (i > Number.EPSILON) {
              const r = Math.sqrt(i),
                s = Math.atan2(r, e * n);
              (t = Math.sin(t * s) / r), (a = Math.sin(a * s) / r);
            }
            const r = a * n;
            if (
              ((o = o * t + u * r),
              (l = l * t + d * r),
              (c = c * t + p * r),
              (h = h * t + f * r),
              t === 1 - a)
            ) {
              const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
              (o *= t), (l *= t), (c *= t), (h *= t);
            }
          }
          (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, s) {
          const a = n[i],
            o = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            h = r[s],
            u = r[s + 1],
            d = r[s + 2],
            p = r[s + 3];
          return (
            (t[e] = a * p + c * h + o * d - l * u),
            (t[e + 1] = o * p + c * u + l * h - a * d),
            (t[e + 2] = l * p + c * d + a * u - o * h),
            (t[e + 3] = c * p - a * h - o * u - l * d),
            t
          );
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get w() {
          return this._w;
        }
        set w(t) {
          (this._w = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
          return (
            (this._x = t.x),
            (this._y = t.y),
            (this._z = t.z),
            (this._w = t.w),
            this._onChangeCallback(),
            this
          );
        }
        setFromEuler(t, e) {
          if (!t || !t.isEuler)
            throw new Error(
              "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
            );
          const n = t._x,
            i = t._y,
            r = t._z,
            s = t._order,
            a = Math.cos,
            o = Math.sin,
            l = a(n / 2),
            c = a(i / 2),
            h = a(r / 2),
            u = o(n / 2),
            d = o(i / 2),
            p = o(r / 2);
          switch (s) {
            case "XYZ":
              (this._x = u * c * h + l * d * p),
                (this._y = l * d * h - u * c * p),
                (this._z = l * c * p + u * d * h),
                (this._w = l * c * h - u * d * p);
              break;
            case "YXZ":
              (this._x = u * c * h + l * d * p),
                (this._y = l * d * h - u * c * p),
                (this._z = l * c * p - u * d * h),
                (this._w = l * c * h + u * d * p);
              break;
            case "ZXY":
              (this._x = u * c * h - l * d * p),
                (this._y = l * d * h + u * c * p),
                (this._z = l * c * p + u * d * h),
                (this._w = l * c * h - u * d * p);
              break;
            case "ZYX":
              (this._x = u * c * h - l * d * p),
                (this._y = l * d * h + u * c * p),
                (this._z = l * c * p - u * d * h),
                (this._w = l * c * h + u * d * p);
              break;
            case "YZX":
              (this._x = u * c * h + l * d * p),
                (this._y = l * d * h + u * c * p),
                (this._z = l * c * p - u * d * h),
                (this._w = l * c * h - u * d * p);
              break;
            case "XZY":
              (this._x = u * c * h - l * d * p),
                (this._y = l * d * h - u * c * p),
                (this._z = l * c * p + u * d * h),
                (this._w = l * c * h + u * d * p);
              break;
            default:
              console.warn(
                "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
                  s
              );
          }
          return !1 !== e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
          const n = e / 2,
            i = Math.sin(n);
          return (
            (this._x = t.x * i),
            (this._y = t.y * i),
            (this._z = t.z * i),
            (this._w = Math.cos(n)),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            s = e[1],
            a = e[5],
            o = e[9],
            l = e[2],
            c = e[6],
            h = e[10],
            u = n + a + h;
          if (u > 0) {
            const t = 0.5 / Math.sqrt(u + 1);
            (this._w = 0.25 / t),
              (this._x = (c - o) * t),
              (this._y = (r - l) * t),
              (this._z = (s - i) * t);
          } else if (n > a && n > h) {
            const t = 2 * Math.sqrt(1 + n - a - h);
            (this._w = (c - o) / t),
              (this._x = 0.25 * t),
              (this._y = (i + s) / t),
              (this._z = (r + l) / t);
          } else if (a > h) {
            const t = 2 * Math.sqrt(1 + a - n - h);
            (this._w = (r - l) / t),
              (this._x = (i + s) / t),
              (this._y = 0.25 * t),
              (this._z = (o + c) / t);
          } else {
            const t = 2 * Math.sqrt(1 + h - n - a);
            (this._w = (s - i) / t),
              (this._x = (r + l) / t),
              (this._y = (o + c) / t),
              (this._z = 0.25 * t);
          }
          return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return (
            n < Number.EPSILON
              ? ((n = 0),
                Math.abs(t.x) > Math.abs(t.z)
                  ? ((this._x = -t.y),
                    (this._y = t.x),
                    (this._z = 0),
                    (this._w = n))
                  : ((this._x = 0),
                    (this._y = -t.z),
                    (this._z = t.y),
                    (this._w = n)))
              : ((this._x = t.y * e.z - t.z * e.y),
                (this._y = t.z * e.x - t.x * e.z),
                (this._z = t.x * e.y - t.y * e.x),
                (this._w = n)),
            this.normalize()
          );
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs($(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this;
        }
        identity() {
          return this.set(0, 0, 0, 1);
        }
        invert() {
          return this.conjugate();
        }
        conjugate() {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this._onChangeCallback(),
            this
          );
        }
        dot(t) {
          return (
            this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
          );
        }
        lengthSq() {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        }
        length() {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        }
        normalize() {
          let t = this.length();
          return (
            0 === t
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((t = 1 / t),
                (this._x = this._x * t),
                (this._y = this._y * t),
                (this._z = this._z * t),
                (this._w = this._w * t)),
            this._onChangeCallback(),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
              ),
              this.multiplyQuaternions(t, e))
            : this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
          const n = t._x,
            i = t._y,
            r = t._z,
            s = t._w,
            a = e._x,
            o = e._y,
            l = e._z,
            c = e._w;
          return (
            (this._x = n * c + s * a + i * l - r * o),
            (this._y = i * c + s * o + r * a - n * l),
            (this._z = r * c + s * l + n * o - i * a),
            (this._w = s * c - n * a - i * o - r * l),
            this._onChangeCallback(),
            this
          );
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
            i = this._y,
            r = this._z,
            s = this._w;
          let a = s * t._w + n * t._x + i * t._y + r * t._z;
          if (
            (a < 0
              ? ((this._w = -t._w),
                (this._x = -t._x),
                (this._y = -t._y),
                (this._z = -t._z),
                (a = -a))
              : this.copy(t),
            a >= 1)
          )
            return (
              (this._w = s), (this._x = n), (this._y = i), (this._z = r), this
            );
          const o = 1 - a * a;
          if (o <= Number.EPSILON) {
            const t = 1 - e;
            return (
              (this._w = t * s + e * this._w),
              (this._x = t * n + e * this._x),
              (this._y = t * i + e * this._y),
              (this._z = t * r + e * this._z),
              this.normalize(),
              this._onChangeCallback(),
              this
            );
          }
          const l = Math.sqrt(o),
            c = Math.atan2(l, a),
            h = Math.sin((1 - e) * c) / l,
            u = Math.sin(e * c) / l;
          return (
            (this._w = s * h + this._w * u),
            (this._x = n * h + this._x * u),
            (this._y = i * h + this._y * u),
            (this._z = r * h + this._z * u),
            this._onChangeCallback(),
            this
          );
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n);
        }
        random() {
          const t = Math.random(),
            e = Math.sqrt(1 - t),
            n = Math.sqrt(t),
            i = 2 * Math.PI * Math.random(),
            r = 2 * Math.PI * Math.random();
          return this.set(
            e * Math.cos(i),
            n * Math.sin(r),
            n * Math.cos(r),
            e * Math.sin(i)
          );
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._w === this._w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this._x = t[e]),
            (this._y = t[e + 1]),
            (this._z = t[e + 2]),
            (this._w = t[e + 3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this._x = t.getX(e)),
            (this._y = t.getY(e)),
            (this._z = t.getZ(e)),
            (this._w = t.getW(e)),
            this
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
      }
      Ct.prototype.isQuaternion = !0;
      class Lt {
        constructor(t = 0, e = 0, n = 0) {
          (this.x = t), (this.y = e), (this.z = n);
        }
        set(t, e, n) {
          return (
            void 0 === n && (n = this.z),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            this
          );
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        add(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(t, e))
            : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        }
        sub(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(t, e))
            : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
              ),
              this.multiplyVectors(t, e))
            : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        multiplyVectors(t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        }
        applyEuler(t) {
          return (
            (t && t.isEuler) ||
              console.error(
                "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
              ),
            this.applyQuaternion(Dt.setFromEuler(t))
          );
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(Dt.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[3] * n + r[6] * i),
            (this.y = r[1] * e + r[4] * n + r[7] * i),
            (this.z = r[2] * e + r[5] * n + r[8] * i),
            this
          );
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return (
            (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s),
            (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s),
            (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s),
            this
          );
        }
        applyQuaternion(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            s = t.y,
            a = t.z,
            o = t.w,
            l = o * e + s * i - a * n,
            c = o * n + a * e - r * i,
            h = o * i + r * n - s * e,
            u = -r * e - s * n - a * i;
          return (
            (this.x = l * o + u * -r + c * -a - h * -s),
            (this.y = c * o + u * -s + h * -r - l * -a),
            (this.z = h * o + u * -a + l * -s - c * -r),
            this
          );
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
            t.projectionMatrix
          );
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
            t.matrixWorld
          );
        }
        transformDirection(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[4] * n + r[8] * i),
            (this.y = r[1] * e + r[5] * n + r[9] * i),
            (this.z = r[2] * e + r[6] * n + r[10] * i),
            this.normalize()
          );
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            this
          );
        }
        cross(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
              ),
              this.crossVectors(t, e))
            : this.crossVectors(this, t);
        }
        crossVectors(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            s = e.x,
            a = e.y,
            o = e.z;
          return (
            (this.x = i * o - r * a),
            (this.y = r * s - n * o),
            (this.z = n * a - i * s),
            this
          );
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
          return Pt.copy(this).projectOnVector(t), this.sub(Pt);
        }
        reflect(t) {
          return this.sub(Pt.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos($(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
          return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return (
            (this.x = i * Math.sin(n)),
            (this.y = Math.cos(e) * t),
            (this.z = i * Math.cos(n)),
            this
          );
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
          return (
            (this.x = t * Math.sin(e)),
            (this.y = n),
            (this.z = t * Math.cos(e)),
            this
          );
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = n), (this.z = i), this;
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
          return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
        }
        fromBufferAttribute(t, e, n) {
          return (
            void 0 !== n &&
              console.warn(
                "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            this
          );
        }
        randomDirection() {
          const t = 2 * (Math.random() - 0.5),
            e = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - t ** 2);
          return (
            (this.x = n * Math.cos(e)),
            (this.y = n * Math.sin(e)),
            (this.z = t),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z;
        }
      }
      Lt.prototype.isVector3 = !0;
      const Pt = new Lt(),
        Dt = new Ct();
      class It {
        constructor(
          t = new Lt(1 / 0, 1 / 0, 1 / 0),
          e = new Lt(-1 / 0, -1 / 0, -1 / 0)
        ) {
          (this.min = t), (this.max = e);
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.length; o < l; o += 3) {
            const l = t[o],
              c = t[o + 1],
              h = t[o + 2];
            l < e && (e = l),
              c < n && (n = c),
              h < i && (i = h),
              l > r && (r = l),
              c > s && (s = c),
              h > a && (a = h);
          }
          return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromBufferAttribute(t) {
          let e = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            r = -1 / 0,
            s = -1 / 0,
            a = -1 / 0;
          for (let o = 0, l = t.count; o < l; o++) {
            const l = t.getX(o),
              c = t.getY(o),
              h = t.getZ(o);
            l < e && (e = l),
              c < n && (n = c),
              h < i && (i = h),
              l > r && (r = l),
              c > s && (s = c),
              h > a && (a = h);
          }
          return this.min.set(e, n, i), this.max.set(r, s, a), this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = Ot.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
          return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return (
            (this.min.x = this.min.y = this.min.z = 1 / 0),
            (this.max.x = this.max.y = this.max.z = -1 / 0),
            this
          );
        }
        isEmpty() {
          return (
            this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
          );
        }
        getCenter(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
          t.updateWorldMatrix(!1, !1);
          const n = t.geometry;
          if (void 0 !== n)
            if (
              e &&
              void 0 != n.attributes &&
              void 0 !== n.attributes.position
            ) {
              const e = n.attributes.position;
              for (let n = 0, i = e.count; n < i; n++)
                Ot.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld),
                  this.expandByPoint(Ot);
            } else
              null === n.boundingBox && n.computeBoundingBox(),
                zt.copy(n.boundingBox),
                zt.applyMatrix4(t.matrixWorld),
                this.union(zt);
          const i = t.children;
          for (let r = 0, s = i.length; r < s; r++)
            this.expandByObject(i[r], e);
          return this;
        }
        containsPoint(t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y ||
            t.z < this.min.z ||
            t.z > this.max.z
          );
        }
        containsBox(t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y &&
            this.min.z <= t.min.z &&
            t.max.z <= this.max.z
          );
        }
        getParameter(t, e) {
          return e.set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y),
            (t.z - this.min.z) / (this.max.z - this.min.z)
          );
        }
        intersectsBox(t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y ||
            t.max.z < this.min.z ||
            t.min.z > this.max.z
          );
        }
        intersectsSphere(t) {
          return (
            this.clampPoint(t.center, Ot),
            Ot.distanceToSquared(t.center) <= t.radius * t.radius
          );
        }
        intersectsPlane(t) {
          let e, n;
          return (
            t.normal.x > 0
              ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
              : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
            t.normal.y > 0
              ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
              : ((e += t.normal.y * this.max.y),
                (n += t.normal.y * this.min.y)),
            t.normal.z > 0
              ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
              : ((e += t.normal.z * this.max.z),
                (n += t.normal.z * this.min.z)),
            e <= -t.constant && n >= -t.constant
          );
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(kt),
            Wt.subVectors(this.max, kt),
            Bt.subVectors(t.a, kt),
            Ut.subVectors(t.b, kt),
            Ht.subVectors(t.c, kt),
            Ft.subVectors(Ut, Bt),
            Gt.subVectors(Ht, Ut),
            Vt.subVectors(Bt, Ht);
          let e = [
            0,
            -Ft.z,
            Ft.y,
            0,
            -Gt.z,
            Gt.y,
            0,
            -Vt.z,
            Vt.y,
            Ft.z,
            0,
            -Ft.x,
            Gt.z,
            0,
            -Gt.x,
            Vt.z,
            0,
            -Vt.x,
            -Ft.y,
            Ft.x,
            0,
            -Gt.y,
            Gt.x,
            0,
            -Vt.y,
            Vt.x,
            0,
          ];
          return (
            !!Xt(e, Bt, Ut, Ht, Wt) &&
            ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            !!Xt(e, Bt, Ut, Ht, Wt) &&
              (jt.crossVectors(Ft, Gt),
              (e = [jt.x, jt.y, jt.z]),
              Xt(e, Bt, Ut, Ht, Wt)))
          );
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return Ot.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        getBoundingSphere(t) {
          return (
            this.getCenter(t.center),
            (t.radius = 0.5 * this.getSize(Ot).length()),
            t
          );
        }
        intersect(t) {
          return (
            this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
          );
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
          return (
            this.isEmpty() ||
              (Nt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              Nt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              Nt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              Nt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              Nt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              Nt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              Nt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              Nt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(Nt)),
            this
          );
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      It.prototype.isBox3 = !0;
      const Nt = [
          new Lt(),
          new Lt(),
          new Lt(),
          new Lt(),
          new Lt(),
          new Lt(),
          new Lt(),
          new Lt(),
        ],
        Ot = new Lt(),
        zt = new It(),
        Bt = new Lt(),
        Ut = new Lt(),
        Ht = new Lt(),
        Ft = new Lt(),
        Gt = new Lt(),
        Vt = new Lt(),
        kt = new Lt(),
        Wt = new Lt(),
        jt = new Lt(),
        qt = new Lt();
      function Xt(t, e, n, i, r) {
        for (let s = 0, a = t.length - 3; s <= a; s += 3) {
          qt.fromArray(t, s);
          const a =
              r.x * Math.abs(qt.x) +
              r.y * Math.abs(qt.y) +
              r.z * Math.abs(qt.z),
            o = e.dot(qt),
            l = n.dot(qt),
            c = i.dot(qt);
          if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
      }
      const Jt = new It(),
        Yt = new Lt(),
        Zt = new Lt(),
        Kt = new Lt();
      class Qt {
        constructor(t = new Lt(), e = -1) {
          (this.center = t), (this.radius = e);
        }
        set(t, e) {
          return this.center.copy(t), (this.radius = e), this;
        }
        setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : Jt.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let r = 0, s = t.length; r < s; r++)
            i = Math.max(i, n.distanceToSquared(t[r]));
          return (this.radius = Math.sqrt(i)), this;
        }
        copy(t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        }
        isEmpty() {
          return this.radius < 0;
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), (this.radius = -1), this;
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
          return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return (
            e.copy(t),
            n > this.radius * this.radius &&
              (e.sub(this.center).normalize(),
              e.multiplyScalar(this.radius).add(this.center)),
            e
          );
        }
        getBoundingBox(t) {
          return this.isEmpty()
            ? (t.makeEmpty(), t)
            : (t.set(this.center, this.center),
              t.expandByScalar(this.radius),
              t);
        }
        applyMatrix4(t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        }
        translate(t) {
          return this.center.add(t), this;
        }
        expandByPoint(t) {
          Kt.subVectors(t, this.center);
          const e = Kt.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              n = 0.5 * (t - this.radius);
            this.center.add(Kt.multiplyScalar(n / t)), (this.radius += n);
          }
          return this;
        }
        union(t) {
          return (
            !0 === this.center.equals(t.center)
              ? Zt.set(0, 0, 1).multiplyScalar(t.radius)
              : Zt.subVectors(t.center, this.center)
                  .normalize()
                  .multiplyScalar(t.radius),
            this.expandByPoint(Yt.copy(t.center).add(Zt)),
            this.expandByPoint(Yt.copy(t.center).sub(Zt)),
            this
          );
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const $t = new Lt(),
        te = new Lt(),
        ee = new Lt(),
        ne = new Lt(),
        ie = new Lt(),
        re = new Lt(),
        se = new Lt();
      class ae {
        constructor(t = new Lt(), e = new Lt(0, 0, -1)) {
          (this.origin = t), (this.direction = e);
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        }
        at(t, e) {
          return e.copy(this.direction).multiplyScalar(t).add(this.origin);
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
          return this.origin.copy(this.at(t, $t)), this;
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0
            ? e.copy(this.origin)
            : e.copy(this.direction).multiplyScalar(n).add(this.origin);
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
          const e = $t.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : ($t.copy(this.direction).multiplyScalar(e).add(this.origin),
              $t.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
          te.copy(t).add(e).multiplyScalar(0.5),
            ee.copy(e).sub(t).normalize(),
            ne.copy(this.origin).sub(te);
          const r = 0.5 * t.distanceTo(e),
            s = -this.direction.dot(ee),
            a = ne.dot(this.direction),
            o = -ne.dot(ee),
            l = ne.lengthSq(),
            c = Math.abs(1 - s * s);
          let h, u, d, p;
          if (c > 0)
            if (((h = s * o - a), (u = s * a - o), (p = r * c), h >= 0))
              if (u >= -p)
                if (u <= p) {
                  const t = 1 / c;
                  (h *= t),
                    (u *= t),
                    (d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l);
                } else
                  (u = r),
                    (h = Math.max(0, -(s * u + a))),
                    (d = -h * h + u * (u + 2 * o) + l);
              else
                (u = -r),
                  (h = Math.max(0, -(s * u + a))),
                  (d = -h * h + u * (u + 2 * o) + l);
            else
              u <= -p
                ? ((h = Math.max(0, -(-s * r + a))),
                  (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
                  (d = -h * h + u * (u + 2 * o) + l))
                : u <= p
                ? ((h = 0),
                  (u = Math.min(Math.max(-r, -o), r)),
                  (d = u * (u + 2 * o) + l))
                : ((h = Math.max(0, -(s * r + a))),
                  (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
                  (d = -h * h + u * (u + 2 * o) + l));
          else
            (u = s > 0 ? -r : r),
              (h = Math.max(0, -(s * u + a))),
              (d = -h * h + u * (u + 2 * o) + l);
          return (
            n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
            i && i.copy(ee).multiplyScalar(u).add(te),
            d
          );
        }
        intersectSphere(t, e) {
          $t.subVectors(t.center, this.origin);
          const n = $t.dot(this.direction),
            i = $t.dot($t) - n * n,
            r = t.radius * t.radius;
          if (i > r) return null;
          const s = Math.sqrt(r - i),
            a = n - s,
            o = n + s;
          return a < 0 && o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          if (0 === e) return !0;
          return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
          let n, i, r, s, a, o;
          const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            u = this.origin;
          return (
            l >= 0
              ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
              : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
            c >= 0
              ? ((r = (t.min.y - u.y) * c), (s = (t.max.y - u.y) * c))
              : ((r = (t.max.y - u.y) * c), (s = (t.min.y - u.y) * c)),
            n > s || r > i
              ? null
              : ((r > n || n !== n) && (n = r),
                (s < i || i !== i) && (i = s),
                h >= 0
                  ? ((a = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
                  : ((a = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
                n > o || a > i
                  ? null
                  : ((a > n || n !== n) && (n = a),
                    (o < i || i !== i) && (i = o),
                    i < 0 ? null : this.at(n >= 0 ? n : i, e)))
          );
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, $t);
        }
        intersectTriangle(t, e, n, i, r) {
          ie.subVectors(e, t), re.subVectors(n, t), se.crossVectors(ie, re);
          let s,
            a = this.direction.dot(se);
          if (a > 0) {
            if (i) return null;
            s = 1;
          } else {
            if (!(a < 0)) return null;
            (s = -1), (a = -a);
          }
          ne.subVectors(this.origin, t);
          const o = s * this.direction.dot(re.crossVectors(ne, re));
          if (o < 0) return null;
          const l = s * this.direction.dot(ie.cross(ne));
          if (l < 0) return null;
          if (o + l > a) return null;
          const c = -s * ne.dot(se);
          return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        }
        equals(t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      class oe {
        constructor() {
          (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            arguments.length > 0 &&
              console.error(
                "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
              );
        }
        set(t, e, n, i, r, s, a, o, l, c, h, u, d, p, f, m) {
          const g = this.elements;
          return (
            (g[0] = t),
            (g[4] = e),
            (g[8] = n),
            (g[12] = i),
            (g[1] = r),
            (g[5] = s),
            (g[9] = a),
            (g[13] = o),
            (g[2] = l),
            (g[6] = c),
            (g[10] = h),
            (g[14] = u),
            (g[3] = d),
            (g[7] = p),
            (g[11] = f),
            (g[15] = m),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
          return new oe().fromArray(this.elements);
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            (e[9] = n[9]),
            (e[10] = n[10]),
            (e[11] = n[11]),
            (e[12] = n[12]),
            (e[13] = n[13]),
            (e[14] = n[14]),
            (e[15] = n[15]),
            this
          );
        }
        copyPosition(t) {
          const e = this.elements,
            n = t.elements;
          return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return (
            this.set(
              e[0],
              e[3],
              e[6],
              0,
              e[1],
              e[4],
              e[7],
              0,
              e[2],
              e[5],
              e[8],
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
          );
        }
        makeBasis(t, e, n) {
          return (
            this.set(
              t.x,
              e.x,
              n.x,
              0,
              t.y,
              e.y,
              n.y,
              0,
              t.z,
              e.z,
              n.z,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractRotation(t) {
          const e = this.elements,
            n = t.elements,
            i = 1 / le.setFromMatrixColumn(t, 0).length(),
            r = 1 / le.setFromMatrixColumn(t, 1).length(),
            s = 1 / le.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = n[0] * i),
            (e[1] = n[1] * i),
            (e[2] = n[2] * i),
            (e[3] = 0),
            (e[4] = n[4] * r),
            (e[5] = n[5] * r),
            (e[6] = n[6] * r),
            (e[7] = 0),
            (e[8] = n[8] * s),
            (e[9] = n[9] * s),
            (e[10] = n[10] * s),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromEuler(t) {
          (t && t.isEuler) ||
            console.error(
              "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
            );
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            s = Math.cos(n),
            a = Math.sin(n),
            o = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            h = Math.sin(r);
          if ("XYZ" === t.order) {
            const t = s * c,
              n = s * h,
              i = a * c,
              r = a * h;
            (e[0] = o * c),
              (e[4] = -o * h),
              (e[8] = l),
              (e[1] = n + i * l),
              (e[5] = t - r * l),
              (e[9] = -a * o),
              (e[2] = r - t * l),
              (e[6] = i + n * l),
              (e[10] = s * o);
          } else if ("YXZ" === t.order) {
            const t = o * c,
              n = o * h,
              i = l * c,
              r = l * h;
            (e[0] = t + r * a),
              (e[4] = i * a - n),
              (e[8] = s * l),
              (e[1] = s * h),
              (e[5] = s * c),
              (e[9] = -a),
              (e[2] = n * a - i),
              (e[6] = r + t * a),
              (e[10] = s * o);
          } else if ("ZXY" === t.order) {
            const t = o * c,
              n = o * h,
              i = l * c,
              r = l * h;
            (e[0] = t - r * a),
              (e[4] = -s * h),
              (e[8] = i + n * a),
              (e[1] = n + i * a),
              (e[5] = s * c),
              (e[9] = r - t * a),
              (e[2] = -s * l),
              (e[6] = a),
              (e[10] = s * o);
          } else if ("ZYX" === t.order) {
            const t = s * c,
              n = s * h,
              i = a * c,
              r = a * h;
            (e[0] = o * c),
              (e[4] = i * l - n),
              (e[8] = t * l + r),
              (e[1] = o * h),
              (e[5] = r * l + t),
              (e[9] = n * l - i),
              (e[2] = -l),
              (e[6] = a * o),
              (e[10] = s * o);
          } else if ("YZX" === t.order) {
            const t = s * o,
              n = s * l,
              i = a * o,
              r = a * l;
            (e[0] = o * c),
              (e[4] = r - t * h),
              (e[8] = i * h + n),
              (e[1] = h),
              (e[5] = s * c),
              (e[9] = -a * c),
              (e[2] = -l * c),
              (e[6] = n * h + i),
              (e[10] = t - r * h);
          } else if ("XZY" === t.order) {
            const t = s * o,
              n = s * l,
              i = a * o,
              r = a * l;
            (e[0] = o * c),
              (e[4] = -h),
              (e[8] = l * c),
              (e[1] = t * h + r),
              (e[5] = s * c),
              (e[9] = n * h - i),
              (e[2] = i * h - n),
              (e[6] = a * c),
              (e[10] = r * h + t);
          }
          return (
            (e[3] = 0),
            (e[7] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromQuaternion(t) {
          return this.compose(he, t, ue);
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return (
            fe.subVectors(t, e),
            0 === fe.lengthSq() && (fe.z = 1),
            fe.normalize(),
            de.crossVectors(n, fe),
            0 === de.lengthSq() &&
              (1 === Math.abs(n.z) ? (fe.x += 1e-4) : (fe.z += 1e-4),
              fe.normalize(),
              de.crossVectors(n, fe)),
            de.normalize(),
            pe.crossVectors(fe, de),
            (i[0] = de.x),
            (i[4] = pe.x),
            (i[8] = fe.x),
            (i[1] = de.y),
            (i[5] = pe.y),
            (i[9] = fe.y),
            (i[2] = de.z),
            (i[6] = pe.z),
            (i[10] = fe.z),
            this
          );
        }
        multiply(t, e) {
          return void 0 !== e
            ? (console.warn(
                "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
              ),
              this.multiplyMatrices(t, e))
            : this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            s = n[0],
            a = n[4],
            o = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            u = n[9],
            d = n[13],
            p = n[2],
            f = n[6],
            m = n[10],
            g = n[14],
            v = n[3],
            x = n[7],
            y = n[11],
            _ = n[15],
            M = i[0],
            b = i[4],
            w = i[8],
            S = i[12],
            E = i[1],
            T = i[5],
            A = i[9],
            R = i[13],
            C = i[2],
            L = i[6],
            P = i[10],
            D = i[14],
            I = i[3],
            N = i[7],
            O = i[11],
            z = i[15];
          return (
            (r[0] = s * M + a * E + o * C + l * I),
            (r[4] = s * b + a * T + o * L + l * N),
            (r[8] = s * w + a * A + o * P + l * O),
            (r[12] = s * S + a * R + o * D + l * z),
            (r[1] = c * M + h * E + u * C + d * I),
            (r[5] = c * b + h * T + u * L + d * N),
            (r[9] = c * w + h * A + u * P + d * O),
            (r[13] = c * S + h * R + u * D + d * z),
            (r[2] = p * M + f * E + m * C + g * I),
            (r[6] = p * b + f * T + m * L + g * N),
            (r[10] = p * w + f * A + m * P + g * O),
            (r[14] = p * S + f * R + m * D + g * z),
            (r[3] = v * M + x * E + y * C + _ * I),
            (r[7] = v * b + x * T + y * L + _ * N),
            (r[11] = v * w + x * A + y * P + _ * O),
            (r[15] = v * S + x * R + y * D + _ * z),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[4] *= t),
            (e[8] *= t),
            (e[12] *= t),
            (e[1] *= t),
            (e[5] *= t),
            (e[9] *= t),
            (e[13] *= t),
            (e[2] *= t),
            (e[6] *= t),
            (e[10] *= t),
            (e[14] *= t),
            (e[3] *= t),
            (e[7] *= t),
            (e[11] *= t),
            (e[15] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            s = t[1],
            a = t[5],
            o = t[9],
            l = t[13],
            c = t[2],
            h = t[6],
            u = t[10],
            d = t[14];
          return (
            t[3] *
              (+r * o * h -
                i * l * h -
                r * a * u +
                n * l * u +
                i * a * d -
                n * o * d) +
            t[7] *
              (+e * o * d -
                e * l * u +
                r * s * u -
                i * s * d +
                i * l * c -
                r * o * c) +
            t[11] *
              (+e * l * h -
                e * a * d -
                r * s * h +
                n * s * d +
                r * a * c -
                n * l * c) +
            t[15] *
              (-i * a * c -
                e * o * h +
                e * a * u +
                i * s * h -
                n * s * u +
                n * o * c)
          );
        }
        transpose() {
          const t = this.elements;
          let e;
          return (
            (e = t[1]),
            (t[1] = t[4]),
            (t[4] = e),
            (e = t[2]),
            (t[2] = t[8]),
            (t[8] = e),
            (e = t[6]),
            (t[6] = t[9]),
            (t[9] = e),
            (e = t[3]),
            (t[3] = t[12]),
            (t[12] = e),
            (e = t[7]),
            (t[7] = t[13]),
            (t[13] = e),
            (e = t[11]),
            (t[11] = t[14]),
            (t[14] = e),
            this
          );
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return (
            t.isVector3
              ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
              : ((i[12] = t), (i[13] = e), (i[14] = n)),
            this
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            l = t[7],
            c = t[8],
            h = t[9],
            u = t[10],
            d = t[11],
            p = t[12],
            f = t[13],
            m = t[14],
            g = t[15],
            v =
              h * m * l -
              f * u * l +
              f * o * d -
              a * m * d -
              h * o * g +
              a * u * g,
            x =
              p * u * l -
              c * m * l -
              p * o * d +
              s * m * d +
              c * o * g -
              s * u * g,
            y =
              c * f * l -
              p * h * l +
              p * a * d -
              s * f * d -
              c * a * g +
              s * h * g,
            _ =
              p * h * o -
              c * f * o -
              p * a * u +
              s * f * u +
              c * a * m -
              s * h * m,
            M = e * v + n * x + i * y + r * _;
          if (0 === M)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const b = 1 / M;
          return (
            (t[0] = v * b),
            (t[1] =
              (f * u * r -
                h * m * r -
                f * i * d +
                n * m * d +
                h * i * g -
                n * u * g) *
              b),
            (t[2] =
              (a * m * r -
                f * o * r +
                f * i * l -
                n * m * l -
                a * i * g +
                n * o * g) *
              b),
            (t[3] =
              (h * o * r -
                a * u * r -
                h * i * l +
                n * u * l +
                a * i * d -
                n * o * d) *
              b),
            (t[4] = x * b),
            (t[5] =
              (c * m * r -
                p * u * r +
                p * i * d -
                e * m * d -
                c * i * g +
                e * u * g) *
              b),
            (t[6] =
              (p * o * r -
                s * m * r -
                p * i * l +
                e * m * l +
                s * i * g -
                e * o * g) *
              b),
            (t[7] =
              (s * u * r -
                c * o * r +
                c * i * l -
                e * u * l -
                s * i * d +
                e * o * d) *
              b),
            (t[8] = y * b),
            (t[9] =
              (p * h * r -
                c * f * r -
                p * n * d +
                e * f * d +
                c * n * g -
                e * h * g) *
              b),
            (t[10] =
              (s * f * r -
                p * a * r +
                p * n * l -
                e * f * l -
                s * n * g +
                e * a * g) *
              b),
            (t[11] =
              (c * a * r -
                s * h * r -
                c * n * l +
                e * h * l +
                s * n * d -
                e * a * d) *
              b),
            (t[12] = _ * b),
            (t[13] =
              (c * f * i -
                p * h * i +
                p * n * u -
                e * f * u -
                c * n * m +
                e * h * m) *
              b),
            (t[14] =
              (p * a * i -
                s * f * i -
                p * n * o +
                e * f * o +
                s * n * m -
                e * a * m) *
              b),
            (t[15] =
              (s * h * i -
                c * a * i +
                c * n * o -
                e * h * o -
                s * n * u +
                e * a * u) *
              b),
            this
          );
        }
        scale(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
          return (
            (e[0] *= n),
            (e[4] *= i),
            (e[8] *= r),
            (e[1] *= n),
            (e[5] *= i),
            (e[9] *= r),
            (e[2] *= n),
            (e[6] *= i),
            (e[10] *= r),
            (e[3] *= n),
            (e[7] *= i),
            (e[11] *= r),
            this
          );
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            s = t.x,
            a = t.y,
            o = t.z,
            l = r * s,
            c = r * a;
          return (
            this.set(
              l * s + n,
              l * a - i * o,
              l * o + i * a,
              0,
              l * a + i * o,
              c * a + n,
              c * o - i * s,
              0,
              l * o - i * a,
              c * o + i * s,
              r * o * o + n,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, s) {
          return this.set(1, n, r, 0, t, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
          const i = this.elements,
            r = e._x,
            s = e._y,
            a = e._z,
            o = e._w,
            l = r + r,
            c = s + s,
            h = a + a,
            u = r * l,
            d = r * c,
            p = r * h,
            f = s * c,
            m = s * h,
            g = a * h,
            v = o * l,
            x = o * c,
            y = o * h,
            _ = n.x,
            M = n.y,
            b = n.z;
          return (
            (i[0] = (1 - (f + g)) * _),
            (i[1] = (d + y) * _),
            (i[2] = (p - x) * _),
            (i[3] = 0),
            (i[4] = (d - y) * M),
            (i[5] = (1 - (u + g)) * M),
            (i[6] = (m + v) * M),
            (i[7] = 0),
            (i[8] = (p + x) * b),
            (i[9] = (m - v) * b),
            (i[10] = (1 - (u + f)) * b),
            (i[11] = 0),
            (i[12] = t.x),
            (i[13] = t.y),
            (i[14] = t.z),
            (i[15] = 1),
            this
          );
        }
        decompose(t, e, n) {
          const i = this.elements;
          let r = le.set(i[0], i[1], i[2]).length();
          const s = le.set(i[4], i[5], i[6]).length(),
            a = le.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r),
            (t.x = i[12]),
            (t.y = i[13]),
            (t.z = i[14]),
            ce.copy(this);
          const o = 1 / r,
            l = 1 / s,
            c = 1 / a;
          return (
            (ce.elements[0] *= o),
            (ce.elements[1] *= o),
            (ce.elements[2] *= o),
            (ce.elements[4] *= l),
            (ce.elements[5] *= l),
            (ce.elements[6] *= l),
            (ce.elements[8] *= c),
            (ce.elements[9] *= c),
            (ce.elements[10] *= c),
            e.setFromRotationMatrix(ce),
            (n.x = r),
            (n.y = s),
            (n.z = a),
            this
          );
        }
        makePerspective(t, e, n, i, r, s) {
          void 0 === s &&
            console.warn(
              "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
            );
          const a = this.elements,
            o = (2 * r) / (e - t),
            l = (2 * r) / (n - i),
            c = (e + t) / (e - t),
            h = (n + i) / (n - i),
            u = -(s + r) / (s - r),
            d = (-2 * s * r) / (s - r);
          return (
            (a[0] = o),
            (a[4] = 0),
            (a[8] = c),
            (a[12] = 0),
            (a[1] = 0),
            (a[5] = l),
            (a[9] = h),
            (a[13] = 0),
            (a[2] = 0),
            (a[6] = 0),
            (a[10] = u),
            (a[14] = d),
            (a[3] = 0),
            (a[7] = 0),
            (a[11] = -1),
            (a[15] = 0),
            this
          );
        }
        makeOrthographic(t, e, n, i, r, s) {
          const a = this.elements,
            o = 1 / (e - t),
            l = 1 / (n - i),
            c = 1 / (s - r),
            h = (e + t) * o,
            u = (n + i) * l,
            d = (s + r) * c;
          return (
            (a[0] = 2 * o),
            (a[4] = 0),
            (a[8] = 0),
            (a[12] = -h),
            (a[1] = 0),
            (a[5] = 2 * l),
            (a[9] = 0),
            (a[13] = -u),
            (a[2] = 0),
            (a[6] = 0),
            (a[10] = -2 * c),
            (a[14] = -d),
            (a[3] = 0),
            (a[7] = 0),
            (a[11] = 0),
            (a[15] = 1),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            (t[e + 9] = n[9]),
            (t[e + 10] = n[10]),
            (t[e + 11] = n[11]),
            (t[e + 12] = n[12]),
            (t[e + 13] = n[13]),
            (t[e + 14] = n[14]),
            (t[e + 15] = n[15]),
            t
          );
        }
      }
      oe.prototype.isMatrix4 = !0;
      const le = new Lt(),
        ce = new oe(),
        he = new Lt(0, 0, 0),
        ue = new Lt(1, 1, 1),
        de = new Lt(),
        pe = new Lt(),
        fe = new Lt(),
        me = new oe(),
        ge = new Ct();
      class ve {
        constructor(t = 0, e = 0, n = 0, i = ve.DefaultOrder) {
          (this._x = t), (this._y = e), (this._z = n), (this._order = i);
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get order() {
          return this._order;
        }
        set order(t) {
          (this._order = t), this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
          return (
            (this._x = t._x),
            (this._y = t._y),
            (this._z = t._z),
            (this._order = t._order),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
          const i = t.elements,
            r = i[0],
            s = i[4],
            a = i[8],
            o = i[1],
            l = i[5],
            c = i[9],
            h = i[2],
            u = i[6],
            d = i[10];
          switch (e) {
            case "XYZ":
              (this._y = Math.asin($(a, -1, 1))),
                Math.abs(a) < 0.9999999
                  ? ((this._x = Math.atan2(-c, d)),
                    (this._z = Math.atan2(-s, r)))
                  : ((this._x = Math.atan2(u, l)), (this._z = 0));
              break;
            case "YXZ":
              (this._x = Math.asin(-$(c, -1, 1))),
                Math.abs(c) < 0.9999999
                  ? ((this._y = Math.atan2(a, d)), (this._z = Math.atan2(o, l)))
                  : ((this._y = Math.atan2(-h, r)), (this._z = 0));
              break;
            case "ZXY":
              (this._x = Math.asin($(u, -1, 1))),
                Math.abs(u) < 0.9999999
                  ? ((this._y = Math.atan2(-h, d)),
                    (this._z = Math.atan2(-s, l)))
                  : ((this._y = 0), (this._z = Math.atan2(o, r)));
              break;
            case "ZYX":
              (this._y = Math.asin(-$(h, -1, 1))),
                Math.abs(h) < 0.9999999
                  ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
                  : ((this._x = 0), (this._z = Math.atan2(-s, l)));
              break;
            case "YZX":
              (this._z = Math.asin($(o, -1, 1))),
                Math.abs(o) < 0.9999999
                  ? ((this._x = Math.atan2(-c, l)),
                    (this._y = Math.atan2(-h, r)))
                  : ((this._x = 0), (this._y = Math.atan2(a, d)));
              break;
            case "XZY":
              (this._z = Math.asin(-$(s, -1, 1))),
                Math.abs(s) < 0.9999999
                  ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(a, r)))
                  : ((this._x = Math.atan2(-c, d)), (this._y = 0));
              break;
            default:
              console.warn(
                "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
                  e
              );
          }
          return (this._order = e), !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
          return (
            me.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(me, e, n)
          );
        }
        setFromVector3(t, e = this._order) {
          return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
          return ge.setFromEuler(this), this.setFromQuaternion(ge, t);
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._order === this._order
          );
        }
        fromArray(t) {
          return (
            (this._x = t[0]),
            (this._y = t[1]),
            (this._z = t[2]),
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._order),
            t
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
      }
      (ve.prototype.isEuler = !0),
        (ve.DefaultOrder = "XYZ"),
        (ve.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
      class xe {
        constructor() {
          this.mask = 1;
        }
        set(t) {
          this.mask = ((1 << t) | 0) >>> 0;
        }
        enable(t) {
          this.mask |= (1 << t) | 0;
        }
        enableAll() {
          this.mask = -1;
        }
        toggle(t) {
          this.mask ^= (1 << t) | 0;
        }
        disable(t) {
          this.mask &= ~((1 << t) | 0);
        }
        disableAll() {
          this.mask = 0;
        }
        test(t) {
          return 0 !== (this.mask & t.mask);
        }
        isEnabled(t) {
          return 0 !== (this.mask & ((1 << t) | 0));
        }
      }
      let ye = 0;
      const _e = new Lt(),
        Me = new Ct(),
        be = new oe(),
        we = new Lt(),
        Se = new Lt(),
        Ee = new Lt(),
        Te = new Ct(),
        Ae = new Lt(1, 0, 0),
        Re = new Lt(0, 1, 0),
        Ce = new Lt(0, 0, 1),
        Le = { type: "added" },
        Pe = { type: "removed" };
      class De extends J {
        constructor() {
          super(),
            Object.defineProperty(this, "id", { value: ye++ }),
            (this.uuid = Q()),
            (this.name = ""),
            (this.type = "Object3D"),
            (this.parent = null),
            (this.children = []),
            (this.up = De.DefaultUp.clone());
          const t = new Lt(),
            e = new ve(),
            n = new Ct(),
            i = new Lt(1, 1, 1);
          e._onChange(function () {
            n.setFromEuler(e, !1);
          }),
            n._onChange(function () {
              e.setFromQuaternion(n, void 0, !1);
            }),
            Object.defineProperties(this, {
              position: { configurable: !0, enumerable: !0, value: t },
              rotation: { configurable: !0, enumerable: !0, value: e },
              quaternion: { configurable: !0, enumerable: !0, value: n },
              scale: { configurable: !0, enumerable: !0, value: i },
              modelViewMatrix: { value: new oe() },
              normalMatrix: { value: new st() },
            }),
            (this.matrix = new oe()),
            (this.matrixWorld = new oe()),
            (this.matrixAutoUpdate = De.DefaultMatrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = !1),
            (this.layers = new xe()),
            (this.visible = !0),
            (this.castShadow = !1),
            (this.receiveShadow = !1),
            (this.frustumCulled = !0),
            (this.renderOrder = 0),
            (this.animations = []),
            (this.userData = {});
        }
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
          return Me.setFromAxisAngle(t, e), this.quaternion.multiply(Me), this;
        }
        rotateOnWorldAxis(t, e) {
          return (
            Me.setFromAxisAngle(t, e), this.quaternion.premultiply(Me), this
          );
        }
        rotateX(t) {
          return this.rotateOnAxis(Ae, t);
        }
        rotateY(t) {
          return this.rotateOnAxis(Re, t);
        }
        rotateZ(t) {
          return this.rotateOnAxis(Ce, t);
        }
        translateOnAxis(t, e) {
          return (
            _e.copy(t).applyQuaternion(this.quaternion),
            this.position.add(_e.multiplyScalar(e)),
            this
          );
        }
        translateX(t) {
          return this.translateOnAxis(Ae, t);
        }
        translateY(t) {
          return this.translateOnAxis(Re, t);
        }
        translateZ(t) {
          return this.translateOnAxis(Ce, t);
        }
        localToWorld(t) {
          return t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
          return t.applyMatrix4(be.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
          t.isVector3 ? we.copy(t) : we.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1),
            Se.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight
              ? be.lookAt(Se, we, this.up)
              : be.lookAt(we, Se, this.up),
            this.quaternion.setFromRotationMatrix(be),
            i &&
              (be.extractRotation(i.matrixWorld),
              Me.setFromRotationMatrix(be),
              this.quaternion.premultiply(Me.invert()));
        }
        add(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
          }
          return t === this
            ? (console.error(
                "THREE.Object3D.add: object can't be added as a child of itself.",
                t
              ),
              this)
            : (t && t.isObject3D
                ? (null !== t.parent && t.parent.remove(t),
                  (t.parent = this),
                  this.children.push(t),
                  t.dispatchEvent(Le))
                : console.error(
                    "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                    t
                  ),
              this);
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
              this.remove(arguments[t]);
            return this;
          }
          const e = this.children.indexOf(t);
          return (
            -1 !== e &&
              ((t.parent = null),
              this.children.splice(e, 1),
              t.dispatchEvent(Pe)),
            this
          );
        }
        removeFromParent() {
          const t = this.parent;
          return null !== t && t.remove(this), this;
        }
        clear() {
          for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            (e.parent = null), e.dispatchEvent(Pe);
          }
          return (this.children.length = 0), this;
        }
        attach(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            be.copy(this.matrixWorld).invert(),
            null !== t.parent &&
              (t.parent.updateWorldMatrix(!0, !1),
              be.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(be),
            this.add(t),
            t.updateWorldMatrix(!1, !0),
            this
          );
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i;
          }
        }
        getWorldPosition(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
          );
        }
        getWorldQuaternion(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Se, t, Ee),
            t
          );
        }
        getWorldScale(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(Se, Te, t),
            t
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  ),
              (this.matrixWorldNeedsUpdate = !1),
              (t = !0));
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (
            (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix
                ),
            !0 === e)
          ) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++)
              t[e].updateWorldMatrix(!1, !0);
          }
        }
        toJSON(t) {
          const e = void 0 === t || "string" === typeof t,
            n = {};
          e &&
            ((t = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
              skeletons: {},
              animations: {},
              nodes: {},
            }),
            (n.metadata = {
              version: 4.5,
              type: "Object",
              generator: "Object3D.toJSON",
            }));
          const i = {};
          function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) &&
              (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
              ((i.type = "InstancedMesh"),
              (i.count = this.count),
              (i.instanceMatrix = this.instanceMatrix.toJSON()),
              null !== this.instanceColor &&
                (i.instanceColor = this.instanceColor.toJSON())),
            this.isScene)
          )
            this.background &&
              (this.background.isColor
                ? (i.background = this.background.toJSON())
                : this.background.isTexture &&
                  (i.background = this.background.toJSON(t).uuid)),
              this.environment &&
                this.environment.isTexture &&
                (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const n = e.shapes;
              if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  r(t.shapes, i);
                }
              else r(t.shapes, n);
            }
          }
          if (
            (this.isSkinnedMesh &&
              ((i.bindMode = this.bindMode),
              (i.bindMatrix = this.bindMatrix.toArray()),
              void 0 !== this.skeleton &&
                (r(t.skeletons, this.skeleton),
                (i.skeleton = this.skeleton.uuid))),
            void 0 !== this.material)
          )
            if (Array.isArray(this.material)) {
              const e = [];
              for (let n = 0, i = this.material.length; n < i; n++)
                e.push(r(t.materials, this.material[n]));
              i.material = e;
            } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++)
              i.children.push(this.children[e].toJSON(t).object);
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const n = this.animations[e];
              i.animations.push(r(t.animations, n));
            }
          }
          if (e) {
            const e = s(t.geometries),
              i = s(t.materials),
              r = s(t.textures),
              a = s(t.images),
              o = s(t.shapes),
              l = s(t.skeletons),
              c = s(t.animations),
              h = s(t.nodes);
            e.length > 0 && (n.geometries = e),
              i.length > 0 && (n.materials = i),
              r.length > 0 && (n.textures = r),
              a.length > 0 && (n.images = a),
              o.length > 0 && (n.shapes = o),
              l.length > 0 && (n.skeletons = l),
              c.length > 0 && (n.animations = c),
              h.length > 0 && (n.nodes = h);
          }
          return (n.object = i), n;
          function s(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
        }
        clone(t) {
          return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
          if (
            ((this.name = t.name),
            this.up.copy(t.up),
            this.position.copy(t.position),
            (this.rotation.order = t.rotation.order),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
            (this.layers.mask = t.layers.mask),
            (this.visible = t.visible),
            (this.castShadow = t.castShadow),
            (this.receiveShadow = t.receiveShadow),
            (this.frustumCulled = t.frustumCulled),
            (this.renderOrder = t.renderOrder),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            !0 === e)
          )
            for (let n = 0; n < t.children.length; n++) {
              const e = t.children[n];
              this.add(e.clone());
            }
          return this;
        }
      }
      (De.DefaultUp = new Lt(0, 1, 0)),
        (De.DefaultMatrixAutoUpdate = !0),
        (De.prototype.isObject3D = !0);
      const Ie = new Lt(),
        Ne = new Lt(),
        Oe = new Lt(),
        ze = new Lt(),
        Be = new Lt(),
        Ue = new Lt(),
        He = new Lt(),
        Fe = new Lt(),
        Ge = new Lt(),
        Ve = new Lt();
      class ke {
        constructor(t = new Lt(), e = new Lt(), n = new Lt()) {
          (this.a = t), (this.b = e), (this.c = n);
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), Ie.subVectors(t, e), i.cross(Ie);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
          Ie.subVectors(i, e), Ne.subVectors(n, e), Oe.subVectors(t, e);
          const s = Ie.dot(Ie),
            a = Ie.dot(Ne),
            o = Ie.dot(Oe),
            l = Ne.dot(Ne),
            c = Ne.dot(Oe),
            h = s * l - a * a;
          if (0 === h) return r.set(-2, -1, -1);
          const u = 1 / h,
            d = (l * o - a * c) * u,
            p = (s * c - a * o) * u;
          return r.set(1 - d - p, p, d);
        }
        static containsPoint(t, e, n, i) {
          return (
            this.getBarycoord(t, e, n, i, ze),
            ze.x >= 0 && ze.y >= 0 && ze.x + ze.y <= 1
          );
        }
        static getUV(t, e, n, i, r, s, a, o) {
          return (
            this.getBarycoord(t, e, n, i, ze),
            o.set(0, 0),
            o.addScaledVector(r, ze.x),
            o.addScaledVector(s, ze.y),
            o.addScaledVector(a, ze.z),
            o
          );
        }
        static isFrontFacing(t, e, n, i) {
          return (
            Ie.subVectors(n, e), Ne.subVectors(t, e), Ie.cross(Ne).dot(i) < 0
          );
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return (
            this.a.fromBufferAttribute(t, e),
            this.b.fromBufferAttribute(t, n),
            this.c.fromBufferAttribute(t, i),
            this
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
          return (
            Ie.subVectors(this.c, this.b),
            Ne.subVectors(this.a, this.b),
            0.5 * Ie.cross(Ne).length()
          );
        }
        getMidpoint(t) {
          return t
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
        }
        getNormal(t) {
          return ke.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
          return ke.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, r) {
          return ke.getUV(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
          return ke.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
          return ke.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
          const n = this.a,
            i = this.b,
            r = this.c;
          let s, a;
          Be.subVectors(i, n), Ue.subVectors(r, n), Fe.subVectors(t, n);
          const o = Be.dot(Fe),
            l = Ue.dot(Fe);
          if (o <= 0 && l <= 0) return e.copy(n);
          Ge.subVectors(t, i);
          const c = Be.dot(Ge),
            h = Ue.dot(Ge);
          if (c >= 0 && h <= c) return e.copy(i);
          const u = o * h - c * l;
          if (u <= 0 && o >= 0 && c <= 0)
            return (s = o / (o - c)), e.copy(n).addScaledVector(Be, s);
          Ve.subVectors(t, r);
          const d = Be.dot(Ve),
            p = Ue.dot(Ve);
          if (p >= 0 && d <= p) return e.copy(r);
          const f = d * l - o * p;
          if (f <= 0 && l >= 0 && p <= 0)
            return (a = l / (l - p)), e.copy(n).addScaledVector(Ue, a);
          const m = c * p - d * h;
          if (m <= 0 && h - c >= 0 && d - p >= 0)
            return (
              He.subVectors(r, i),
              (a = (h - c) / (h - c + (d - p))),
              e.copy(i).addScaledVector(He, a)
            );
          const g = 1 / (m + f + u);
          return (
            (s = f * g),
            (a = u * g),
            e.copy(n).addScaledVector(Be, s).addScaledVector(Ue, a)
          );
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
      }
      let We = 0;
      class je extends J {
        constructor() {
          super(),
            Object.defineProperty(this, "id", { value: We++ }),
            (this.uuid = Q()),
            (this.name = ""),
            (this.type = "Material"),
            (this.fog = !0),
            (this.blending = 1),
            (this.side = 0),
            (this.vertexColors = !1),
            (this.opacity = 1),
            (this.transparent = !1),
            (this.blendSrc = 204),
            (this.blendDst = 205),
            (this.blendEquation = s),
            (this.blendSrcAlpha = null),
            (this.blendDstAlpha = null),
            (this.blendEquationAlpha = null),
            (this.depthFunc = 3),
            (this.depthTest = !0),
            (this.depthWrite = !0),
            (this.stencilWriteMask = 255),
            (this.stencilFunc = 519),
            (this.stencilRef = 0),
            (this.stencilFuncMask = 255),
            (this.stencilFail = k),
            (this.stencilZFail = k),
            (this.stencilZPass = k),
            (this.stencilWrite = !1),
            (this.clippingPlanes = null),
            (this.clipIntersection = !1),
            (this.clipShadows = !1),
            (this.shadowSide = null),
            (this.colorWrite = !0),
            (this.precision = null),
            (this.polygonOffset = !1),
            (this.polygonOffsetFactor = 0),
            (this.polygonOffsetUnits = 0),
            (this.dithering = !1),
            (this.alphaToCoverage = !1),
            (this.premultipliedAlpha = !1),
            (this.visible = !0),
            (this.toneMapped = !0),
            (this.userData = {}),
            (this.version = 0),
            (this._alphaTest = 0);
        }
        get alphaTest() {
          return this._alphaTest;
        }
        set alphaTest(t) {
          this._alphaTest > 0 !== t > 0 && this.version++,
            (this._alphaTest = t);
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
          return this.onBeforeCompile.toString();
        }
        setValues(t) {
          if (void 0 !== t)
            for (const e in t) {
              const n = t[e];
              if (void 0 === n) {
                console.warn(
                  "THREE.Material: '" + e + "' parameter is undefined."
                );
                continue;
              }
              if ("shading" === e) {
                console.warn(
                  "THREE." +
                    this.type +
                    ": .shading has been removed. Use the boolean .flatShading instead."
                ),
                  (this.flatShading = 1 === n);
                continue;
              }
              const i = this[e];
              void 0 !== i
                ? i && i.isColor
                  ? i.set(n)
                  : i && i.isVector3 && n && n.isVector3
                  ? i.copy(n)
                  : (this[e] = n)
                : console.warn(
                    "THREE." +
                      this.type +
                      ": '" +
                      e +
                      "' is not a property of this material."
                  );
            }
        }
        toJSON(t) {
          const e = void 0 === t || "string" === typeof t;
          e && (t = { textures: {}, images: {} });
          const n = {
            metadata: {
              version: 4.5,
              type: "Material",
              generator: "Material.toJSON",
            },
          };
          function i(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
          if (
            ((n.uuid = this.uuid),
            (n.type = this.type),
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            void 0 !== this.sheen && (n.sheen = this.sheen),
            this.sheenColor &&
              this.sheenColor.isColor &&
              (n.sheenColor = this.sheenColor.getHex()),
            void 0 !== this.sheenRoughness &&
              (n.sheenRoughness = this.sheenRoughness),
            this.emissive &&
              this.emissive.isColor &&
              (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity &&
              1 !== this.emissiveIntensity &&
              (n.emissiveIntensity = this.emissiveIntensity),
            this.specular &&
              this.specular.isColor &&
              (n.specular = this.specular.getHex()),
            void 0 !== this.specularIntensity &&
              (n.specularIntensity = this.specularIntensity),
            this.specularColor &&
              this.specularColor.isColor &&
              (n.specularColor = this.specularColor.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness &&
              (n.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap &&
              this.clearcoatMap.isTexture &&
              (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap &&
              this.clearcoatRoughnessMap.isTexture &&
              (n.clearcoatRoughnessMap =
                this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap &&
              this.clearcoatNormalMap.isTexture &&
              ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
              (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap &&
              this.matcap.isTexture &&
              (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap &&
              this.alphaMap.isTexture &&
              (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap &&
              this.lightMap.isTexture &&
              ((n.lightMap = this.lightMap.toJSON(t).uuid),
              (n.lightMapIntensity = this.lightMapIntensity)),
            this.aoMap &&
              this.aoMap.isTexture &&
              ((n.aoMap = this.aoMap.toJSON(t).uuid),
              (n.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap &&
              this.bumpMap.isTexture &&
              ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
              (n.bumpScale = this.bumpScale)),
            this.normalMap &&
              this.normalMap.isTexture &&
              ((n.normalMap = this.normalMap.toJSON(t).uuid),
              (n.normalMapType = this.normalMapType),
              (n.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
              this.displacementMap.isTexture &&
              ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
              (n.displacementScale = this.displacementScale),
              (n.displacementBias = this.displacementBias)),
            this.roughnessMap &&
              this.roughnessMap.isTexture &&
              (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap &&
              this.metalnessMap.isTexture &&
              (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap &&
              this.emissiveMap.isTexture &&
              (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap &&
              this.specularMap.isTexture &&
              (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.specularIntensityMap &&
              this.specularIntensityMap.isTexture &&
              (n.specularIntensityMap =
                this.specularIntensityMap.toJSON(t).uuid),
            this.specularColorMap &&
              this.specularColorMap.isTexture &&
              (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
            this.envMap &&
              this.envMap.isTexture &&
              ((n.envMap = this.envMap.toJSON(t).uuid),
              void 0 !== this.combine && (n.combine = this.combine)),
            void 0 !== this.envMapIntensity &&
              (n.envMapIntensity = this.envMapIntensity),
            void 0 !== this.reflectivity &&
              (n.reflectivity = this.reflectivity),
            void 0 !== this.refractionRatio &&
              (n.refractionRatio = this.refractionRatio),
            this.gradientMap &&
              this.gradientMap.isTexture &&
              (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.transmission &&
              (n.transmission = this.transmission),
            this.transmissionMap &&
              this.transmissionMap.isTexture &&
              (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
            void 0 !== this.thickness && (n.thickness = this.thickness),
            this.thicknessMap &&
              this.thicknessMap.isTexture &&
              (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
            void 0 !== this.attenuationDistance &&
              (n.attenuationDistance = this.attenuationDistance),
            void 0 !== this.attenuationColor &&
              (n.attenuationColor = this.attenuationColor.getHex()),
            void 0 !== this.size && (n.size = this.size),
            null !== this.shadowSide && (n.shadowSide = this.shadowSide),
            void 0 !== this.sizeAttenuation &&
              (n.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (n.blending = this.blending),
            0 !== this.side && (n.side = this.side),
            this.vertexColors && (n.vertexColors = !0),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            (n.depthFunc = this.depthFunc),
            (n.depthTest = this.depthTest),
            (n.depthWrite = this.depthWrite),
            (n.colorWrite = this.colorWrite),
            (n.stencilWrite = this.stencilWrite),
            (n.stencilWriteMask = this.stencilWriteMask),
            (n.stencilFunc = this.stencilFunc),
            (n.stencilRef = this.stencilRef),
            (n.stencilFuncMask = this.stencilFuncMask),
            (n.stencilFail = this.stencilFail),
            (n.stencilZFail = this.stencilZFail),
            (n.stencilZPass = this.stencilZPass),
            void 0 !== this.rotation &&
              0 !== this.rotation &&
              (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor &&
              (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits &&
              (n.polygonOffsetUnits = this.polygonOffsetUnits),
            void 0 !== this.linewidth &&
              1 !== this.linewidth &&
              (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.alphaToCoverage &&
              (n.alphaToCoverage = this.alphaToCoverage),
            !0 === this.premultipliedAlpha &&
              (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 &&
              (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap &&
              (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin &&
              (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            !1 === this.visible && (n.visible = !1),
            !1 === this.toneMapped && (n.toneMapped = !1),
            "{}" !== JSON.stringify(this.userData) &&
              (n.userData = this.userData),
            e)
          ) {
            const e = i(t.textures),
              r = i(t.images);
            e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
          }
          return n;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.name = t.name),
            (this.fog = t.fog),
            (this.blending = t.blending),
            (this.side = t.side),
            (this.vertexColors = t.vertexColors),
            (this.opacity = t.opacity),
            (this.transparent = t.transparent),
            (this.blendSrc = t.blendSrc),
            (this.blendDst = t.blendDst),
            (this.blendEquation = t.blendEquation),
            (this.blendSrcAlpha = t.blendSrcAlpha),
            (this.blendDstAlpha = t.blendDstAlpha),
            (this.blendEquationAlpha = t.blendEquationAlpha),
            (this.depthFunc = t.depthFunc),
            (this.depthTest = t.depthTest),
            (this.depthWrite = t.depthWrite),
            (this.stencilWriteMask = t.stencilWriteMask),
            (this.stencilFunc = t.stencilFunc),
            (this.stencilRef = t.stencilRef),
            (this.stencilFuncMask = t.stencilFuncMask),
            (this.stencilFail = t.stencilFail),
            (this.stencilZFail = t.stencilZFail),
            (this.stencilZPass = t.stencilZPass),
            (this.stencilWrite = t.stencilWrite);
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
          }
          return (
            (this.clippingPlanes = n),
            (this.clipIntersection = t.clipIntersection),
            (this.clipShadows = t.clipShadows),
            (this.shadowSide = t.shadowSide),
            (this.colorWrite = t.colorWrite),
            (this.precision = t.precision),
            (this.polygonOffset = t.polygonOffset),
            (this.polygonOffsetFactor = t.polygonOffsetFactor),
            (this.polygonOffsetUnits = t.polygonOffsetUnits),
            (this.dithering = t.dithering),
            (this.alphaTest = t.alphaTest),
            (this.alphaToCoverage = t.alphaToCoverage),
            (this.premultipliedAlpha = t.premultipliedAlpha),
            (this.visible = t.visible),
            (this.toneMapped = t.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
      }
      (je.prototype.isMaterial = !0),
        (je.fromType = function () {
          return null;
        });
      class qe extends je {
        constructor(t) {
          super(),
            (this.type = "MeshBasicMaterial"),
            (this.color = new xt(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = 0),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            this
          );
        }
      }
      qe.prototype.isMeshBasicMaterial = !0;
      const Xe = new Lt(),
        Je = new rt();
      class Ye {
        constructor(t, e, n) {
          if (Array.isArray(t))
            throw new TypeError(
              "THREE.BufferAttribute: array should be a Typed Array."
            );
          (this.name = ""),
            (this.array = t),
            (this.itemSize = e),
            (this.count = void 0 !== t ? t.length / e : 0),
            (this.normalized = !0 === n),
            (this.usage = W),
            (this.updateRange = { offset: 0, count: -1 }),
            (this.version = 0);
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        setUsage(t) {
          return (this.usage = t), this;
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.array = new t.array.constructor(t.array)),
            (this.itemSize = t.itemSize),
            (this.count = t.count),
            (this.normalized = t.normalized),
            (this.usage = t.usage),
            this
          );
        }
        copyAt(t, e, n) {
          (t *= this.itemSize), (n *= e.itemSize);
          for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[t + i] = e.array[n + i];
          return this;
        }
        copyArray(t) {
          return this.array.set(t), this;
        }
        copyColorsArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                "THREE.BufferAttribute.copyColorsArray(): color is undefined",
                i
              ),
              (r = new xt())),
              (e[n++] = r.r),
              (e[n++] = r.g),
              (e[n++] = r.b);
          }
          return this;
        }
        copyVector2sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
                i
              ),
              (r = new rt())),
              (e[n++] = r.x),
              (e[n++] = r.y);
          }
          return this;
        }
        copyVector3sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
                i
              ),
              (r = new Lt())),
              (e[n++] = r.x),
              (e[n++] = r.y),
              (e[n++] = r.z);
          }
          return this;
        }
        copyVector4sArray(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            void 0 === r &&
              (console.warn(
                "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
                i
              ),
              (r = new Et())),
              (e[n++] = r.x),
              (e[n++] = r.y),
              (e[n++] = r.z),
              (e[n++] = r.w);
          }
          return this;
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Je.fromBufferAttribute(this, e),
                Je.applyMatrix3(t),
                this.setXY(e, Je.x, Je.y);
          else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Xe.fromBufferAttribute(this, e),
                Xe.applyMatrix3(t),
                this.setXYZ(e, Xe.x, Xe.y, Xe.z);
          return this;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Xe.fromBufferAttribute(this, e),
              Xe.applyMatrix4(t),
              this.setXYZ(e, Xe.x, Xe.y, Xe.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Xe.fromBufferAttribute(this, e),
              Xe.applyNormalMatrix(t),
              this.setXYZ(e, Xe.x, Xe.y, Xe.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Xe.fromBufferAttribute(this, e),
              Xe.transformDirection(t),
              this.setXYZ(e, Xe.x, Xe.y, Xe.z);
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        getX(t) {
          return this.array[t * this.itemSize];
        }
        setX(t, e) {
          return (this.array[t * this.itemSize] = e), this;
        }
        getY(t) {
          return this.array[t * this.itemSize + 1];
        }
        setY(t, e) {
          return (this.array[t * this.itemSize + 1] = e), this;
        }
        getZ(t) {
          return this.array[t * this.itemSize + 2];
        }
        setZ(t, e) {
          return (this.array[t * this.itemSize + 2] = e), this;
        }
        getW(t) {
          return this.array[t * this.itemSize + 3];
        }
        setW(t, e) {
          return (this.array[t * this.itemSize + 3] = e), this;
        }
        setXY(t, e, n) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            this
          );
        }
        setXYZ(t, e, n, i) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            this
          );
        }
        setXYZW(t, e, n, i, r) {
          return (
            (t *= this.itemSize),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            (this.array[t + 3] = r),
            this
          );
        }
        onUpload(t) {
          return (this.onUploadCallback = t), this;
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized,
          };
          return (
            "" !== this.name && (t.name = this.name),
            this.usage !== W && (t.usage = this.usage),
            (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
              (t.updateRange = this.updateRange),
            t
          );
        }
      }
      Ye.prototype.isBufferAttribute = !0;
      class Ze extends Ye {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }
      class Ke extends Ye {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n);
        }
      }
      (class extends Ye {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }.prototype.isFloat16BufferAttribute = !0);
      class Qe extends Ye {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n);
        }
      }
      let $e = 0;
      const tn = new oe(),
        en = new De(),
        nn = new Lt(),
        rn = new It(),
        sn = new It(),
        an = new Lt();
      class on extends J {
        constructor() {
          super(),
            Object.defineProperty(this, "id", { value: $e++ }),
            (this.uuid = Q()),
            (this.name = ""),
            (this.type = "BufferGeometry"),
            (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.morphTargetsRelative = !1),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.drawRange = { start: 0, count: 1 / 0 }),
            (this.userData = {});
        }
        getIndex() {
          return this.index;
        }
        setIndex(t) {
          return (
            Array.isArray(t)
              ? (this.index = new (at(t) ? Ke : Ze)(t, 1))
              : (this.index = t),
            this
          );
        }
        getAttribute(t) {
          return this.attributes[t];
        }
        setAttribute(t, e) {
          return (this.attributes[t] = e), this;
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this;
        }
        hasAttribute(t) {
          return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
          this.groups.push({ start: t, count: e, materialIndex: n });
        }
        clearGroups() {
          this.groups = [];
        }
        setDrawRange(t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
          const n = this.attributes.normal;
          if (void 0 !== n) {
            const e = new st().getNormalMatrix(t);
            n.applyNormalMatrix(e), (n.needsUpdate = !0);
          }
          const i = this.attributes.tangent;
          return (
            void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        applyQuaternion(t) {
          return tn.makeRotationFromQuaternion(t), this.applyMatrix4(tn), this;
        }
        rotateX(t) {
          return tn.makeRotationX(t), this.applyMatrix4(tn), this;
        }
        rotateY(t) {
          return tn.makeRotationY(t), this.applyMatrix4(tn), this;
        }
        rotateZ(t) {
          return tn.makeRotationZ(t), this.applyMatrix4(tn), this;
        }
        translate(t, e, n) {
          return tn.makeTranslation(t, e, n), this.applyMatrix4(tn), this;
        }
        scale(t, e, n) {
          return tn.makeScale(t, e, n), this.applyMatrix4(tn), this;
        }
        lookAt(t) {
          return (
            en.lookAt(t), en.updateMatrix(), this.applyMatrix4(en.matrix), this
          );
        }
        center() {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(nn).negate(),
            this.translate(nn.x, nn.y, nn.z),
            this
          );
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0);
          }
          return this.setAttribute("position", new Qe(e, 3)), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new It());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingBox.set(
                new Lt(-1 / 0, -1 / 0, -1 / 0),
                new Lt(1 / 0, 1 / 0, 1 / 0)
              )
            );
          if (void 0 !== t) {
            if ((this.boundingBox.setFromBufferAttribute(t), e))
              for (let n = 0, i = e.length; n < i; n++) {
                const t = e[n];
                rn.setFromBufferAttribute(t),
                  this.morphTargetsRelative
                    ? (an.addVectors(this.boundingBox.min, rn.min),
                      this.boundingBox.expandByPoint(an),
                      an.addVectors(this.boundingBox.max, rn.max),
                      this.boundingBox.expandByPoint(an))
                    : (this.boundingBox.expandByPoint(rn.min),
                      this.boundingBox.expandByPoint(rn.max));
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
              this
            );
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new Qt());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
                this
              ),
              void this.boundingSphere.set(new Lt(), 1 / 0)
            );
          if (t) {
            const n = this.boundingSphere.center;
            if ((rn.setFromBufferAttribute(t), e))
              for (let t = 0, r = e.length; t < r; t++) {
                const n = e[t];
                sn.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? (an.addVectors(rn.min, sn.min),
                      rn.expandByPoint(an),
                      an.addVectors(rn.max, sn.max),
                      rn.expandByPoint(an))
                    : (rn.expandByPoint(sn.min), rn.expandByPoint(sn.max));
              }
            rn.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++)
              an.fromBufferAttribute(t, e),
                (i = Math.max(i, n.distanceToSquared(an)));
            if (e)
              for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r],
                  a = this.morphTargetsRelative;
                for (let e = 0, r = s.count; e < r; e++)
                  an.fromBufferAttribute(s, e),
                    a && (nn.fromBufferAttribute(t, e), an.add(nn)),
                    (i = Math.max(i, n.distanceToSquared(an)));
              }
            (this.boundingSphere.radius = Math.sqrt(i)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                  this
                );
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (
            null === t ||
            void 0 === e.position ||
            void 0 === e.normal ||
            void 0 === e.uv
          )
            return void console.error(
              "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
            );
          const n = t.array,
            i = e.position.array,
            r = e.normal.array,
            s = e.uv.array,
            a = i.length / 3;
          !1 === this.hasAttribute("tangent") &&
            this.setAttribute("tangent", new Ye(new Float32Array(4 * a), 4));
          const o = this.getAttribute("tangent").array,
            l = [],
            c = [];
          for (let E = 0; E < a; E++) (l[E] = new Lt()), (c[E] = new Lt());
          const h = new Lt(),
            u = new Lt(),
            d = new Lt(),
            p = new rt(),
            f = new rt(),
            m = new rt(),
            g = new Lt(),
            v = new Lt();
          function x(t, e, n) {
            h.fromArray(i, 3 * t),
              u.fromArray(i, 3 * e),
              d.fromArray(i, 3 * n),
              p.fromArray(s, 2 * t),
              f.fromArray(s, 2 * e),
              m.fromArray(s, 2 * n),
              u.sub(h),
              d.sub(h),
              f.sub(p),
              m.sub(p);
            const r = 1 / (f.x * m.y - m.x * f.y);
            isFinite(r) &&
              (g
                .copy(u)
                .multiplyScalar(m.y)
                .addScaledVector(d, -f.y)
                .multiplyScalar(r),
              v
                .copy(d)
                .multiplyScalar(f.x)
                .addScaledVector(u, -m.x)
                .multiplyScalar(r),
              l[t].add(g),
              l[e].add(g),
              l[n].add(g),
              c[t].add(v),
              c[e].add(v),
              c[n].add(v));
          }
          let y = this.groups;
          0 === y.length && (y = [{ start: 0, count: n.length }]);
          for (let E = 0, T = y.length; E < T; ++E) {
            const t = y[E],
              e = t.start;
            for (let i = e, r = e + t.count; i < r; i += 3)
              x(n[i + 0], n[i + 1], n[i + 2]);
          }
          const _ = new Lt(),
            M = new Lt(),
            b = new Lt(),
            w = new Lt();
          function S(t) {
            b.fromArray(r, 3 * t), w.copy(b);
            const e = l[t];
            _.copy(e),
              _.sub(b.multiplyScalar(b.dot(e))).normalize(),
              M.crossVectors(w, e);
            const n = M.dot(c[t]) < 0 ? -1 : 1;
            (o[4 * t] = _.x),
              (o[4 * t + 1] = _.y),
              (o[4 * t + 2] = _.z),
              (o[4 * t + 3] = n);
          }
          for (let E = 0, T = y.length; E < T; ++E) {
            const t = y[E],
              e = t.start;
            for (let i = e, r = e + t.count; i < r; i += 3)
              S(n[i + 0]), S(n[i + 1]), S(n[i + 2]);
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute("position");
          if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
              (n = new Ye(new Float32Array(3 * e.count), 3)),
                this.setAttribute("normal", n);
            else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new Lt(),
              r = new Lt(),
              s = new Lt(),
              a = new Lt(),
              o = new Lt(),
              l = new Lt(),
              c = new Lt(),
              h = new Lt();
            if (t)
              for (let u = 0, d = t.count; u < d; u += 3) {
                const d = t.getX(u + 0),
                  p = t.getX(u + 1),
                  f = t.getX(u + 2);
                i.fromBufferAttribute(e, d),
                  r.fromBufferAttribute(e, p),
                  s.fromBufferAttribute(e, f),
                  c.subVectors(s, r),
                  h.subVectors(i, r),
                  c.cross(h),
                  a.fromBufferAttribute(n, d),
                  o.fromBufferAttribute(n, p),
                  l.fromBufferAttribute(n, f),
                  a.add(c),
                  o.add(c),
                  l.add(c),
                  n.setXYZ(d, a.x, a.y, a.z),
                  n.setXYZ(p, o.x, o.y, o.z),
                  n.setXYZ(f, l.x, l.y, l.z);
              }
            else
              for (let t = 0, u = e.count; t < u; t += 3)
                i.fromBufferAttribute(e, t + 0),
                  r.fromBufferAttribute(e, t + 1),
                  s.fromBufferAttribute(e, t + 2),
                  c.subVectors(s, r),
                  h.subVectors(i, r),
                  c.cross(h),
                  n.setXYZ(t + 0, c.x, c.y, c.z),
                  n.setXYZ(t + 1, c.x, c.y, c.z),
                  n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), (n.needsUpdate = !0);
          }
        }
        merge(t, e) {
          if (!t || !t.isBufferGeometry)
            return void console.error(
              "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
              t
            );
          void 0 === e &&
            ((e = 0),
            console.warn(
              "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
            ));
          const n = this.attributes;
          for (const i in n) {
            if (void 0 === t.attributes[i]) continue;
            const r = n[i].array,
              s = t.attributes[i],
              a = s.array,
              o = s.itemSize * e,
              l = Math.min(a.length, r.length - o);
            for (let t = 0, e = o; t < l; t++, e++) r[e] = a[t];
          }
          return this;
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++)
            an.fromBufferAttribute(t, e),
              an.normalize(),
              t.setXYZ(e, an.x, an.y, an.z);
        }
        toNonIndexed() {
          function t(t, e) {
            const n = t.array,
              i = t.itemSize,
              r = t.normalized,
              s = new n.constructor(e.length * i);
            let a = 0,
              o = 0;
            for (let l = 0, c = e.length; l < c; l++) {
              a = t.isInterleavedBufferAttribute
                ? e[l] * t.data.stride + t.offset
                : e[l] * i;
              for (let t = 0; t < i; t++) s[o++] = n[a++];
            }
            return new Ye(s, i, r);
          }
          if (null === this.index)
            return (
              console.warn(
                "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
              ),
              this
            );
          const e = new on(),
            n = this.index.array,
            i = this.attributes;
          for (const a in i) {
            const r = t(i[a], n);
            e.setAttribute(a, r);
          }
          const r = this.morphAttributes;
          for (const a in r) {
            const i = [],
              s = r[a];
            for (let e = 0, r = s.length; e < r; e++) {
              const r = t(s[e], n);
              i.push(r);
            }
            e.morphAttributes[a] = i;
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const s = this.groups;
          for (let a = 0, o = s.length; a < o; a++) {
            const t = s[a];
            e.addGroup(t.start, t.count, t.materialIndex);
          }
          return e;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 &&
              (t.userData = this.userData),
            void 0 !== this.parameters)
          ) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t;
          }
          t.data = { attributes: {} };
          const e = this.index;
          null !== e &&
            (t.data.index = {
              type: e.array.constructor.name,
              array: Array.prototype.slice.call(e.array),
            });
          const n = this.attributes;
          for (const o in n) {
            const e = n[o];
            t.data.attributes[o] = e.toJSON(t.data);
          }
          const i = {};
          let r = !1;
          for (const o in this.morphAttributes) {
            const e = this.morphAttributes[o],
              n = [];
            for (let i = 0, r = e.length; i < r; i++) {
              const r = e[i];
              n.push(r.toJSON(t.data));
            }
            n.length > 0 && ((i[o] = n), (r = !0));
          }
          r &&
            ((t.data.morphAttributes = i),
            (t.data.morphTargetsRelative = this.morphTargetsRelative));
          const s = this.groups;
          s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
          const a = this.boundingSphere;
          return (
            null !== a &&
              (t.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius,
              }),
            t
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null);
          const e = {};
          this.name = t.name;
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const l in i) {
            const t = i[l];
            this.setAttribute(l, t.clone(e));
          }
          const r = t.morphAttributes;
          for (const l in r) {
            const t = [],
              n = r[l];
            for (let i = 0, r = n.length; i < r; i++) t.push(n[i].clone(e));
            this.morphAttributes[l] = t;
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const s = t.groups;
          for (let l = 0, c = s.length; l < c; l++) {
            const t = s[l];
            this.addGroup(t.start, t.count, t.materialIndex);
          }
          const a = t.boundingBox;
          null !== a && (this.boundingBox = a.clone());
          const o = t.boundingSphere;
          return (
            null !== o && (this.boundingSphere = o.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            (this.userData = t.userData),
            void 0 !== t.parameters &&
              (this.parameters = Object.assign({}, t.parameters)),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      on.prototype.isBufferGeometry = !0;
      const ln = new oe(),
        cn = new ae(),
        hn = new Qt(),
        un = new Lt(),
        dn = new Lt(),
        pn = new Lt(),
        fn = new Lt(),
        mn = new Lt(),
        gn = new Lt(),
        vn = new Lt(),
        xn = new Lt(),
        yn = new Lt(),
        _n = new rt(),
        Mn = new rt(),
        bn = new rt(),
        wn = new Lt(),
        Sn = new Lt();
      class En extends De {
        constructor(t = new on(), e = new qe()) {
          super(),
            (this.type = "Mesh"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t) {
          return (
            super.copy(t),
            void 0 !== t.morphTargetInfluences &&
              (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary &&
              (this.morphTargetDictionary = Object.assign(
                {},
                t.morphTargetDictionary
              )),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        updateMorphTargets() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
            const e = t.morphAttributes,
              n = Object.keys(e);
            if (n.length > 0) {
              const t = e[n[0]];
              if (void 0 !== t) {
                (this.morphTargetInfluences = []),
                  (this.morphTargetDictionary = {});
                for (let e = 0, n = t.length; e < n; e++) {
                  const n = t[e].name || String(e);
                  this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[n] = e);
                }
              }
            }
          } else {
            const e = t.morphTargets;
            void 0 !== e &&
              e.length > 0 &&
              console.error(
                "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
              );
          }
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
          if (void 0 === i) return;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            hn.copy(n.boundingSphere),
            hn.applyMatrix4(r),
            !1 === t.ray.intersectsSphere(hn))
          )
            return;
          if (
            (ln.copy(r).invert(),
            cn.copy(t.ray).applyMatrix4(ln),
            null !== n.boundingBox && !1 === cn.intersectsBox(n.boundingBox))
          )
            return;
          let s;
          if (n.isBufferGeometry) {
            const r = n.index,
              a = n.attributes.position,
              o = n.morphAttributes.position,
              l = n.morphTargetsRelative,
              c = n.attributes.uv,
              h = n.attributes.uv2,
              u = n.groups,
              d = n.drawRange;
            if (null !== r)
              if (Array.isArray(i))
                for (let n = 0, p = u.length; n < p; n++) {
                  const p = u[n],
                    f = i[p.materialIndex];
                  for (
                    let n = Math.max(p.start, d.start),
                      i = Math.min(
                        r.count,
                        Math.min(p.start + p.count, d.start + d.count)
                      );
                    n < i;
                    n += 3
                  ) {
                    const i = r.getX(n),
                      u = r.getX(n + 1),
                      d = r.getX(n + 2);
                    (s = Tn(this, f, t, cn, a, o, l, c, h, i, u, d)),
                      s &&
                        ((s.faceIndex = Math.floor(n / 3)),
                        (s.face.materialIndex = p.materialIndex),
                        e.push(s));
                  }
                }
              else {
                for (
                  let n = Math.max(0, d.start),
                    u = Math.min(r.count, d.start + d.count);
                  n < u;
                  n += 3
                ) {
                  const u = r.getX(n),
                    d = r.getX(n + 1),
                    p = r.getX(n + 2);
                  (s = Tn(this, i, t, cn, a, o, l, c, h, u, d, p)),
                    s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
                }
              }
            else if (void 0 !== a)
              if (Array.isArray(i))
                for (let n = 0, p = u.length; n < p; n++) {
                  const r = u[n],
                    p = i[r.materialIndex];
                  for (
                    let n = Math.max(r.start, d.start),
                      i = Math.min(
                        a.count,
                        Math.min(r.start + r.count, d.start + d.count)
                      );
                    n < i;
                    n += 3
                  ) {
                    (s = Tn(this, p, t, cn, a, o, l, c, h, n, n + 1, n + 2)),
                      s &&
                        ((s.faceIndex = Math.floor(n / 3)),
                        (s.face.materialIndex = r.materialIndex),
                        e.push(s));
                  }
                }
              else {
                for (
                  let n = Math.max(0, d.start),
                    r = Math.min(a.count, d.start + d.count);
                  n < r;
                  n += 3
                ) {
                  (s = Tn(this, i, t, cn, a, o, l, c, h, n, n + 1, n + 2)),
                    s && ((s.faceIndex = Math.floor(n / 3)), e.push(s));
                }
              }
          } else
            n.isGeometry &&
              console.error(
                "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
              );
        }
      }
      function Tn(t, e, n, i, s, a, o, l, c, h, u, d) {
        un.fromBufferAttribute(s, h),
          dn.fromBufferAttribute(s, u),
          pn.fromBufferAttribute(s, d);
        const p = t.morphTargetInfluences;
        if (a && p) {
          vn.set(0, 0, 0), xn.set(0, 0, 0), yn.set(0, 0, 0);
          for (let t = 0, e = a.length; t < e; t++) {
            const e = p[t],
              n = a[t];
            0 !== e &&
              (fn.fromBufferAttribute(n, h),
              mn.fromBufferAttribute(n, u),
              gn.fromBufferAttribute(n, d),
              o
                ? (vn.addScaledVector(fn, e),
                  xn.addScaledVector(mn, e),
                  yn.addScaledVector(gn, e))
                : (vn.addScaledVector(fn.sub(un), e),
                  xn.addScaledVector(mn.sub(dn), e),
                  yn.addScaledVector(gn.sub(pn), e)));
          }
          un.add(vn), dn.add(xn), pn.add(yn);
        }
        t.isSkinnedMesh &&
          (t.boneTransform(h, un),
          t.boneTransform(u, dn),
          t.boneTransform(d, pn));
        const f = (function (t, e, n, i, s, a, o, l) {
          let c;
          if (
            ((c =
              1 === e.side
                ? i.intersectTriangle(o, a, s, !0, l)
                : i.intersectTriangle(s, a, o, e.side !== r, l)),
            null === c)
          )
            return null;
          Sn.copy(l), Sn.applyMatrix4(t.matrixWorld);
          const h = n.ray.origin.distanceTo(Sn);
          return h < n.near || h > n.far
            ? null
            : { distance: h, point: Sn.clone(), object: t };
        })(t, e, n, i, un, dn, pn, wn);
        if (f) {
          l &&
            (_n.fromBufferAttribute(l, h),
            Mn.fromBufferAttribute(l, u),
            bn.fromBufferAttribute(l, d),
            (f.uv = ke.getUV(wn, un, dn, pn, _n, Mn, bn, new rt()))),
            c &&
              (_n.fromBufferAttribute(c, h),
              Mn.fromBufferAttribute(c, u),
              bn.fromBufferAttribute(c, d),
              (f.uv2 = ke.getUV(wn, un, dn, pn, _n, Mn, bn, new rt())));
          const t = { a: h, b: u, c: d, normal: new Lt(), materialIndex: 0 };
          ke.getNormal(un, dn, pn, t.normal), (f.face = t);
        }
        return f;
      }
      En.prototype.isMesh = !0;
      class An extends on {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
          super(),
            (this.type = "BoxGeometry"),
            (this.parameters = {
              width: t,
              height: e,
              depth: n,
              widthSegments: i,
              heightSegments: r,
              depthSegments: s,
            });
          const a = this;
          (i = Math.floor(i)), (r = Math.floor(r)), (s = Math.floor(s));
          const o = [],
            l = [],
            c = [],
            h = [];
          let u = 0,
            d = 0;
          function p(t, e, n, i, r, s, p, f, m, g, v) {
            const x = s / m,
              y = p / g,
              _ = s / 2,
              M = p / 2,
              b = f / 2,
              w = m + 1,
              S = g + 1;
            let E = 0,
              T = 0;
            const A = new Lt();
            for (let a = 0; a < S; a++) {
              const s = a * y - M;
              for (let o = 0; o < w; o++) {
                const u = o * x - _;
                (A[t] = u * i),
                  (A[e] = s * r),
                  (A[n] = b),
                  l.push(A.x, A.y, A.z),
                  (A[t] = 0),
                  (A[e] = 0),
                  (A[n] = f > 0 ? 1 : -1),
                  c.push(A.x, A.y, A.z),
                  h.push(o / m),
                  h.push(1 - a / g),
                  (E += 1);
              }
            }
            for (let a = 0; a < g; a++)
              for (let t = 0; t < m; t++) {
                const e = u + t + w * a,
                  n = u + t + w * (a + 1),
                  i = u + (t + 1) + w * (a + 1),
                  r = u + (t + 1) + w * a;
                o.push(e, n, r), o.push(n, i, r), (T += 6);
              }
            a.addGroup(d, T, v), (d += T), (u += E);
          }
          p("z", "y", "x", -1, -1, n, e, t, s, r, 0),
            p("z", "y", "x", 1, -1, n, e, -t, s, r, 1),
            p("x", "z", "y", 1, 1, t, n, e, i, s, 2),
            p("x", "z", "y", 1, -1, t, n, -e, i, s, 3),
            p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
            p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
            this.setIndex(o),
            this.setAttribute("position", new Qe(l, 3)),
            this.setAttribute("normal", new Qe(c, 3)),
            this.setAttribute("uv", new Qe(h, 2));
        }
        static fromJSON(t) {
          return new An(
            t.width,
            t.height,
            t.depth,
            t.widthSegments,
            t.heightSegments,
            t.depthSegments
          );
        }
      }
      function Rn(t) {
        const e = {};
        for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
            const r = t[n][i];
            r &&
            (r.isColor ||
              r.isMatrix3 ||
              r.isMatrix4 ||
              r.isVector2 ||
              r.isVector3 ||
              r.isVector4 ||
              r.isTexture ||
              r.isQuaternion)
              ? (e[n][i] = r.clone())
              : Array.isArray(r)
              ? (e[n][i] = r.slice())
              : (e[n][i] = r);
          }
        }
        return e;
      }
      function Cn(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = Rn(t[n]);
          for (const t in i) e[t] = i[t];
        }
        return e;
      }
      const Ln = { clone: Rn, merge: Cn };
      class Pn extends je {
        constructor(t) {
          super(),
            (this.type = "ShaderMaterial"),
            (this.defines = {}),
            (this.uniforms = {}),
            (this.vertexShader =
              "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
            (this.fragmentShader =
              "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
            (this.linewidth = 1),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            (this.lights = !1),
            (this.clipping = !1),
            (this.extensions = {
              derivatives: !1,
              fragDepth: !1,
              drawBuffers: !1,
              shaderTextureLOD: !1,
            }),
            (this.defaultAttributeValues = {
              color: [1, 1, 1],
              uv: [0, 0],
              uv2: [0, 0],
            }),
            (this.index0AttributeName = void 0),
            (this.uniformsNeedUpdate = !1),
            (this.glslVersion = null),
            void 0 !== t &&
              (void 0 !== t.attributes &&
                console.error(
                  "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
                ),
              this.setValues(t));
        }
        copy(t) {
          return (
            super.copy(t),
            (this.fragmentShader = t.fragmentShader),
            (this.vertexShader = t.vertexShader),
            (this.uniforms = Rn(t.uniforms)),
            (this.defines = Object.assign({}, t.defines)),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.lights = t.lights),
            (this.clipping = t.clipping),
            (this.extensions = Object.assign({}, t.extensions)),
            (this.glslVersion = t.glslVersion),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          (e.glslVersion = this.glslVersion), (e.uniforms = {});
          for (const i in this.uniforms) {
            const n = this.uniforms[i].value;
            n && n.isTexture
              ? (e.uniforms[i] = { type: "t", value: n.toJSON(t).uuid })
              : n && n.isColor
              ? (e.uniforms[i] = { type: "c", value: n.getHex() })
              : n && n.isVector2
              ? (e.uniforms[i] = { type: "v2", value: n.toArray() })
              : n && n.isVector3
              ? (e.uniforms[i] = { type: "v3", value: n.toArray() })
              : n && n.isVector4
              ? (e.uniforms[i] = { type: "v4", value: n.toArray() })
              : n && n.isMatrix3
              ? (e.uniforms[i] = { type: "m3", value: n.toArray() })
              : n && n.isMatrix4
              ? (e.uniforms[i] = { type: "m4", value: n.toArray() })
              : (e.uniforms[i] = { value: n });
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines),
            (e.vertexShader = this.vertexShader),
            (e.fragmentShader = this.fragmentShader);
          const n = {};
          for (const i in this.extensions)
            !0 === this.extensions[i] && (n[i] = !0);
          return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
      }
      Pn.prototype.isShaderMaterial = !0;
      class Dn extends De {
        constructor() {
          super(),
            (this.type = "Camera"),
            (this.matrixWorldInverse = new oe()),
            (this.projectionMatrix = new oe()),
            (this.projectionMatrixInverse = new oe());
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(-e[8], -e[9], -e[10]).normalize();
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
          super.updateWorldMatrix(t, e),
            this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      Dn.prototype.isCamera = !0;
      class In extends Dn {
        constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
          super(),
            (this.type = "PerspectiveCamera"),
            (this.fov = t),
            (this.zoom = 1),
            (this.near = n),
            (this.far = i),
            (this.focus = 10),
            (this.aspect = e),
            (this.view = null),
            (this.filmGauge = 35),
            (this.filmOffset = 0),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.fov = t.fov),
            (this.zoom = t.zoom),
            (this.near = t.near),
            (this.far = t.far),
            (this.focus = t.focus),
            (this.aspect = t.aspect),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            (this.filmGauge = t.filmGauge),
            (this.filmOffset = t.filmOffset),
            this
          );
        }
        setFocalLength(t) {
          const e = (0.5 * this.getFilmHeight()) / t;
          (this.fov = 2 * K * Math.atan(e)), this.updateProjectionMatrix();
        }
        getFocalLength() {
          const t = Math.tan(0.5 * Z * this.fov);
          return (0.5 * this.getFilmHeight()) / t;
        }
        getEffectiveFOV() {
          return 2 * K * Math.atan(Math.tan(0.5 * Z * this.fov) / this.zoom);
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, r, s) {
          (this.aspect = t / e),
            null === this.view &&
              (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1,
              }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = s),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = this.near;
          let e = (t * Math.tan(0.5 * Z * this.fov)) / this.zoom,
            n = 2 * e,
            i = this.aspect * n,
            r = -0.5 * i;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
            const t = s.fullWidth,
              a = s.fullHeight;
            (r += (s.offsetX * i) / t),
              (e -= (s.offsetY * n) / a),
              (i *= s.width / t),
              (n *= s.height / a);
          }
          const a = this.filmOffset;
          0 !== a && (r += (t * a) / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(
              r,
              r + i,
              e,
              e - n,
              t,
              this.far
            ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.fov = this.fov),
            (e.object.zoom = this.zoom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            (e.object.focus = this.focus),
            (e.object.aspect = this.aspect),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            (e.object.filmGauge = this.filmGauge),
            (e.object.filmOffset = this.filmOffset),
            e
          );
        }
      }
      In.prototype.isPerspectiveCamera = !0;
      const Nn = 90;
      class On extends De {
        constructor(t, e, n) {
          if (
            (super(),
            (this.type = "CubeCamera"),
            !0 !== n.isWebGLCubeRenderTarget)
          )
            return void console.error(
              "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
            );
          this.renderTarget = n;
          const i = new In(Nn, 1, t, e);
          (i.layers = this.layers),
            i.up.set(0, -1, 0),
            i.lookAt(new Lt(1, 0, 0)),
            this.add(i);
          const r = new In(Nn, 1, t, e);
          (r.layers = this.layers),
            r.up.set(0, -1, 0),
            r.lookAt(new Lt(-1, 0, 0)),
            this.add(r);
          const s = new In(Nn, 1, t, e);
          (s.layers = this.layers),
            s.up.set(0, 0, 1),
            s.lookAt(new Lt(0, 1, 0)),
            this.add(s);
          const a = new In(Nn, 1, t, e);
          (a.layers = this.layers),
            a.up.set(0, 0, -1),
            a.lookAt(new Lt(0, -1, 0)),
            this.add(a);
          const o = new In(Nn, 1, t, e);
          (o.layers = this.layers),
            o.up.set(0, -1, 0),
            o.lookAt(new Lt(0, 0, 1)),
            this.add(o);
          const l = new In(Nn, 1, t, e);
          (l.layers = this.layers),
            l.up.set(0, -1, 0),
            l.lookAt(new Lt(0, 0, -1)),
            this.add(l);
        }
        update(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const n = this.renderTarget,
            [i, r, s, a, o, l] = this.children,
            c = t.getRenderTarget(),
            h = t.outputEncoding,
            u = t.toneMapping,
            d = t.xr.enabled;
          (t.outputEncoding = H), (t.toneMapping = 0), (t.xr.enabled = !1);
          const p = n.texture.generateMipmaps;
          (n.texture.generateMipmaps = !1),
            t.setRenderTarget(n, 0),
            t.render(e, i),
            t.setRenderTarget(n, 1),
            t.render(e, r),
            t.setRenderTarget(n, 2),
            t.render(e, s),
            t.setRenderTarget(n, 3),
            t.render(e, a),
            t.setRenderTarget(n, 4),
            t.render(e, o),
            (n.texture.generateMipmaps = p),
            t.setRenderTarget(n, 5),
            t.render(e, l),
            t.setRenderTarget(c),
            (t.outputEncoding = h),
            (t.toneMapping = u),
            (t.xr.enabled = d),
            (n.texture.needsPMREMUpdate = !0);
        }
      }
      class zn extends St {
        constructor(t, e, n, i, r, s, o, l, c, h) {
          super(
            (t = void 0 !== t ? t : []),
            (e = void 0 !== e ? e : a),
            n,
            i,
            r,
            s,
            o,
            l,
            c,
            h
          ),
            (this.flipY = !1);
        }
        get images() {
          return this.image;
        }
        set images(t) {
          this.image = t;
        }
      }
      zn.prototype.isCubeTexture = !0;
      class Bn extends Tt {
        constructor(t, e = {}) {
          super(t, t, e);
          const n = { width: t, height: t, depth: 1 },
            i = [n, n, n, n, n, n];
          (this.texture = new zn(
            i,
            e.mapping,
            e.wrapS,
            e.wrapT,
            e.magFilter,
            e.minFilter,
            e.format,
            e.type,
            e.anisotropy,
            e.encoding
          )),
            (this.texture.isRenderTargetTexture = !0),
            (this.texture.generateMipmaps =
              void 0 !== e.generateMipmaps && e.generateMipmaps),
            (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : v);
        }
        fromEquirectangularTexture(t, e) {
          (this.texture.type = e.type),
            (this.texture.encoding = e.encoding),
            (this.texture.generateMipmaps = e.generateMipmaps),
            (this.texture.minFilter = e.minFilter),
            (this.texture.magFilter = e.magFilter);
          const n = {
              uniforms: { tEquirect: { value: null } },
              vertexShader:
                "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
              fragmentShader:
                "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
            },
            i = new An(5, 5, 5),
            r = new Pn({
              name: "CubemapFromEquirect",
              uniforms: Rn(n.uniforms),
              vertexShader: n.vertexShader,
              fragmentShader: n.fragmentShader,
              side: 1,
              blending: 0,
            });
          r.uniforms.tEquirect.value = e;
          const s = new En(i, r),
            a = e.minFilter;
          e.minFilter === x && (e.minFilter = v);
          return (
            new On(1, 10, this).update(t, s),
            (e.minFilter = a),
            s.geometry.dispose(),
            s.material.dispose(),
            this
          );
        }
        clear(t, e, n, i) {
          const r = t.getRenderTarget();
          for (let s = 0; s < 6; s++)
            t.setRenderTarget(this, s), t.clear(e, n, i);
          t.setRenderTarget(r);
        }
      }
      Bn.prototype.isWebGLCubeRenderTarget = !0;
      const Un = new Lt(),
        Hn = new Lt(),
        Fn = new st();
      class Gn {
        constructor(t = new Lt(1, 0, 0), e = 0) {
          (this.normal = t), (this.constant = e);
        }
        set(t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), (this.constant = i), this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        }
        setFromCoplanarPoints(t, e, n) {
          const i = Un.subVectors(n, e).cross(Hn.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        }
        negate() {
          return (this.constant *= -1), this.normal.negate(), this;
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
          return e
            .copy(this.normal)
            .multiplyScalar(-this.distanceToPoint(t))
            .add(t);
        }
        intersectLine(t, e) {
          const n = t.delta(Un),
            i = this.normal.dot(n);
          if (0 === i)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1
            ? null
            : e.copy(n).multiplyScalar(r).add(t.start);
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
          return (e < 0 && n > 0) || (n < 0 && e > 0);
        }
        intersectsBox(t) {
          return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
          const n = e || Fn.getNormalMatrix(t),
            i = this.coplanarPoint(Un).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
          return (this.constant = -i.dot(r)), this;
        }
        translate(t) {
          return (this.constant -= t.dot(this.normal)), this;
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      Gn.prototype.isPlane = !0;
      const Vn = new Qt(),
        kn = new Lt();
      class Wn {
        constructor(
          t = new Gn(),
          e = new Gn(),
          n = new Gn(),
          i = new Gn(),
          r = new Gn(),
          s = new Gn()
        ) {
          this.planes = [t, e, n, i, r, s];
        }
        set(t, e, n, i, r, s) {
          const a = this.planes;
          return (
            a[0].copy(t),
            a[1].copy(e),
            a[2].copy(n),
            a[3].copy(i),
            a[4].copy(r),
            a[5].copy(s),
            this
          );
        }
        copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this;
        }
        setFromProjectionMatrix(t) {
          const e = this.planes,
            n = t.elements,
            i = n[0],
            r = n[1],
            s = n[2],
            a = n[3],
            o = n[4],
            l = n[5],
            c = n[6],
            h = n[7],
            u = n[8],
            d = n[9],
            p = n[10],
            f = n[11],
            m = n[12],
            g = n[13],
            v = n[14],
            x = n[15];
          return (
            e[0].setComponents(a - i, h - o, f - u, x - m).normalize(),
            e[1].setComponents(a + i, h + o, f + u, x + m).normalize(),
            e[2].setComponents(a + r, h + l, f + d, x + g).normalize(),
            e[3].setComponents(a - r, h - l, f - d, x - g).normalize(),
            e[4].setComponents(a - s, h - c, f - p, x - v).normalize(),
            e[5].setComponents(a + s, h + c, f + p, x + v).normalize(),
            this
          );
        }
        intersectsObject(t) {
          const e = t.geometry;
          return (
            null === e.boundingSphere && e.computeBoundingSphere(),
            Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Vn)
          );
        }
        intersectsSprite(t) {
          return (
            Vn.center.set(0, 0, 0),
            (Vn.radius = 0.7071067811865476),
            Vn.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Vn)
          );
        }
        intersectsSphere(t) {
          const e = this.planes,
            n = t.center,
            i = -t.radius;
          for (let r = 0; r < 6; r++) {
            if (e[r].distanceToPoint(n) < i) return !1;
          }
          return !0;
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (
              ((kn.x = i.normal.x > 0 ? t.max.x : t.min.x),
              (kn.y = i.normal.y > 0 ? t.max.y : t.min.y),
              (kn.z = i.normal.z > 0 ? t.max.z : t.min.z),
              i.distanceToPoint(kn) < 0)
            )
              return !1;
          }
          return !0;
        }
        containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0) return !1;
          return !0;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      function jn() {
        let t = null,
          e = !1,
          n = null,
          i = null;
        function r(e, s) {
          n(e, s), (i = t.requestAnimationFrame(r));
        }
        return {
          start: function () {
            !0 !== e &&
              null !== n &&
              ((i = t.requestAnimationFrame(r)), (e = !0));
          },
          stop: function () {
            t.cancelAnimationFrame(i), (e = !1);
          },
          setAnimationLoop: function (t) {
            n = t;
          },
          setContext: function (e) {
            t = e;
          },
        };
      }
      function qn(t, e) {
        const n = e.isWebGL2,
          i = new WeakMap();
        return {
          get: function (t) {
            return t.isInterleavedBufferAttribute && (t = t.data), i.get(t);
          },
          remove: function (e) {
            e.isInterleavedBufferAttribute && (e = e.data);
            const n = i.get(e);
            n && (t.deleteBuffer(n.buffer), i.delete(e));
          },
          update: function (e, r) {
            if (e.isGLBufferAttribute) {
              const t = i.get(e);
              return void (
                (!t || t.version < e.version) &&
                i.set(e, {
                  buffer: e.buffer,
                  type: e.type,
                  bytesPerElement: e.elementSize,
                  version: e.version,
                })
              );
            }
            e.isInterleavedBufferAttribute && (e = e.data);
            const s = i.get(e);
            void 0 === s
              ? i.set(
                  e,
                  (function (e, i) {
                    const r = e.array,
                      s = e.usage,
                      a = t.createBuffer();
                    let o;
                    if (
                      (t.bindBuffer(i, a),
                      t.bufferData(i, r, s),
                      e.onUploadCallback(),
                      r instanceof Float32Array)
                    )
                      o = 5126;
                    else if (r instanceof Uint16Array)
                      if (e.isFloat16BufferAttribute) {
                        if (!n)
                          throw new Error(
                            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                          );
                        o = 5131;
                      } else o = 5123;
                    else if (r instanceof Int16Array) o = 5122;
                    else if (r instanceof Uint32Array) o = 5125;
                    else if (r instanceof Int32Array) o = 5124;
                    else if (r instanceof Int8Array) o = 5120;
                    else if (r instanceof Uint8Array) o = 5121;
                    else {
                      if (!(r instanceof Uint8ClampedArray))
                        throw new Error(
                          "THREE.WebGLAttributes: Unsupported buffer data format: " +
                            r
                        );
                      o = 5121;
                    }
                    return {
                      buffer: a,
                      type: o,
                      bytesPerElement: r.BYTES_PER_ELEMENT,
                      version: e.version,
                    };
                  })(e, r)
                )
              : s.version < e.version &&
                (!(function (e, i, r) {
                  const s = i.array,
                    a = i.updateRange;
                  t.bindBuffer(r, e),
                    -1 === a.count
                      ? t.bufferSubData(r, 0, s)
                      : (n
                          ? t.bufferSubData(
                              r,
                              a.offset * s.BYTES_PER_ELEMENT,
                              s,
                              a.offset,
                              a.count
                            )
                          : t.bufferSubData(
                              r,
                              a.offset * s.BYTES_PER_ELEMENT,
                              s.subarray(a.offset, a.offset + a.count)
                            ),
                        (a.count = -1));
                })(s.buffer, e, r),
                (s.version = e.version));
          },
        };
      }
      class Xn extends on {
        constructor(t = 1, e = 1, n = 1, i = 1) {
          super(),
            (this.type = "PlaneGeometry"),
            (this.parameters = {
              width: t,
              height: e,
              widthSegments: n,
              heightSegments: i,
            });
          const r = t / 2,
            s = e / 2,
            a = Math.floor(n),
            o = Math.floor(i),
            l = a + 1,
            c = o + 1,
            h = t / a,
            u = e / o,
            d = [],
            p = [],
            f = [],
            m = [];
          for (let g = 0; g < c; g++) {
            const t = g * u - s;
            for (let e = 0; e < l; e++) {
              const n = e * h - r;
              p.push(n, -t, 0),
                f.push(0, 0, 1),
                m.push(e / a),
                m.push(1 - g / o);
            }
          }
          for (let g = 0; g < o; g++)
            for (let t = 0; t < a; t++) {
              const e = t + l * g,
                n = t + l * (g + 1),
                i = t + 1 + l * (g + 1),
                r = t + 1 + l * g;
              d.push(e, n, r), d.push(n, i, r);
            }
          this.setIndex(d),
            this.setAttribute("position", new Qe(p, 3)),
            this.setAttribute("normal", new Qe(f, 3)),
            this.setAttribute("uv", new Qe(m, 2));
        }
        static fromJSON(t) {
          return new Xn(t.width, t.height, t.widthSegments, t.heightSegments);
        }
      }
      const Jn = {
          alphamap_fragment:
            "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
          alphamap_pars_fragment:
            "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          alphatest_fragment:
            "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
          alphatest_pars_fragment:
            "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
          aomap_fragment:
            "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
          aomap_pars_fragment:
            "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
          begin_vertex: "vec3 transformed = vec3( position );",
          beginnormal_vertex:
            "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs:
            "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
          bumpmap_pars_fragment:
            "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
          clipping_planes_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
          clipping_planes_pars_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
          clipping_planes_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
          color_fragment:
            "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment:
            "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_pars_vertex:
            "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_vertex:
            "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
          common:
            "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
          cube_uv_reflection_fragment:
            "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
          defaultnormal_vertex:
            "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
          displacementmap_pars_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
          displacementmap_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
          encodings_fragment:
            "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          encodings_pars_fragment:
            "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
          envmap_fragment:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
          envmap_common_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
          envmap_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
          envmap_pars_vertex:
            "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
          envmap_physical_pars_fragment:
            "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
          envmap_vertex:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
          fog_fragment:
            "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment:
            "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
          gradientmap_pars_fragment:
            "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
          lightmap_fragment:
            "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
          lightmap_pars_fragment:
            "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
          lights_lambert_vertex:
            "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
          lights_pars_begin:
            "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
          lights_toon_fragment:
            "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
          lights_toon_pars_fragment:
            "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
          lights_phong_fragment:
            "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment:
            "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
          lights_physical_fragment:
            "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
          lights_physical_pars_fragment:
            "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin:
            "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps:
            "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
          lights_fragment_end:
            "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
          logdepthbuf_fragment:
            "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment:
            "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
          logdepthbuf_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
          map_fragment:
            "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
          map_particle_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment:
            "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment:
            "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
          morphcolor_vertex:
            "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
          morphnormal_vertex:
            "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
          morphtarget_pars_vertex:
            "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
          morphtarget_vertex:
            "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
          normal_fragment_begin:
            "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
          normal_fragment_maps:
            "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
          normal_pars_fragment:
            "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_pars_vertex:
            "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_vertex:
            "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
          normalmap_pars_fragment:
            "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
          clearcoat_normal_fragment_begin:
            "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
          clearcoat_normal_fragment_maps:
            "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
          clearcoat_pars_fragment:
            "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
          output_fragment:
            "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
          packing:
            "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
          premultiplied_alpha_fragment:
            "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex:
            "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment:
            "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment:
            "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
          roughnessmap_fragment:
            "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment:
            "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
          shadowmap_pars_vertex:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
          shadowmap_vertex:
            "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
          shadowmask_pars_fragment:
            "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
          skinbase_vertex:
            "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex:
            "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
          skinning_vertex:
            "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex:
            "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
          specularmap_fragment:
            "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
          specularmap_pars_fragment:
            "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
          tonemapping_fragment:
            "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment:
            "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
          transmission_fragment:
            "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
          transmission_pars_fragment:
            "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
          uv_pars_fragment:
            "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
          uv_pars_vertex:
            "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
          uv_vertex:
            "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
          uv2_pars_fragment:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
          uv2_pars_vertex:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
          uv2_vertex:
            "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
          worldpos_vertex:
            "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
          background_vert:
            "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          background_frag:
            "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          cube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          cube_frag:
            "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          depth_vert:
            "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
          depth_frag:
            "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
          distanceRGBA_vert:
            "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
          distanceRGBA_frag:
            "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
          equirect_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
          equirect_frag:
            "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          linedashed_vert:
            "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          linedashed_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          meshbasic_vert:
            "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
          meshbasic_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshlambert_vert:
            "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshlambert_frag:
            "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshmatcap_vert:
            "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
          meshmatcap_frag:
            "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshnormal_vert:
            "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
          meshnormal_frag:
            "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
          meshphong_vert:
            "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphong_frag:
            "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphysical_vert:
            "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
          meshphysical_frag:
            "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshtoon_vert:
            "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshtoon_frag:
            "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          points_vert:
            "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
          points_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          shadow_vert:
            "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          shadow_frag:
            "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          sprite_vert:
            "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          sprite_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        },
        Yn = {
          common: {
            diffuse: { value: new xt(16777215) },
            opacity: { value: 1 },
            map: { value: null },
            uvTransform: { value: new st() },
            uv2Transform: { value: new st() },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
          },
          specularmap: { specularMap: { value: null } },
          envmap: {
            envMap: { value: null },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            ior: { value: 1.5 },
            refractionRatio: { value: 0.98 },
          },
          aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
          },
          emissivemap: { emissiveMap: { value: null } },
          bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
          normalmap: {
            normalMap: { value: null },
            normalScale: { value: new rt(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          roughnessmap: { roughnessMap: { value: null } },
          metalnessmap: { metalnessMap: { value: null } },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new xt(16777215) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: { direction: {}, color: {} },
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
              },
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotShadowMap: { value: [] },
            spotShadowMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: { color: {}, position: {}, decay: {}, distance: {} },
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
            ltc_1: { value: null },
            ltc_2: { value: null },
          },
          points: {
            diffuse: { value: new xt(16777215) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new st() },
          },
          sprite: {
            diffuse: { value: new xt(16777215) },
            opacity: { value: 1 },
            center: { value: new rt(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            alphaMap: { value: null },
            alphaTest: { value: 0 },
            uvTransform: { value: new st() },
          },
        },
        Zn = {
          basic: {
            uniforms: Cn([
              Yn.common,
              Yn.specularmap,
              Yn.envmap,
              Yn.aomap,
              Yn.lightmap,
              Yn.fog,
            ]),
            vertexShader: Jn.meshbasic_vert,
            fragmentShader: Jn.meshbasic_frag,
          },
          lambert: {
            uniforms: Cn([
              Yn.common,
              Yn.specularmap,
              Yn.envmap,
              Yn.aomap,
              Yn.lightmap,
              Yn.emissivemap,
              Yn.fog,
              Yn.lights,
              { emissive: { value: new xt(0) } },
            ]),
            vertexShader: Jn.meshlambert_vert,
            fragmentShader: Jn.meshlambert_frag,
          },
          phong: {
            uniforms: Cn([
              Yn.common,
              Yn.specularmap,
              Yn.envmap,
              Yn.aomap,
              Yn.lightmap,
              Yn.emissivemap,
              Yn.bumpmap,
              Yn.normalmap,
              Yn.displacementmap,
              Yn.fog,
              Yn.lights,
              {
                emissive: { value: new xt(0) },
                specular: { value: new xt(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: Jn.meshphong_vert,
            fragmentShader: Jn.meshphong_frag,
          },
          standard: {
            uniforms: Cn([
              Yn.common,
              Yn.envmap,
              Yn.aomap,
              Yn.lightmap,
              Yn.emissivemap,
              Yn.bumpmap,
              Yn.normalmap,
              Yn.displacementmap,
              Yn.roughnessmap,
              Yn.metalnessmap,
              Yn.fog,
              Yn.lights,
              {
                emissive: { value: new xt(0) },
                roughness: { value: 1 },
                metalness: { value: 0 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: Jn.meshphysical_vert,
            fragmentShader: Jn.meshphysical_frag,
          },
          toon: {
            uniforms: Cn([
              Yn.common,
              Yn.aomap,
              Yn.lightmap,
              Yn.emissivemap,
              Yn.bumpmap,
              Yn.normalmap,
              Yn.displacementmap,
              Yn.gradientmap,
              Yn.fog,
              Yn.lights,
              { emissive: { value: new xt(0) } },
            ]),
            vertexShader: Jn.meshtoon_vert,
            fragmentShader: Jn.meshtoon_frag,
          },
          matcap: {
            uniforms: Cn([
              Yn.common,
              Yn.bumpmap,
              Yn.normalmap,
              Yn.displacementmap,
              Yn.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: Jn.meshmatcap_vert,
            fragmentShader: Jn.meshmatcap_frag,
          },
          points: {
            uniforms: Cn([Yn.points, Yn.fog]),
            vertexShader: Jn.points_vert,
            fragmentShader: Jn.points_frag,
          },
          dashed: {
            uniforms: Cn([
              Yn.common,
              Yn.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: Jn.linedashed_vert,
            fragmentShader: Jn.linedashed_frag,
          },
          depth: {
            uniforms: Cn([Yn.common, Yn.displacementmap]),
            vertexShader: Jn.depth_vert,
            fragmentShader: Jn.depth_frag,
          },
          normal: {
            uniforms: Cn([
              Yn.common,
              Yn.bumpmap,
              Yn.normalmap,
              Yn.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: Jn.meshnormal_vert,
            fragmentShader: Jn.meshnormal_frag,
          },
          sprite: {
            uniforms: Cn([Yn.sprite, Yn.fog]),
            vertexShader: Jn.sprite_vert,
            fragmentShader: Jn.sprite_frag,
          },
          background: {
            uniforms: {
              uvTransform: { value: new st() },
              t2D: { value: null },
            },
            vertexShader: Jn.background_vert,
            fragmentShader: Jn.background_frag,
          },
          cube: {
            uniforms: Cn([Yn.envmap, { opacity: { value: 1 } }]),
            vertexShader: Jn.cube_vert,
            fragmentShader: Jn.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: Jn.equirect_vert,
            fragmentShader: Jn.equirect_frag,
          },
          distanceRGBA: {
            uniforms: Cn([
              Yn.common,
              Yn.displacementmap,
              {
                referencePosition: { value: new Lt() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: Jn.distanceRGBA_vert,
            fragmentShader: Jn.distanceRGBA_frag,
          },
          shadow: {
            uniforms: Cn([
              Yn.lights,
              Yn.fog,
              { color: { value: new xt(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: Jn.shadow_vert,
            fragmentShader: Jn.shadow_frag,
          },
        };
      function Kn(t, e, n, i, r, s) {
        const a = new xt(0);
        let o,
          l,
          c = !0 === r ? 0 : 1,
          u = null,
          d = 0,
          p = null;
        function f(t, e) {
          n.buffers.color.setClear(t.r, t.g, t.b, e, s);
        }
        return {
          getClearColor: function () {
            return a;
          },
          setClearColor: function (t, e = 1) {
            a.set(t), (c = e), f(a, c);
          },
          getClearAlpha: function () {
            return c;
          },
          setClearAlpha: function (t) {
            (c = t), f(a, c);
          },
          render: function (n, r) {
            let s = !1,
              m = !0 === r.isScene ? r.background : null;
            m && m.isTexture && (m = e.get(m));
            const g = t.xr,
              v = g.getSession && g.getSession();
            v && "additive" === v.environmentBlendMode && (m = null),
              null === m ? f(a, c) : m && m.isColor && (f(m, 1), (s = !0)),
              (t.autoClear || s) &&
                t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
              m && (m.isCubeTexture || m.mapping === h)
                ? (void 0 === l &&
                    ((l = new En(
                      new An(1, 1, 1),
                      new Pn({
                        name: "BackgroundCubeMaterial",
                        uniforms: Rn(Zn.cube.uniforms),
                        vertexShader: Zn.cube.vertexShader,
                        fragmentShader: Zn.cube.fragmentShader,
                        side: 1,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    l.geometry.deleteAttribute("normal"),
                    l.geometry.deleteAttribute("uv"),
                    (l.onBeforeRender = function (t, e, n) {
                      this.matrixWorld.copyPosition(n.matrixWorld);
                    }),
                    Object.defineProperty(l.material, "envMap", {
                      get: function () {
                        return this.uniforms.envMap.value;
                      },
                    }),
                    i.update(l)),
                  (l.material.uniforms.envMap.value = m),
                  (l.material.uniforms.flipEnvMap.value =
                    m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1),
                  (u === m && d === m.version && p === t.toneMapping) ||
                    ((l.material.needsUpdate = !0),
                    (u = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  n.unshift(l, l.geometry, l.material, 0, 0, null))
                : m &&
                  m.isTexture &&
                  (void 0 === o &&
                    ((o = new En(
                      new Xn(2, 2),
                      new Pn({
                        name: "BackgroundMaterial",
                        uniforms: Rn(Zn.background.uniforms),
                        vertexShader: Zn.background.vertexShader,
                        fragmentShader: Zn.background.fragmentShader,
                        side: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                      })
                    )),
                    o.geometry.deleteAttribute("normal"),
                    Object.defineProperty(o.material, "map", {
                      get: function () {
                        return this.uniforms.t2D.value;
                      },
                    }),
                    i.update(o)),
                  (o.material.uniforms.t2D.value = m),
                  !0 === m.matrixAutoUpdate && m.updateMatrix(),
                  o.material.uniforms.uvTransform.value.copy(m.matrix),
                  (u === m && d === m.version && p === t.toneMapping) ||
                    ((o.material.needsUpdate = !0),
                    (u = m),
                    (d = m.version),
                    (p = t.toneMapping)),
                  n.unshift(o, o.geometry, o.material, 0, 0, null));
          },
        };
      }
      function Qn(t, e, n, i) {
        const r = t.getParameter(34921),
          s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
          a = i.isWebGL2 || null !== s,
          o = {},
          l = p(null);
        let c = l,
          h = !1;
        function u(e) {
          return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function d(e) {
          return i.isWebGL2
            ? t.deleteVertexArray(e)
            : s.deleteVertexArrayOES(e);
        }
        function p(t) {
          const e = [],
            n = [],
            i = [];
          for (let s = 0; s < r; s++) (e[s] = 0), (n[s] = 0), (i[s] = 0);
          return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: e,
            enabledAttributes: n,
            attributeDivisors: i,
            object: t,
            attributes: {},
            index: null,
          };
        }
        function f() {
          const t = c.newAttributes;
          for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
        }
        function m(t) {
          g(t, 0);
        }
        function g(n, r) {
          const s = c.newAttributes,
            a = c.enabledAttributes,
            o = c.attributeDivisors;
          if (
            ((s[n] = 1),
            0 === a[n] && (t.enableVertexAttribArray(n), (a[n] = 1)),
            o[n] !== r)
          ) {
            (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[
              i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
            ](n, r),
              (o[n] = r);
          }
        }
        function v() {
          const e = c.newAttributes,
            n = c.enabledAttributes;
          for (let i = 0, r = n.length; i < r; i++)
            n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
        }
        function x(e, n, r, s, a, o) {
          !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
            ? t.vertexAttribPointer(e, n, r, s, a, o)
            : t.vertexAttribIPointer(e, n, r, a, o);
        }
        function y() {
          _(), (h = !0), c !== l && ((c = l), u(c.object));
        }
        function _() {
          (l.geometry = null), (l.program = null), (l.wireframe = !1);
        }
        return {
          setup: function (r, l, d, y, _) {
            let M = !1;
            if (a) {
              const e = (function (e, n, r) {
                const a = !0 === r.wireframe;
                let l = o[e.id];
                void 0 === l && ((l = {}), (o[e.id] = l));
                let c = l[n.id];
                void 0 === c && ((c = {}), (l[n.id] = c));
                let h = c[a];
                void 0 === h &&
                  ((h = p(
                    i.isWebGL2
                      ? t.createVertexArray()
                      : s.createVertexArrayOES()
                  )),
                  (c[a] = h));
                return h;
              })(y, d, l);
              c !== e && ((c = e), u(c.object)),
                (M = (function (t, e) {
                  const n = c.attributes,
                    i = t.attributes;
                  let r = 0;
                  for (const s in i) {
                    const t = n[s],
                      e = i[s];
                    if (void 0 === t) return !0;
                    if (t.attribute !== e) return !0;
                    if (t.data !== e.data) return !0;
                    r++;
                  }
                  return c.attributesNum !== r || c.index !== e;
                })(y, _)),
                M &&
                  (function (t, e) {
                    const n = {},
                      i = t.attributes;
                    let r = 0;
                    for (const s in i) {
                      const t = i[s],
                        e = {};
                      (e.attribute = t),
                        t.data && (e.data = t.data),
                        (n[s] = e),
                        r++;
                    }
                    (c.attributes = n), (c.attributesNum = r), (c.index = e);
                  })(y, _);
            } else {
              const t = !0 === l.wireframe;
              (c.geometry === y.id &&
                c.program === d.id &&
                c.wireframe === t) ||
                ((c.geometry = y.id),
                (c.program = d.id),
                (c.wireframe = t),
                (M = !0));
            }
            !0 === r.isInstancedMesh && (M = !0),
              null !== _ && n.update(_, 34963),
              (M || h) &&
                ((h = !1),
                (function (r, s, a, o) {
                  if (
                    !1 === i.isWebGL2 &&
                    (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
                    null === e.get("ANGLE_instanced_arrays")
                  )
                    return;
                  f();
                  const l = o.attributes,
                    c = a.getAttributes(),
                    h = s.defaultAttributeValues;
                  for (const e in c) {
                    const i = c[e];
                    if (i.location >= 0) {
                      let s = l[e];
                      if (
                        (void 0 === s &&
                          ("instanceMatrix" === e &&
                            r.instanceMatrix &&
                            (s = r.instanceMatrix),
                          "instanceColor" === e &&
                            r.instanceColor &&
                            (s = r.instanceColor)),
                        void 0 !== s)
                      ) {
                        const e = s.normalized,
                          a = s.itemSize,
                          l = n.get(s);
                        if (void 0 === l) continue;
                        const c = l.buffer,
                          h = l.type,
                          u = l.bytesPerElement;
                        if (s.isInterleavedBufferAttribute) {
                          const n = s.data,
                            l = n.stride,
                            d = s.offset;
                          if (n.isInstancedInterleavedBuffer) {
                            for (let t = 0; t < i.locationSize; t++)
                              g(i.location + t, n.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                n.meshPerAttribute * n.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t);
                          t.bindBuffer(34962, c);
                          for (let t = 0; t < i.locationSize; t++)
                            x(
                              i.location + t,
                              a / i.locationSize,
                              h,
                              e,
                              l * u,
                              (d + (a / i.locationSize) * t) * u
                            );
                        } else {
                          if (s.isInstancedBufferAttribute) {
                            for (let t = 0; t < i.locationSize; t++)
                              g(i.location + t, s.meshPerAttribute);
                            !0 !== r.isInstancedMesh &&
                              void 0 === o._maxInstanceCount &&
                              (o._maxInstanceCount =
                                s.meshPerAttribute * s.count);
                          } else
                            for (let t = 0; t < i.locationSize; t++)
                              m(i.location + t);
                          t.bindBuffer(34962, c);
                          for (let t = 0; t < i.locationSize; t++)
                            x(
                              i.location + t,
                              a / i.locationSize,
                              h,
                              e,
                              a * u,
                              (a / i.locationSize) * t * u
                            );
                        }
                      } else if (void 0 !== h) {
                        const n = h[e];
                        if (void 0 !== n)
                          switch (n.length) {
                            case 2:
                              t.vertexAttrib2fv(i.location, n);
                              break;
                            case 3:
                              t.vertexAttrib3fv(i.location, n);
                              break;
                            case 4:
                              t.vertexAttrib4fv(i.location, n);
                              break;
                            default:
                              t.vertexAttrib1fv(i.location, n);
                          }
                      }
                    }
                  }
                  v();
                })(r, l, d, y),
                null !== _ && t.bindBuffer(34963, n.get(_).buffer));
          },
          reset: y,
          resetDefaultState: _,
          dispose: function () {
            y();
            for (const t in o) {
              const e = o[t];
              for (const t in e) {
                const n = e[t];
                for (const t in n) d(n[t].object), delete n[t];
                delete e[t];
              }
              delete o[t];
            }
          },
          releaseStatesOfGeometry: function (t) {
            if (void 0 === o[t.id]) return;
            const e = o[t.id];
            for (const n in e) {
              const t = e[n];
              for (const e in t) d(t[e].object), delete t[e];
              delete e[n];
            }
            delete o[t.id];
          },
          releaseStatesOfProgram: function (t) {
            for (const e in o) {
              const n = o[e];
              if (void 0 === n[t.id]) continue;
              const i = n[t.id];
              for (const t in i) d(i[t].object), delete i[t];
              delete n[t.id];
            }
          },
          initAttributes: f,
          enableAttribute: m,
          disableUnusedAttributes: v,
        };
      }
      function $n(t, e, n, i) {
        const r = i.isWebGL2;
        let s;
        (this.setMode = function (t) {
          s = t;
        }),
          (this.render = function (e, i) {
            t.drawArrays(s, e, i), n.update(i, s, 1);
          }),
          (this.renderInstances = function (i, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) (l = t), (c = "drawArraysInstanced");
            else if (
              ((l = e.get("ANGLE_instanced_arrays")),
              (c = "drawArraysInstancedANGLE"),
              null === l)
            )
              return void console.error(
                "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            l[c](s, i, a, o), n.update(a, s, o);
          });
      }
      function ti(t, e, n) {
        let i;
        function r(e) {
          if ("highp" === e) {
            if (
              t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
              t.getShaderPrecisionFormat(35632, 36338).precision > 0
            )
              return "highp";
            e = "mediump";
          }
          return "mediump" === e &&
            t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
            t.getShaderPrecisionFormat(35632, 36337).precision > 0
            ? "mediump"
            : "lowp";
        }
        const s =
          ("undefined" !== typeof WebGL2RenderingContext &&
            t instanceof WebGL2RenderingContext) ||
          ("undefined" !== typeof WebGL2ComputeRenderingContext &&
            t instanceof WebGL2ComputeRenderingContext);
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a &&
          (console.warn(
            "THREE.WebGLRenderer:",
            a,
            "not supported, using",
            o,
            "instead."
          ),
          (a = o));
        const l = s || e.has("WEBGL_draw_buffers"),
          c = !0 === n.logarithmicDepthBuffer,
          h = t.getParameter(34930),
          u = t.getParameter(35660),
          d = t.getParameter(3379),
          p = t.getParameter(34076),
          f = t.getParameter(34921),
          m = t.getParameter(36347),
          g = t.getParameter(36348),
          v = t.getParameter(36349),
          x = u > 0,
          y = s || e.has("OES_texture_float");
        return {
          isWebGL2: s,
          drawBuffers: l,
          getMaxAnisotropy: function () {
            if (void 0 !== i) return i;
            if (!0 === e.has("EXT_texture_filter_anisotropic")) {
              const n = e.get("EXT_texture_filter_anisotropic");
              i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else i = 0;
            return i;
          },
          getMaxPrecision: r,
          precision: a,
          logarithmicDepthBuffer: c,
          maxTextures: h,
          maxVertexTextures: u,
          maxTextureSize: d,
          maxCubemapSize: p,
          maxAttributes: f,
          maxVertexUniforms: m,
          maxVaryings: g,
          maxFragmentUniforms: v,
          vertexTextures: x,
          floatFragmentTextures: y,
          floatVertexTextures: x && y,
          maxSamples: s ? t.getParameter(36183) : 0,
        };
      }
      function ei(t) {
        const e = this;
        let n = null,
          i = 0,
          r = !1,
          s = !1;
        const a = new Gn(),
          o = new st(),
          l = { value: null, needsUpdate: !1 };
        function c() {
          l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
            (e.numPlanes = i),
            (e.numIntersection = 0);
        }
        function h(t, n, i, r) {
          const s = null !== t ? t.length : 0;
          let c = null;
          if (0 !== s) {
            if (((c = l.value), !0 !== r || null === c)) {
              const e = i + 4 * s,
                r = n.matrixWorldInverse;
              o.getNormalMatrix(r),
                (null === c || c.length < e) && (c = new Float32Array(e));
              for (let n = 0, l = i; n !== s; ++n, l += 4)
                a.copy(t[n]).applyMatrix4(r, o),
                  a.normal.toArray(c, l),
                  (c[l + 3] = a.constant);
            }
            (l.value = c), (l.needsUpdate = !0);
          }
          return (e.numPlanes = s), (e.numIntersection = 0), c;
        }
        (this.uniform = l),
          (this.numPlanes = 0),
          (this.numIntersection = 0),
          (this.init = function (t, e, s) {
            const a = 0 !== t.length || e || 0 !== i || r;
            return (r = e), (n = h(t, s, 0)), (i = t.length), a;
          }),
          (this.beginShadows = function () {
            (s = !0), h(null);
          }),
          (this.endShadows = function () {
            (s = !1), c();
          }),
          (this.setState = function (e, a, o) {
            const u = e.clippingPlanes,
              d = e.clipIntersection,
              p = e.clipShadows,
              f = t.get(e);
            if (!r || null === u || 0 === u.length || (s && !p))
              s ? h(null) : c();
            else {
              const t = s ? 0 : i,
                e = 4 * t;
              let r = f.clippingState || null;
              (l.value = r), (r = h(u, a, e, o));
              for (let i = 0; i !== e; ++i) r[i] = n[i];
              (f.clippingState = r),
                (this.numIntersection = d ? this.numPlanes : 0),
                (this.numPlanes += t);
            }
          });
      }
      function ni(t) {
        let e = new WeakMap();
        function n(t, e) {
          return e === l ? (t.mapping = a) : e === c && (t.mapping = o), t;
        }
        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
          get: function (r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
              const s = r.mapping;
              if (s === l || s === c) {
                if (e.has(r)) {
                  return n(e.get(r).texture, r.mapping);
                }
                {
                  const s = r.image;
                  if (s && s.height > 0) {
                    const a = new Bn(s.height / 2);
                    return (
                      a.fromEquirectangularTexture(t, r),
                      e.set(r, a),
                      r.addEventListener("dispose", i),
                      n(a.texture, r.mapping)
                    );
                  }
                  return null;
                }
              }
            }
            return r;
          },
          dispose: function () {
            e = new WeakMap();
          },
        };
      }
      Zn.physical = {
        uniforms: Cn([
          Zn.standard.uniforms,
          {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatNormalScale: { value: new rt(1, 1) },
            clearcoatNormalMap: { value: null },
            sheen: { value: 0 },
            sheenColor: { value: new xt(0) },
            sheenColorMap: { value: null },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionSamplerSize: { value: new rt() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new xt(0) },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularColor: { value: new xt(1, 1, 1) },
            specularColorMap: { value: null },
          },
        ]),
        vertexShader: Jn.meshphysical_vert,
        fragmentShader: Jn.meshphysical_frag,
      };
      class ii extends Dn {
        constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
          super(),
            (this.type = "OrthographicCamera"),
            (this.zoom = 1),
            (this.view = null),
            (this.left = t),
            (this.right = e),
            (this.top = n),
            (this.bottom = i),
            (this.near = r),
            (this.far = s),
            this.updateProjectionMatrix();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            (this.left = t.left),
            (this.right = t.right),
            (this.top = t.top),
            (this.bottom = t.bottom),
            (this.near = t.near),
            (this.far = t.far),
            (this.zoom = t.zoom),
            (this.view = null === t.view ? null : Object.assign({}, t.view)),
            this
          );
        }
        setViewOffset(t, e, n, i, r, s) {
          null === this.view &&
            (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1,
            }),
            (this.view.enabled = !0),
            (this.view.fullWidth = t),
            (this.view.fullHeight = e),
            (this.view.offsetX = n),
            (this.view.offsetY = i),
            (this.view.width = r),
            (this.view.height = s),
            this.updateProjectionMatrix();
        }
        clearViewOffset() {
          null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom),
            e = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
          let r = n - t,
            s = n + t,
            a = i + e,
            o = i - e;
          if (null !== this.view && this.view.enabled) {
            const t =
                (this.right - this.left) / this.view.fullWidth / this.zoom,
              e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            (r += t * this.view.offsetX),
              (s = r + t * this.view.width),
              (a -= e * this.view.offsetY),
              (o = a - e * this.view.height);
          }
          this.projectionMatrix.makeOrthographic(
            r,
            s,
            a,
            o,
            this.near,
            this.far
          ),
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.zoom = this.zoom),
            (e.object.left = this.left),
            (e.object.right = this.right),
            (e.object.top = this.top),
            (e.object.bottom = this.bottom),
            (e.object.near = this.near),
            (e.object.far = this.far),
            null !== this.view &&
              (e.object.view = Object.assign({}, this.view)),
            e
          );
        }
      }
      ii.prototype.isOrthographicCamera = !0;
      const ri = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        si = 20,
        ai = new ii(),
        oi = new xt();
      let li = null;
      const ci = (1 + Math.sqrt(5)) / 2,
        hi = 1 / ci,
        ui = [
          new Lt(1, 1, 1),
          new Lt(-1, 1, 1),
          new Lt(1, 1, -1),
          new Lt(-1, 1, -1),
          new Lt(0, ci, hi),
          new Lt(0, ci, -hi),
          new Lt(hi, 0, ci),
          new Lt(-hi, 0, ci),
          new Lt(ci, hi, 0),
          new Lt(-ci, hi, 0),
        ];
      class di {
        constructor(t) {
          (this._renderer = t),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = 0.1, i = 100) {
          (li = this._renderer.getRenderTarget()), this._setSize(256);
          const r = this._allocateTargets();
          return (
            (r.depthBuffer = !0),
            this._sceneToCubeUV(t, n, i, r),
            e > 0 && this._blur(r, 0, 0, e),
            this._applyPMREM(r),
            this._cleanup(r),
            r
          );
        }
        fromEquirectangular(t, e = null) {
          return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
          return this._fromTexture(t, e);
        }
        compileCubemapShader() {
          null === this._cubemapMaterial &&
            ((this._cubemapMaterial = gi()),
            this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
          null === this._equirectMaterial &&
            ((this._equirectMaterial = mi()),
            this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(),
            null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
            null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t) {
          (this._lodMax = Math.floor(Math.log2(t))),
            (this._cubeSize = Math.pow(2, this._lodMax));
        }
        _dispose() {
          null !== this._blurMaterial && this._blurMaterial.dispose(),
            null !== this._pingPongRenderTarget &&
              this._pingPongRenderTarget.dispose();
          for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
          this._renderer.setRenderTarget(li),
            (t.scissorTest = !1),
            fi(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
          t.mapping === a || t.mapping === o
            ? this._setSize(
                0 === t.image.length
                  ? 16
                  : t.image[0].width || t.image[0].image.width
              )
            : this._setSize(t.image.width / 4),
            (li = this._renderer.getRenderTarget());
          const n = e || this._allocateTargets();
          return (
            this._textureToCubeUV(t, n),
            this._applyPMREM(n),
            this._cleanup(n),
            n
          );
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112),
            e = 4 * this._cubeSize - 32,
            n = {
              magFilter: v,
              minFilter: v,
              generateMipmaps: !1,
              type: w,
              format: E,
              encoding: H,
              depthBuffer: !1,
            },
            i = pi(t, e, n);
          if (
            null === this._pingPongRenderTarget ||
            this._pingPongRenderTarget.width !== t
          ) {
            null !== this._pingPongRenderTarget && this._dispose(),
              (this._pingPongRenderTarget = pi(t, e, n));
            const { _lodMax: i } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas,
            } = (function (t) {
              const e = [],
                n = [],
                i = [];
              let r = t;
              const s = t - 4 + 1 + ri.length;
              for (let a = 0; a < s; a++) {
                const s = Math.pow(2, r);
                n.push(s);
                let o = 1 / s;
                a > t - 4 ? (o = ri[a - t + 4 - 1]) : 0 === a && (o = 0),
                  i.push(o);
                const l = 1 / (s - 1),
                  c = -l / 2,
                  h = 1 + l / 2,
                  u = [c, c, h, c, h, h, c, c, h, h, c, h],
                  d = 6,
                  p = 6,
                  f = 3,
                  m = 2,
                  g = 1,
                  v = new Float32Array(f * p * d),
                  x = new Float32Array(m * p * d),
                  y = new Float32Array(g * p * d);
                for (let t = 0; t < d; t++) {
                  const e = ((t % 3) * 2) / 3 - 1,
                    n = t > 2 ? 0 : -1,
                    i = [
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n,
                      0,
                      e + 2 / 3,
                      n + 1,
                      0,
                      e,
                      n + 1,
                      0,
                    ];
                  v.set(i, f * p * t), x.set(u, m * p * t);
                  const r = [t, t, t, t, t, t];
                  y.set(r, g * p * t);
                }
                const _ = new on();
                _.setAttribute("position", new Ye(v, f)),
                  _.setAttribute("uv", new Ye(x, m)),
                  _.setAttribute("faceIndex", new Ye(y, g)),
                  e.push(_),
                  r > 4 && r--;
              }
              return { lodPlanes: e, sizeLods: n, sigmas: i };
            })(i)),
              (this._blurMaterial = (function (t, e, n) {
                const i = new Float32Array(si),
                  r = new Lt(0, 1, 0);
                return new Pn({
                  name: "SphericalGaussianBlur",
                  defines: {
                    n: si,
                    CUBEUV_TEXEL_WIDTH: 1 / e,
                    CUBEUV_TEXEL_HEIGHT: 1 / n,
                    CUBEUV_MAX_MIP: `${t}.0`,
                  },
                  uniforms: {
                    envMap: { value: null },
                    samples: { value: 1 },
                    weights: { value: i },
                    latitudinal: { value: !1 },
                    dTheta: { value: 0 },
                    mipInt: { value: 0 },
                    poleAxis: { value: r },
                  },
                  vertexShader: vi(),
                  fragmentShader:
                    "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                  blending: 0,
                  depthTest: !1,
                  depthWrite: !1,
                });
              })(i, t, e));
          }
          return i;
        }
        _compileMaterial(t) {
          const e = new En(this._lodPlanes[0], t);
          this._renderer.compile(e, ai);
        }
        _sceneToCubeUV(t, e, n, i) {
          const r = new In(90, 1, e, n),
            s = [1, -1, 1, 1, 1, 1],
            a = [1, 1, 1, -1, -1, -1],
            o = this._renderer,
            l = o.autoClear,
            c = o.toneMapping;
          o.getClearColor(oi), (o.toneMapping = 0), (o.autoClear = !1);
          const h = new qe({
              name: "PMREM.Background",
              side: 1,
              depthWrite: !1,
              depthTest: !1,
            }),
            u = new En(new An(), h);
          let d = !1;
          const p = t.background;
          p
            ? p.isColor && (h.color.copy(p), (t.background = null), (d = !0))
            : (h.color.copy(oi), (d = !0));
          for (let f = 0; f < 6; f++) {
            const e = f % 3;
            0 === e
              ? (r.up.set(0, s[f], 0), r.lookAt(a[f], 0, 0))
              : 1 === e
              ? (r.up.set(0, 0, s[f]), r.lookAt(0, a[f], 0))
              : (r.up.set(0, s[f], 0), r.lookAt(0, 0, a[f]));
            const n = this._cubeSize;
            fi(i, e * n, f > 2 ? n : 0, n, n),
              o.setRenderTarget(i),
              d && o.render(u, r),
              o.render(t, r);
          }
          u.geometry.dispose(),
            u.material.dispose(),
            (o.toneMapping = c),
            (o.autoClear = l),
            (t.background = p);
        }
        _textureToCubeUV(t, e) {
          const n = this._renderer,
            i = t.mapping === a || t.mapping === o;
          i
            ? (null === this._cubemapMaterial && (this._cubemapMaterial = gi()),
              (this._cubemapMaterial.uniforms.flipEnvMap.value =
                !1 === t.isRenderTargetTexture ? -1 : 1))
            : null === this._equirectMaterial &&
              (this._equirectMaterial = mi());
          const r = i ? this._cubemapMaterial : this._equirectMaterial,
            s = new En(this._lodPlanes[0], r);
          r.uniforms.envMap.value = t;
          const l = this._cubeSize;
          fi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(s, ai);
        }
        _applyPMREM(t) {
          const e = this._renderer,
            n = e.autoClear;
          e.autoClear = !1;
          for (let i = 1; i < this._lodPlanes.length; i++) {
            const e = Math.sqrt(
                this._sigmas[i] * this._sigmas[i] -
                  this._sigmas[i - 1] * this._sigmas[i - 1]
              ),
              n = ui[(i - 1) % ui.length];
            this._blur(t, i - 1, i, e, n);
          }
          e.autoClear = n;
        }
        _blur(t, e, n, i, r) {
          const s = this._pingPongRenderTarget;
          this._halfBlur(t, s, e, n, i, "latitudinal", r),
            this._halfBlur(s, t, n, n, i, "longitudinal", r);
        }
        _halfBlur(t, e, n, i, r, s, a) {
          const o = this._renderer,
            l = this._blurMaterial;
          "latitudinal" !== s &&
            "longitudinal" !== s &&
            console.error(
              "blur direction must be either latitudinal or longitudinal!"
            );
          const c = new En(this._lodPlanes[i], l),
            h = l.uniforms,
            u = this._sizeLods[n] - 1,
            d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
            p = r / d,
            f = isFinite(r) ? 1 + Math.floor(3 * p) : si;
          f > si &&
            console.warn(
              `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
            );
          const m = [];
          let g = 0;
          for (let y = 0; y < si; ++y) {
            const t = y / p,
              e = Math.exp((-t * t) / 2);
            m.push(e), 0 === y ? (g += e) : y < f && (g += 2 * e);
          }
          for (let y = 0; y < m.length; y++) m[y] = m[y] / g;
          (h.envMap.value = t.texture),
            (h.samples.value = f),
            (h.weights.value = m),
            (h.latitudinal.value = "latitudinal" === s),
            a && (h.poleAxis.value = a);
          const { _lodMax: v } = this;
          (h.dTheta.value = d), (h.mipInt.value = v - n);
          const x = this._sizeLods[i];
          fi(
            e,
            3 * x * (i > v - 4 ? i - v + 4 : 0),
            4 * (this._cubeSize - x),
            3 * x,
            2 * x
          ),
            o.setRenderTarget(e),
            o.render(c, ai);
        }
      }
      function pi(t, e, n) {
        const i = new Tt(t, e, n);
        return (
          (i.texture.mapping = h),
          (i.texture.name = "PMREM.cubeUv"),
          (i.scissorTest = !0),
          i
        );
      }
      function fi(t, e, n, i, r) {
        t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
      }
      function mi() {
        return new Pn({
          name: "EquirectangularToCubeUV",
          uniforms: { envMap: { value: null } },
          vertexShader: vi(),
          fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function gi() {
        return new Pn({
          name: "CubemapToCubeUV",
          uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
          vertexShader: vi(),
          fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        });
      }
      function vi() {
        return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
      }
      function xi(t) {
        let e = new WeakMap(),
          n = null;
        function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
          get: function (r) {
            if (r && r.isTexture) {
              const s = r.mapping,
                h = s === l || s === c,
                u = s === a || s === o;
              if (h || u) {
                if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                  r.needsPMREMUpdate = !1;
                  let i = e.get(r);
                  return (
                    null === n && (n = new di(t)),
                    (i = h ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
                    e.set(r, i),
                    i.texture
                  );
                }
                if (e.has(r)) return e.get(r).texture;
                {
                  const s = r.image;
                  if (
                    (h && s && s.height > 0) ||
                    (u &&
                      s &&
                      (function (t) {
                        let e = 0;
                        const n = 6;
                        for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                        return e === n;
                      })(s))
                  ) {
                    null === n && (n = new di(t));
                    const s = h ? n.fromEquirectangular(r) : n.fromCubemap(r);
                    return (
                      e.set(r, s), r.addEventListener("dispose", i), s.texture
                    );
                  }
                  return null;
                }
              }
            }
            return r;
          },
          dispose: function () {
            (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
          },
        };
      }
      function yi(t) {
        const e = {};
        function n(n) {
          if (void 0 !== e[n]) return e[n];
          let i;
          switch (n) {
            case "WEBGL_depth_texture":
              i =
                t.getExtension("WEBGL_depth_texture") ||
                t.getExtension("MOZ_WEBGL_depth_texture") ||
                t.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i =
                t.getExtension("EXT_texture_filter_anisotropic") ||
                t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
                t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i =
                t.getExtension("WEBGL_compressed_texture_s3tc") ||
                t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i =
                t.getExtension("WEBGL_compressed_texture_pvrtc") ||
                t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = t.getExtension(n);
          }
          return (e[n] = i), i;
        }
        return {
          has: function (t) {
            return null !== n(t);
          },
          init: function (t) {
            t.isWebGL2
              ? n("EXT_color_buffer_float")
              : (n("WEBGL_depth_texture"),
                n("OES_texture_float"),
                n("OES_texture_half_float"),
                n("OES_texture_half_float_linear"),
                n("OES_standard_derivatives"),
                n("OES_element_index_uint"),
                n("OES_vertex_array_object"),
                n("ANGLE_instanced_arrays")),
              n("OES_texture_float_linear"),
              n("EXT_color_buffer_half_float"),
              n("WEBGL_multisampled_render_to_texture");
          },
          get: function (t) {
            const e = n(t);
            return (
              null === e &&
                console.warn(
                  "THREE.WebGLRenderer: " + t + " extension not supported."
                ),
              e
            );
          },
        };
      }
      function _i(t, e, n, i) {
        const r = {},
          s = new WeakMap();
        function a(t) {
          const o = t.target;
          null !== o.index && e.remove(o.index);
          for (const n in o.attributes) e.remove(o.attributes[n]);
          o.removeEventListener("dispose", a), delete r[o.id];
          const l = s.get(o);
          l && (e.remove(l), s.delete(o)),
            i.releaseStatesOfGeometry(o),
            !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
            n.memory.geometries--;
        }
        function o(t) {
          const n = [],
            i = t.index,
            r = t.attributes.position;
          let a = 0;
          if (null !== i) {
            const t = i.array;
            a = i.version;
            for (let e = 0, i = t.length; e < i; e += 3) {
              const i = t[e + 0],
                r = t[e + 1],
                s = t[e + 2];
              n.push(i, r, r, s, s, i);
            }
          } else {
            const t = r.array;
            a = r.version;
            for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
              const t = e + 0,
                i = e + 1,
                r = e + 2;
              n.push(t, i, i, r, r, t);
            }
          }
          const o = new (at(n) ? Ke : Ze)(n, 1);
          o.version = a;
          const l = s.get(t);
          l && e.remove(l), s.set(t, o);
        }
        return {
          get: function (t, e) {
            return (
              !0 === r[e.id] ||
                (e.addEventListener("dispose", a),
                (r[e.id] = !0),
                n.memory.geometries++),
              e
            );
          },
          update: function (t) {
            const n = t.attributes;
            for (const r in n) e.update(n[r], 34962);
            const i = t.morphAttributes;
            for (const r in i) {
              const t = i[r];
              for (let n = 0, i = t.length; n < i; n++) e.update(t[n], 34962);
            }
          },
          getWireframeAttribute: function (t) {
            const e = s.get(t);
            if (e) {
              const n = t.index;
              null !== n && e.version < n.version && o(t);
            } else o(t);
            return s.get(t);
          },
        };
      }
      function Mi(t, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        (this.setMode = function (t) {
          s = t;
        }),
          (this.setIndex = function (t) {
            (a = t.type), (o = t.bytesPerElement);
          }),
          (this.render = function (e, i) {
            t.drawElements(s, i, a, e * o), n.update(i, s, 1);
          }),
          (this.renderInstances = function (i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) (h = t), (u = "drawElementsInstanced");
            else if (
              ((h = e.get("ANGLE_instanced_arrays")),
              (u = "drawElementsInstancedANGLE"),
              null === h)
            )
              return void console.error(
                "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
              );
            h[u](s, l, a, i * o, c), n.update(l, s, c);
          });
      }
      function bi(t) {
        const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
        return {
          memory: { geometries: 0, textures: 0 },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function () {
            e.frame++,
              (e.calls = 0),
              (e.triangles = 0),
              (e.points = 0),
              (e.lines = 0);
          },
          update: function (t, n, i) {
            switch ((e.calls++, n)) {
              case 4:
                e.triangles += i * (t / 3);
                break;
              case 1:
                e.lines += i * (t / 2);
                break;
              case 3:
                e.lines += i * (t - 1);
                break;
              case 2:
                e.lines += i * t;
                break;
              case 0:
                e.points += i * t;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", n);
            }
          },
        };
      }
      function wi(t, e) {
        return t[0] - e[0];
      }
      function Si(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1]);
      }
      function Ei(t, e) {
        let n = 1;
        const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
        i instanceof Int8Array
          ? (n = 127)
          : i instanceof Int16Array
          ? (n = 32767)
          : i instanceof Int32Array
          ? (n = 2147483647)
          : console.error(
              "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
              i
            ),
          t.divideScalar(n);
      }
      function Ti(t, e, n) {
        const i = {},
          r = new Float32Array(8),
          s = new WeakMap(),
          a = new Et(),
          o = [];
        for (let l = 0; l < 8; l++) o[l] = [l, 0];
        return {
          update: function (l, c, h, u) {
            const d = l.morphTargetInfluences;
            if (!0 === e.isWebGL2) {
              const p =
                  c.morphAttributes.position ||
                  c.morphAttributes.normal ||
                  c.morphAttributes.color,
                f = void 0 !== p ? p.length : 0;
              let m = s.get(c);
              if (void 0 === m || m.count !== f) {
                void 0 !== m && m.texture.dispose();
                const x = void 0 !== c.morphAttributes.position,
                  y = void 0 !== c.morphAttributes.normal,
                  _ = void 0 !== c.morphAttributes.color,
                  M = c.morphAttributes.position || [],
                  w = c.morphAttributes.normal || [],
                  S = c.morphAttributes.color || [];
                let E = 0;
                !0 === x && (E = 1), !0 === y && (E = 2), !0 === _ && (E = 3);
                let T = c.attributes.position.count * E,
                  A = 1;
                T > e.maxTextureSize &&
                  ((A = Math.ceil(T / e.maxTextureSize)),
                  (T = e.maxTextureSize));
                const R = new Float32Array(T * A * 4 * f),
                  C = new At(R, T, A, f);
                (C.type = b), (C.needsUpdate = !0);
                const L = 4 * E;
                for (let D = 0; D < f; D++) {
                  const I = M[D],
                    N = w[D],
                    O = S[D],
                    z = T * A * 4 * D;
                  for (let B = 0; B < I.count; B++) {
                    const U = B * L;
                    !0 === x &&
                      (a.fromBufferAttribute(I, B),
                      !0 === I.normalized && Ei(a, I),
                      (R[z + U + 0] = a.x),
                      (R[z + U + 1] = a.y),
                      (R[z + U + 2] = a.z),
                      (R[z + U + 3] = 0)),
                      !0 === y &&
                        (a.fromBufferAttribute(N, B),
                        !0 === N.normalized && Ei(a, N),
                        (R[z + U + 4] = a.x),
                        (R[z + U + 5] = a.y),
                        (R[z + U + 6] = a.z),
                        (R[z + U + 7] = 0)),
                      !0 === _ &&
                        (a.fromBufferAttribute(O, B),
                        !0 === O.normalized && Ei(a, O),
                        (R[z + U + 8] = a.x),
                        (R[z + U + 9] = a.y),
                        (R[z + U + 10] = a.z),
                        (R[z + U + 11] = 4 === O.itemSize ? a.w : 1));
                  }
                }
                function P() {
                  C.dispose(), s.delete(c), c.removeEventListener("dispose", P);
                }
                (m = { count: f, texture: C, size: new rt(T, A) }),
                  s.set(c, m),
                  c.addEventListener("dispose", P);
              }
              let g = 0;
              for (let H = 0; H < d.length; H++) g += d[H];
              const v = c.morphTargetsRelative ? 1 : 1 - g;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", v),
                u.getUniforms().setValue(t, "morphTargetInfluences", d),
                u
                  .getUniforms()
                  .setValue(t, "morphTargetsTexture", m.texture, n),
                u.getUniforms().setValue(t, "morphTargetsTextureSize", m.size);
            } else {
              const F = void 0 === d ? 0 : d.length;
              let G = i[c.id];
              if (void 0 === G || G.length !== F) {
                G = [];
                for (let q = 0; q < F; q++) G[q] = [q, 0];
                i[c.id] = G;
              }
              for (let X = 0; X < F; X++) {
                const J = G[X];
                (J[0] = X), (J[1] = d[X]);
              }
              G.sort(Si);
              for (let Y = 0; Y < 8; Y++)
                Y < F && G[Y][1]
                  ? ((o[Y][0] = G[Y][0]), (o[Y][1] = G[Y][1]))
                  : ((o[Y][0] = Number.MAX_SAFE_INTEGER), (o[Y][1] = 0));
              o.sort(wi);
              const V = c.morphAttributes.position,
                k = c.morphAttributes.normal;
              let W = 0;
              for (let Z = 0; Z < 8; Z++) {
                const K = o[Z],
                  Q = K[0],
                  $ = K[1];
                Q !== Number.MAX_SAFE_INTEGER && $
                  ? (V &&
                      c.getAttribute("morphTarget" + Z) !== V[Q] &&
                      c.setAttribute("morphTarget" + Z, V[Q]),
                    k &&
                      c.getAttribute("morphNormal" + Z) !== k[Q] &&
                      c.setAttribute("morphNormal" + Z, k[Q]),
                    (r[Z] = $),
                    (W += $))
                  : (V &&
                      !0 === c.hasAttribute("morphTarget" + Z) &&
                      c.deleteAttribute("morphTarget" + Z),
                    k &&
                      !0 === c.hasAttribute("morphNormal" + Z) &&
                      c.deleteAttribute("morphNormal" + Z),
                    (r[Z] = 0));
              }
              const j = c.morphTargetsRelative ? 1 : 1 - W;
              u.getUniforms().setValue(t, "morphTargetBaseInfluence", j),
                u.getUniforms().setValue(t, "morphTargetInfluences", r);
            }
          },
        };
      }
      function Ai(t, e, n, i) {
        let r = new WeakMap();
        function s(t) {
          const e = t.target;
          e.removeEventListener("dispose", s),
            n.remove(e.instanceMatrix),
            null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
          update: function (t) {
            const a = i.render.frame,
              o = t.geometry,
              l = e.get(t, o);
            return (
              r.get(l) !== a && (e.update(l), r.set(l, a)),
              t.isInstancedMesh &&
                (!1 === t.hasEventListener("dispose", s) &&
                  t.addEventListener("dispose", s),
                n.update(t.instanceMatrix, 34962),
                null !== t.instanceColor && n.update(t.instanceColor, 34962)),
              l
            );
          },
          dispose: function () {
            r = new WeakMap();
          },
        };
      }
      const Ri = new St(),
        Ci = new At(),
        Li = new Rt(),
        Pi = new zn(),
        Di = [],
        Ii = [],
        Ni = new Float32Array(16),
        Oi = new Float32Array(9),
        zi = new Float32Array(4);
      function Bi(t, e, n) {
        const i = t[0];
        if (i <= 0 || i > 0) return t;
        const r = e * n;
        let s = Di[r];
        if (
          (void 0 === s && ((s = new Float32Array(r)), (Di[r] = s)), 0 !== e)
        ) {
          i.toArray(s, 0);
          for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(s, r);
        }
        return s;
      }
      function Ui(t, e) {
        if (t.length !== e.length) return !1;
        for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function Hi(t, e) {
        for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
      }
      function Fi(t, e) {
        let n = Ii[e];
        void 0 === n && ((n = new Int32Array(e)), (Ii[e] = n));
        for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
        return n;
      }
      function Gi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
      }
      function Vi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y) ||
            (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
        else {
          if (Ui(n, e)) return;
          t.uniform2fv(this.addr, e), Hi(n, e);
        }
      }
      function ki(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
            (t.uniform3f(this.addr, e.x, e.y, e.z),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z));
        else if (void 0 !== e.r)
          (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
            (t.uniform3f(this.addr, e.r, e.g, e.b),
            (n[0] = e.r),
            (n[1] = e.g),
            (n[2] = e.b));
        else {
          if (Ui(n, e)) return;
          t.uniform3fv(this.addr, e), Hi(n, e);
        }
      }
      function Wi(t, e) {
        const n = this.cache;
        if (void 0 !== e.x)
          (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
            (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            (n[0] = e.x),
            (n[1] = e.y),
            (n[2] = e.z),
            (n[3] = e.w));
        else {
          if (Ui(n, e)) return;
          t.uniform4fv(this.addr, e), Hi(n, e);
        }
      }
      function ji(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ui(n, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), Hi(n, e);
        } else {
          if (Ui(n, i)) return;
          zi.set(i), t.uniformMatrix2fv(this.addr, !1, zi), Hi(n, i);
        }
      }
      function qi(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ui(n, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), Hi(n, e);
        } else {
          if (Ui(n, i)) return;
          Oi.set(i), t.uniformMatrix3fv(this.addr, !1, Oi), Hi(n, i);
        }
      }
      function Xi(t, e) {
        const n = this.cache,
          i = e.elements;
        if (void 0 === i) {
          if (Ui(n, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), Hi(n, e);
        } else {
          if (Ui(n, i)) return;
          Ni.set(i), t.uniformMatrix4fv(this.addr, !1, Ni), Hi(n, i);
        }
      }
      function Ji(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
      }
      function Yi(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform2iv(this.addr, e), Hi(n, e));
      }
      function Zi(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform3iv(this.addr, e), Hi(n, e));
      }
      function Ki(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform4iv(this.addr, e), Hi(n, e));
      }
      function Qi(t, e) {
        const n = this.cache;
        n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
      }
      function $i(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform2uiv(this.addr, e), Hi(n, e));
      }
      function tr(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform3uiv(this.addr, e), Hi(n, e));
      }
      function er(t, e) {
        const n = this.cache;
        Ui(n, e) || (t.uniform4uiv(this.addr, e), Hi(n, e));
      }
      function nr(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2D(e || Ri, r);
      }
      function ir(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture3D(e || Li, r);
      }
      function rr(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTextureCube(e || Pi, r);
      }
      function sr(t, e, n) {
        const i = this.cache,
          r = n.allocateTextureUnit();
        i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
          n.setTexture2DArray(e || Ci, r);
      }
      function ar(t, e) {
        t.uniform1fv(this.addr, e);
      }
      function or(t, e) {
        const n = Bi(e, this.size, 2);
        t.uniform2fv(this.addr, n);
      }
      function lr(t, e) {
        const n = Bi(e, this.size, 3);
        t.uniform3fv(this.addr, n);
      }
      function cr(t, e) {
        const n = Bi(e, this.size, 4);
        t.uniform4fv(this.addr, n);
      }
      function hr(t, e) {
        const n = Bi(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n);
      }
      function ur(t, e) {
        const n = Bi(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n);
      }
      function dr(t, e) {
        const n = Bi(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n);
      }
      function pr(t, e) {
        t.uniform1iv(this.addr, e);
      }
      function fr(t, e) {
        t.uniform2iv(this.addr, e);
      }
      function mr(t, e) {
        t.uniform3iv(this.addr, e);
      }
      function gr(t, e) {
        t.uniform4iv(this.addr, e);
      }
      function vr(t, e) {
        t.uniform1uiv(this.addr, e);
      }
      function xr(t, e) {
        t.uniform2uiv(this.addr, e);
      }
      function yr(t, e) {
        t.uniform3uiv(this.addr, e);
      }
      function _r(t, e) {
        t.uniform4uiv(this.addr, e);
      }
      function Mr(t, e, n) {
        const i = e.length,
          r = Fi(n, i);
        t.uniform1iv(this.addr, r);
        for (let s = 0; s !== i; ++s) n.setTexture2D(e[s] || Ri, r[s]);
      }
      function br(t, e, n) {
        const i = e.length,
          r = Fi(n, i);
        t.uniform1iv(this.addr, r);
        for (let s = 0; s !== i; ++s) n.setTexture3D(e[s] || Li, r[s]);
      }
      function wr(t, e, n) {
        const i = e.length,
          r = Fi(n, i);
        t.uniform1iv(this.addr, r);
        for (let s = 0; s !== i; ++s) n.setTextureCube(e[s] || Pi, r[s]);
      }
      function Sr(t, e, n) {
        const i = e.length,
          r = Fi(n, i);
        t.uniform1iv(this.addr, r);
        for (let s = 0; s !== i; ++s) n.setTexture2DArray(e[s] || Ci, r[s]);
      }
      function Er(t, e, n) {
        (this.id = t),
          (this.addr = n),
          (this.cache = []),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return Gi;
              case 35664:
                return Vi;
              case 35665:
                return ki;
              case 35666:
                return Wi;
              case 35674:
                return ji;
              case 35675:
                return qi;
              case 35676:
                return Xi;
              case 5124:
              case 35670:
                return Ji;
              case 35667:
              case 35671:
                return Yi;
              case 35668:
              case 35672:
                return Zi;
              case 35669:
              case 35673:
                return Ki;
              case 5125:
                return Qi;
              case 36294:
                return $i;
              case 36295:
                return tr;
              case 36296:
                return er;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return nr;
              case 35679:
              case 36299:
              case 36307:
                return ir;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return rr;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return sr;
            }
          })(e.type));
      }
      function Tr(t, e, n) {
        (this.id = t),
          (this.addr = n),
          (this.cache = []),
          (this.size = e.size),
          (this.setValue = (function (t) {
            switch (t) {
              case 5126:
                return ar;
              case 35664:
                return or;
              case 35665:
                return lr;
              case 35666:
                return cr;
              case 35674:
                return hr;
              case 35675:
                return ur;
              case 35676:
                return dr;
              case 5124:
              case 35670:
                return pr;
              case 35667:
              case 35671:
                return fr;
              case 35668:
              case 35672:
                return mr;
              case 35669:
              case 35673:
                return gr;
              case 5125:
                return vr;
              case 36294:
                return xr;
              case 36295:
                return yr;
              case 36296:
                return _r;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                return Mr;
              case 35679:
              case 36299:
              case 36307:
                return br;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                return wr;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                return Sr;
            }
          })(e.type));
      }
      function Ar(t) {
        (this.id = t), (this.seq = []), (this.map = {});
      }
      (Tr.prototype.updateCache = function (t) {
        const e = this.cache;
        t instanceof Float32Array &&
          e.length !== t.length &&
          (this.cache = new Float32Array(t.length)),
          Hi(e, t);
      }),
        (Ar.prototype.setValue = function (t, e, n) {
          const i = this.seq;
          for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(t, e[s.id], n);
          }
        });
      const Rr = /(\w+)(\])?(\[|\.)?/g;
      function Cr(t, e) {
        t.seq.push(e), (t.map[e.id] = e);
      }
      function Lr(t, e, n) {
        const i = t.name,
          r = i.length;
        for (Rr.lastIndex = 0; ; ) {
          const s = Rr.exec(i),
            a = Rr.lastIndex;
          let o = s[1];
          const l = "]" === s[2],
            c = s[3];
          if ((l && (o |= 0), void 0 === c || ("[" === c && a + 2 === r))) {
            Cr(n, void 0 === c ? new Er(o, t, e) : new Tr(o, t, e));
            break;
          }
          {
            let t = n.map[o];
            void 0 === t && ((t = new Ar(o)), Cr(n, t)), (n = t);
          }
        }
      }
      function Pr(t, e) {
        (this.seq = []), (this.map = {});
        const n = t.getProgramParameter(e, 35718);
        for (let i = 0; i < n; ++i) {
          const n = t.getActiveUniform(e, i);
          Lr(n, t.getUniformLocation(e, n.name), this);
        }
      }
      function Dr(t, e, n) {
        const i = t.createShader(e);
        return t.shaderSource(i, n), t.compileShader(i), i;
      }
      (Pr.prototype.setValue = function (t, e, n, i) {
        const r = this.map[e];
        void 0 !== r && r.setValue(t, n, i);
      }),
        (Pr.prototype.setOptional = function (t, e, n) {
          const i = e[n];
          void 0 !== i && this.setValue(t, n, i);
        }),
        (Pr.upload = function (t, e, n, i) {
          for (let r = 0, s = e.length; r !== s; ++r) {
            const s = e[r],
              a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(t, a.value, i);
          }
        }),
        (Pr.seqWithValue = function (t, e) {
          const n = [];
          for (let i = 0, r = t.length; i !== r; ++i) {
            const r = t[i];
            r.id in e && n.push(r);
          }
          return n;
        });
      let Ir = 0;
      function Nr(t, e, n) {
        const i = t.getShaderParameter(e, 35713),
          r = t.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        const s = parseInt(/ERROR: 0:(\d+)/.exec(r)[1]);
        return (
          n.toUpperCase() +
          "\n\n" +
          r +
          "\n\n" +
          (function (t, e) {
            const n = t.split("\n"),
              i = [],
              r = Math.max(e - 6, 0),
              s = Math.min(e + 6, n.length);
            for (let a = r; a < s; a++) i.push(a + 1 + ": " + n[a]);
            return i.join("\n");
          })(t.getShaderSource(e), s)
        );
      }
      function Or(t, e) {
        const n = (function (t) {
          switch (t) {
            case H:
              return ["Linear", "( value )"];
            case F:
              return ["sRGB", "( value )"];
            default:
              return (
                console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
                ["Linear", "( value )"]
              );
          }
        })(e);
        return (
          "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        );
      }
      function zr(t, e) {
        let n;
        switch (e) {
          case 1:
            n = "Linear";
            break;
          case 2:
            n = "Reinhard";
            break;
          case 3:
            n = "OptimizedCineon";
            break;
          case 4:
            n = "ACESFilmic";
            break;
          case 5:
            n = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
              (n = "Linear");
        }
        return (
          "vec3 " +
          t +
          "( vec3 color ) { return " +
          n +
          "ToneMapping( color ); }"
        );
      }
      function Br(t) {
        return "" !== t;
      }
      function Ur(t, e) {
        return t
          .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
          .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
          .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
          .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
          .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
          .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
          .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
          .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
      }
      function Hr(t, e) {
        return t
          .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
          .replace(
            /UNION_CLIPPING_PLANES/g,
            e.numClippingPlanes - e.numClipIntersection
          );
      }
      const Fr = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function Gr(t) {
        return t.replace(Fr, Vr);
      }
      function Vr(t, e) {
        const n = Jn[e];
        if (void 0 === n)
          throw new Error("Can not resolve #include <" + e + ">");
        return Gr(n);
      }
      const kr =
          /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
        Wr =
          /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
      function jr(t) {
        return t.replace(Wr, Xr).replace(kr, qr);
      }
      function qr(t, e, n, i) {
        return (
          console.warn(
            "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
          ),
          Xr(t, e, n, i)
        );
      }
      function Xr(t, e, n, i) {
        let r = "";
        for (let s = parseInt(e); s < parseInt(n); s++)
          r += i
            .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
            .replace(/UNROLLED_LOOP_INDEX/g, s);
        return r;
      }
      function Jr(t) {
        let e =
          "precision " +
          t.precision +
          " float;\nprecision " +
          t.precision +
          " int;";
        return (
          "highp" === t.precision
            ? (e += "\n#define HIGH_PRECISION")
            : "mediump" === t.precision
            ? (e += "\n#define MEDIUM_PRECISION")
            : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
          e
        );
      }
      function Yr(t, e, n, i) {
        const r = t.getContext(),
          s = n.defines;
        let l = n.vertexShader,
          c = n.fragmentShader;
        const u = (function (t) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return (
              1 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF")
                : 2 === t.shadowMapType
                ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
                : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"),
              e
            );
          })(n),
          d = (function (t) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t.envMap)
              switch (t.envMapMode) {
                case a:
                case o:
                  e = "ENVMAP_TYPE_CUBE";
                  break;
                case h:
                  e = "ENVMAP_TYPE_CUBE_UV";
              }
            return e;
          })(n),
          p = (function (t) {
            let e = "ENVMAP_MODE_REFLECTION";
            t.envMap && t.envMapMode === o && (e = "ENVMAP_MODE_REFRACTION");
            return e;
          })(n),
          f = (function (t) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t.envMap)
              switch (t.combine) {
                case 0:
                  e = "ENVMAP_BLENDING_MULTIPLY";
                  break;
                case 1:
                  e = "ENVMAP_BLENDING_MIX";
                  break;
                case 2:
                  e = "ENVMAP_BLENDING_ADD";
              }
            return e;
          })(n),
          m = (function (t) {
            const e = t.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e / 32 + 1) + 3,
              i = 1 / e;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
              texelHeight: i,
              maxMip: n,
            };
          })(n),
          g = n.isWebGL2
            ? ""
            : (function (t) {
                return [
                  t.extensionDerivatives ||
                  t.envMapCubeUVHeight ||
                  t.bumpMap ||
                  t.tangentSpaceNormalMap ||
                  t.clearcoatNormalMap ||
                  t.flatShading ||
                  "physical" === t.shaderID
                    ? "#extension GL_OES_standard_derivatives : enable"
                    : "",
                  (t.extensionFragDepth || t.logarithmicDepthBuffer) &&
                  t.rendererExtensionFragDepth
                    ? "#extension GL_EXT_frag_depth : enable"
                    : "",
                  t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
                    ? "#extension GL_EXT_draw_buffers : require"
                    : "",
                  (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
                  t.rendererExtensionShaderTextureLod
                    ? "#extension GL_EXT_shader_texture_lod : enable"
                    : "",
                ]
                  .filter(Br)
                  .join("\n");
              })(n),
          v = (function (t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
          })(s),
          x = r.createProgram();
        let y,
          _,
          M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
        n.isRawShaderMaterial
          ? ((y = [v].filter(Br).join("\n")),
            y.length > 0 && (y += "\n"),
            (_ = [g, v].filter(Br).join("\n")),
            _.length > 0 && (_ += "\n"))
          : ((y = [
              Jr(n),
              "#define SHADER_NAME " + n.shaderName,
              v,
              n.instancing ? "#define USE_INSTANCING" : "",
              n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
              n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
              "#define MAX_BONES " + n.maxBones,
              n.useFog && n.fog ? "#define USE_FOG" : "",
              n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
              n.map ? "#define USE_MAP" : "",
              n.envMap ? "#define USE_ENVMAP" : "",
              n.envMap ? "#define " + p : "",
              n.lightMap ? "#define USE_LIGHTMAP" : "",
              n.aoMap ? "#define USE_AOMAP" : "",
              n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              n.bumpMap ? "#define USE_BUMPMAP" : "",
              n.normalMap ? "#define USE_NORMALMAP" : "",
              n.normalMap && n.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              n.normalMap && n.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              n.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              n.displacementMap && n.supportsVertexTextures
                ? "#define USE_DISPLACEMENTMAP"
                : "",
              n.specularMap ? "#define USE_SPECULARMAP" : "",
              n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
              n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
              n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              n.metalnessMap ? "#define USE_METALNESSMAP" : "",
              n.alphaMap ? "#define USE_ALPHAMAP" : "",
              n.transmission ? "#define USE_TRANSMISSION" : "",
              n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
              n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
              n.vertexTangents ? "#define USE_TANGENT" : "",
              n.vertexColors ? "#define USE_COLOR" : "",
              n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              n.vertexUvs ? "#define USE_UV" : "",
              n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              n.flatShading ? "#define FLAT_SHADED" : "",
              n.skinning ? "#define USE_SKINNING" : "",
              n.useVertexTexture ? "#define BONE_TEXTURE" : "",
              n.morphTargets ? "#define USE_MORPHTARGETS" : "",
              n.morphNormals && !1 === n.flatShading
                ? "#define USE_MORPHNORMALS"
                : "",
              n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_TEXTURE"
                : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
                : "",
              n.morphTargetsCount > 0 && n.isWebGL2
                ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
                : "",
              n.doubleSided ? "#define DOUBLE_SIDED" : "",
              n.flipSided ? "#define FLIP_SIDED" : "",
              n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              n.shadowMapEnabled ? "#define " + u : "",
              n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
              n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              "uniform mat4 modelMatrix;",
              "uniform mat4 modelViewMatrix;",
              "uniform mat4 projectionMatrix;",
              "uniform mat4 viewMatrix;",
              "uniform mat3 normalMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              "#ifdef USE_INSTANCING",
              "\tattribute mat4 instanceMatrix;",
              "#endif",
              "#ifdef USE_INSTANCING_COLOR",
              "\tattribute vec3 instanceColor;",
              "#endif",
              "attribute vec3 position;",
              "attribute vec3 normal;",
              "attribute vec2 uv;",
              "#ifdef USE_TANGENT",
              "\tattribute vec4 tangent;",
              "#endif",
              "#if defined( USE_COLOR_ALPHA )",
              "\tattribute vec4 color;",
              "#elif defined( USE_COLOR )",
              "\tattribute vec3 color;",
              "#endif",
              "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
              "\tattribute vec3 morphTarget0;",
              "\tattribute vec3 morphTarget1;",
              "\tattribute vec3 morphTarget2;",
              "\tattribute vec3 morphTarget3;",
              "\t#ifdef USE_MORPHNORMALS",
              "\t\tattribute vec3 morphNormal0;",
              "\t\tattribute vec3 morphNormal1;",
              "\t\tattribute vec3 morphNormal2;",
              "\t\tattribute vec3 morphNormal3;",
              "\t#else",
              "\t\tattribute vec3 morphTarget4;",
              "\t\tattribute vec3 morphTarget5;",
              "\t\tattribute vec3 morphTarget6;",
              "\t\tattribute vec3 morphTarget7;",
              "\t#endif",
              "#endif",
              "#ifdef USE_SKINNING",
              "\tattribute vec4 skinIndex;",
              "\tattribute vec4 skinWeight;",
              "#endif",
              "\n",
            ]
              .filter(Br)
              .join("\n")),
            (_ = [
              g,
              Jr(n),
              "#define SHADER_NAME " + n.shaderName,
              v,
              n.useFog && n.fog ? "#define USE_FOG" : "",
              n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
              n.map ? "#define USE_MAP" : "",
              n.matcap ? "#define USE_MATCAP" : "",
              n.envMap ? "#define USE_ENVMAP" : "",
              n.envMap ? "#define " + d : "",
              n.envMap ? "#define " + p : "",
              n.envMap ? "#define " + f : "",
              m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
              m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
              m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
              n.lightMap ? "#define USE_LIGHTMAP" : "",
              n.aoMap ? "#define USE_AOMAP" : "",
              n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
              n.bumpMap ? "#define USE_BUMPMAP" : "",
              n.normalMap ? "#define USE_NORMALMAP" : "",
              n.normalMap && n.objectSpaceNormalMap
                ? "#define OBJECTSPACE_NORMALMAP"
                : "",
              n.normalMap && n.tangentSpaceNormalMap
                ? "#define TANGENTSPACE_NORMALMAP"
                : "",
              n.clearcoat ? "#define USE_CLEARCOAT" : "",
              n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
              n.clearcoatRoughnessMap
                ? "#define USE_CLEARCOAT_ROUGHNESSMAP"
                : "",
              n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
              n.specularMap ? "#define USE_SPECULARMAP" : "",
              n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
              n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
              n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
              n.metalnessMap ? "#define USE_METALNESSMAP" : "",
              n.alphaMap ? "#define USE_ALPHAMAP" : "",
              n.alphaTest ? "#define USE_ALPHATEST" : "",
              n.sheen ? "#define USE_SHEEN" : "",
              n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
              n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
              n.transmission ? "#define USE_TRANSMISSION" : "",
              n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
              n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
              n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
              n.vertexTangents ? "#define USE_TANGENT" : "",
              n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
              n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
              n.vertexUvs ? "#define USE_UV" : "",
              n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
              n.gradientMap ? "#define USE_GRADIENTMAP" : "",
              n.flatShading ? "#define FLAT_SHADED" : "",
              n.doubleSided ? "#define DOUBLE_SIDED" : "",
              n.flipSided ? "#define FLIP_SIDED" : "",
              n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              n.shadowMapEnabled ? "#define " + u : "",
              n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
              n.physicallyCorrectLights
                ? "#define PHYSICALLY_CORRECT_LIGHTS"
                : "",
              n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
                ? "#define USE_LOGDEPTHBUF_EXT"
                : "",
              "uniform mat4 viewMatrix;",
              "uniform vec3 cameraPosition;",
              "uniform bool isOrthographic;",
              0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
              0 !== n.toneMapping ? Jn.tonemapping_pars_fragment : "",
              0 !== n.toneMapping ? zr("toneMapping", n.toneMapping) : "",
              n.dithering ? "#define DITHERING" : "",
              n.opaque ? "#define OPAQUE" : "",
              Jn.encodings_pars_fragment,
              Or("linearToOutputTexel", n.outputEncoding),
              n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
              "\n",
            ]
              .filter(Br)
              .join("\n"))),
          (l = Gr(l)),
          (l = Ur(l, n)),
          (l = Hr(l, n)),
          (c = Gr(c)),
          (c = Ur(c, n)),
          (c = Hr(c, n)),
          (l = jr(l)),
          (c = jr(c)),
          n.isWebGL2 &&
            !0 !== n.isRawShaderMaterial &&
            ((M = "#version 300 es\n"),
            (y =
              [
                "precision mediump sampler2DArray;",
                "#define attribute in",
                "#define varying out",
                "#define texture2D texture",
              ].join("\n") +
              "\n" +
              y),
            (_ =
              [
                "#define varying in",
                n.glslVersion === q
                  ? ""
                  : "layout(location = 0) out highp vec4 pc_fragColor;",
                n.glslVersion === q ? "" : "#define gl_FragColor pc_fragColor",
                "#define gl_FragDepthEXT gl_FragDepth",
                "#define texture2D texture",
                "#define textureCube texture",
                "#define texture2DProj textureProj",
                "#define texture2DLodEXT textureLod",
                "#define texture2DProjLodEXT textureProjLod",
                "#define textureCubeLodEXT textureLod",
                "#define texture2DGradEXT textureGrad",
                "#define texture2DProjGradEXT textureProjGrad",
                "#define textureCubeGradEXT textureGrad",
              ].join("\n") +
              "\n" +
              _));
        const b = M + _ + c,
          w = Dr(r, 35633, M + y + l),
          S = Dr(r, 35632, b);
        if (
          (r.attachShader(x, w),
          r.attachShader(x, S),
          void 0 !== n.index0AttributeName
            ? r.bindAttribLocation(x, 0, n.index0AttributeName)
            : !0 === n.morphTargets && r.bindAttribLocation(x, 0, "position"),
          r.linkProgram(x),
          t.debug.checkShaderErrors)
        ) {
          const t = r.getProgramInfoLog(x).trim(),
            e = r.getShaderInfoLog(w).trim(),
            n = r.getShaderInfoLog(S).trim();
          let i = !0,
            s = !0;
          if (!1 === r.getProgramParameter(x, 35714)) {
            i = !1;
            const e = Nr(r, w, "vertex"),
              n = Nr(r, S, "fragment");
            console.error(
              "THREE.WebGLProgram: Shader Error " +
                r.getError() +
                " - VALIDATE_STATUS " +
                r.getProgramParameter(x, 35715) +
                "\n\nProgram Info Log: " +
                t +
                "\n" +
                e +
                "\n" +
                n
            );
          } else
            "" !== t
              ? console.warn("THREE.WebGLProgram: Program Info Log:", t)
              : ("" !== e && "" !== n) || (s = !1);
          s &&
            (this.diagnostics = {
              runnable: i,
              programLog: t,
              vertexShader: { log: e, prefix: y },
              fragmentShader: { log: n, prefix: _ },
            });
        }
        let E, T;
        return (
          r.deleteShader(w),
          r.deleteShader(S),
          (this.getUniforms = function () {
            return void 0 === E && (E = new Pr(r, x)), E;
          }),
          (this.getAttributes = function () {
            return (
              void 0 === T &&
                (T = (function (t, e) {
                  const n = {},
                    i = t.getProgramParameter(e, 35721);
                  for (let r = 0; r < i; r++) {
                    const i = t.getActiveAttrib(e, r),
                      s = i.name;
                    let a = 1;
                    35674 === i.type && (a = 2),
                      35675 === i.type && (a = 3),
                      35676 === i.type && (a = 4),
                      (n[s] = {
                        type: i.type,
                        location: t.getAttribLocation(e, s),
                        locationSize: a,
                      });
                  }
                  return n;
                })(r, x)),
              T
            );
          }),
          (this.destroy = function () {
            i.releaseStatesOfProgram(this),
              r.deleteProgram(x),
              (this.program = void 0);
          }),
          (this.name = n.shaderName),
          (this.id = Ir++),
          (this.cacheKey = e),
          (this.usedTimes = 1),
          (this.program = x),
          (this.vertexShader = w),
          (this.fragmentShader = S),
          this
        );
      }
      let Zr = 0;
      class Kr {
        constructor() {
          (this.shaderCache = new Map()), (this.materialCache = new Map());
        }
        update(t) {
          const e = t.vertexShader,
            n = t.fragmentShader,
            i = this._getShaderStage(e),
            r = this._getShaderStage(n),
            s = this._getShaderCacheForMaterial(t);
          return (
            !1 === s.has(i) && (s.add(i), i.usedTimes++),
            !1 === s.has(r) && (s.add(r), r.usedTimes++),
            this
          );
        }
        remove(t) {
          const e = this.materialCache.get(t);
          for (const n of e)
            n.usedTimes--, 0 === n.usedTimes && this.shaderCache.delete(n.code);
          return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
          return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
          return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
          const e = this.materialCache;
          return !1 === e.has(t) && e.set(t, new Set()), e.get(t);
        }
        _getShaderStage(t) {
          const e = this.shaderCache;
          if (!1 === e.has(t)) {
            const n = new Qr(t);
            e.set(t, n);
          }
          return e.get(t);
        }
      }
      class Qr {
        constructor(t) {
          (this.id = Zr++), (this.code = t), (this.usedTimes = 0);
        }
      }
      function $r(t, e, n, i, s, a, o) {
        const l = new xe(),
          c = new Kr(),
          u = [],
          d = s.isWebGL2,
          p = s.logarithmicDepthBuffer,
          f = s.floatVertexTextures,
          m = s.maxVertexUniforms,
          g = s.vertexTextures;
        let v = s.precision;
        const x = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite",
        };
        return {
          getParameters: function (a, l, u, y, _) {
            const M = y.fog,
              b = _.geometry,
              w = a.isMeshStandardMaterial ? y.environment : null,
              S = (a.isMeshStandardMaterial ? n : e).get(a.envMap || w),
              E = S && S.mapping === h ? S.image.height : null,
              T = x[a.type],
              A = _.isSkinnedMesh
                ? (function (t) {
                    const e = t.skeleton.bones;
                    if (f) return 1024;
                    {
                      const t = m,
                        n = Math.floor((t - 20) / 4),
                        i = Math.min(n, e.length);
                      return i < e.length
                        ? (console.warn(
                            "THREE.WebGLRenderer: Skeleton has " +
                              e.length +
                              " bones. This GPU supports " +
                              i +
                              "."
                          ),
                          0)
                        : i;
                    }
                  })(_)
                : 0;
            null !== a.precision &&
              ((v = s.getMaxPrecision(a.precision)),
              v !== a.precision &&
                console.warn(
                  "THREE.WebGLProgram.getParameters:",
                  a.precision,
                  "not supported, using",
                  v,
                  "instead."
                ));
            const R =
                b.morphAttributes.position ||
                b.morphAttributes.normal ||
                b.morphAttributes.color,
              C = void 0 !== R ? R.length : 0;
            let L,
              P,
              D,
              I,
              N = 0;
            if (
              (void 0 !== b.morphAttributes.position && (N = 1),
              void 0 !== b.morphAttributes.normal && (N = 2),
              void 0 !== b.morphAttributes.color && (N = 3),
              T)
            ) {
              const t = Zn[T];
              (L = t.vertexShader), (P = t.fragmentShader);
            } else
              (L = a.vertexShader),
                (P = a.fragmentShader),
                c.update(a),
                (D = c.getVertexShaderID(a)),
                (I = c.getFragmentShaderID(a));
            const O = t.getRenderTarget(),
              z = a.alphaTest > 0,
              B = a.clearcoat > 0;
            return {
              isWebGL2: d,
              shaderID: T,
              shaderName: a.type,
              vertexShader: L,
              fragmentShader: P,
              defines: a.defines,
              customVertexShaderID: D,
              customFragmentShaderID: I,
              isRawShaderMaterial: !0 === a.isRawShaderMaterial,
              glslVersion: a.glslVersion,
              precision: v,
              instancing: !0 === _.isInstancedMesh,
              instancingColor:
                !0 === _.isInstancedMesh && null !== _.instanceColor,
              supportsVertexTextures: g,
              outputEncoding:
                null === O
                  ? t.outputEncoding
                  : !0 === O.isXRRenderTarget
                  ? O.texture.encoding
                  : H,
              map: !!a.map,
              matcap: !!a.matcap,
              envMap: !!S,
              envMapMode: S && S.mapping,
              envMapCubeUVHeight: E,
              lightMap: !!a.lightMap,
              aoMap: !!a.aoMap,
              emissiveMap: !!a.emissiveMap,
              bumpMap: !!a.bumpMap,
              normalMap: !!a.normalMap,
              objectSpaceNormalMap: 1 === a.normalMapType,
              tangentSpaceNormalMap: 0 === a.normalMapType,
              decodeVideoTexture:
                !!a.map && !0 === a.map.isVideoTexture && a.map.encoding === F,
              clearcoat: B,
              clearcoatMap: B && !!a.clearcoatMap,
              clearcoatRoughnessMap: B && !!a.clearcoatRoughnessMap,
              clearcoatNormalMap: B && !!a.clearcoatNormalMap,
              displacementMap: !!a.displacementMap,
              roughnessMap: !!a.roughnessMap,
              metalnessMap: !!a.metalnessMap,
              specularMap: !!a.specularMap,
              specularIntensityMap: !!a.specularIntensityMap,
              specularColorMap: !!a.specularColorMap,
              opaque: !1 === a.transparent && 1 === a.blending,
              alphaMap: !!a.alphaMap,
              alphaTest: z,
              gradientMap: !!a.gradientMap,
              sheen: a.sheen > 0,
              sheenColorMap: !!a.sheenColorMap,
              sheenRoughnessMap: !!a.sheenRoughnessMap,
              transmission: a.transmission > 0,
              transmissionMap: !!a.transmissionMap,
              thicknessMap: !!a.thicknessMap,
              combine: a.combine,
              vertexTangents: !!a.normalMap && !!b.attributes.tangent,
              vertexColors: a.vertexColors,
              vertexAlphas:
                !0 === a.vertexColors &&
                !!b.attributes.color &&
                4 === b.attributes.color.itemSize,
              vertexUvs:
                !!a.map ||
                !!a.bumpMap ||
                !!a.normalMap ||
                !!a.specularMap ||
                !!a.alphaMap ||
                !!a.emissiveMap ||
                !!a.roughnessMap ||
                !!a.metalnessMap ||
                !!a.clearcoatMap ||
                !!a.clearcoatRoughnessMap ||
                !!a.clearcoatNormalMap ||
                !!a.displacementMap ||
                !!a.transmissionMap ||
                !!a.thicknessMap ||
                !!a.specularIntensityMap ||
                !!a.specularColorMap ||
                !!a.sheenColorMap ||
                !!a.sheenRoughnessMap,
              uvsVertexOnly:
                !(
                  a.map ||
                  a.bumpMap ||
                  a.normalMap ||
                  a.specularMap ||
                  a.alphaMap ||
                  a.emissiveMap ||
                  a.roughnessMap ||
                  a.metalnessMap ||
                  a.clearcoatNormalMap ||
                  a.transmission > 0 ||
                  a.transmissionMap ||
                  a.thicknessMap ||
                  a.specularIntensityMap ||
                  a.specularColorMap ||
                  a.sheen > 0 ||
                  a.sheenColorMap ||
                  a.sheenRoughnessMap
                ) && !!a.displacementMap,
              fog: !!M,
              useFog: a.fog,
              fogExp2: M && M.isFogExp2,
              flatShading: !!a.flatShading,
              sizeAttenuation: a.sizeAttenuation,
              logarithmicDepthBuffer: p,
              skinning: !0 === _.isSkinnedMesh && A > 0,
              maxBones: A,
              useVertexTexture: f,
              morphTargets: void 0 !== b.morphAttributes.position,
              morphNormals: void 0 !== b.morphAttributes.normal,
              morphColors: void 0 !== b.morphAttributes.color,
              morphTargetsCount: C,
              morphTextureStride: N,
              numDirLights: l.directional.length,
              numPointLights: l.point.length,
              numSpotLights: l.spot.length,
              numRectAreaLights: l.rectArea.length,
              numHemiLights: l.hemi.length,
              numDirLightShadows: l.directionalShadowMap.length,
              numPointLightShadows: l.pointShadowMap.length,
              numSpotLightShadows: l.spotShadowMap.length,
              numClippingPlanes: o.numPlanes,
              numClipIntersection: o.numIntersection,
              dithering: a.dithering,
              shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
              shadowMapType: t.shadowMap.type,
              toneMapping: a.toneMapped ? t.toneMapping : 0,
              physicallyCorrectLights: t.physicallyCorrectLights,
              premultipliedAlpha: a.premultipliedAlpha,
              doubleSided: a.side === r,
              flipSided: 1 === a.side,
              depthPacking: void 0 !== a.depthPacking && a.depthPacking,
              index0AttributeName: a.index0AttributeName,
              extensionDerivatives: a.extensions && a.extensions.derivatives,
              extensionFragDepth: a.extensions && a.extensions.fragDepth,
              extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
              extensionShaderTextureLOD:
                a.extensions && a.extensions.shaderTextureLOD,
              rendererExtensionFragDepth: d || i.has("EXT_frag_depth"),
              rendererExtensionDrawBuffers: d || i.has("WEBGL_draw_buffers"),
              rendererExtensionShaderTextureLod:
                d || i.has("EXT_shader_texture_lod"),
              customProgramCacheKey: a.customProgramCacheKey(),
            };
          },
          getProgramCacheKey: function (e) {
            const n = [];
            if (
              (e.shaderID
                ? n.push(e.shaderID)
                : (n.push(e.customVertexShaderID),
                  n.push(e.customFragmentShaderID)),
              void 0 !== e.defines)
            )
              for (const t in e.defines) n.push(t), n.push(e.defines[t]);
            return (
              !1 === e.isRawShaderMaterial &&
                (!(function (t, e) {
                  t.push(e.precision),
                    t.push(e.outputEncoding),
                    t.push(e.envMapMode),
                    t.push(e.envMapCubeUVHeight),
                    t.push(e.combine),
                    t.push(e.vertexUvs),
                    t.push(e.fogExp2),
                    t.push(e.sizeAttenuation),
                    t.push(e.maxBones),
                    t.push(e.morphTargetsCount),
                    t.push(e.morphAttributeCount),
                    t.push(e.numDirLights),
                    t.push(e.numPointLights),
                    t.push(e.numSpotLights),
                    t.push(e.numHemiLights),
                    t.push(e.numRectAreaLights),
                    t.push(e.numDirLightShadows),
                    t.push(e.numPointLightShadows),
                    t.push(e.numSpotLightShadows),
                    t.push(e.shadowMapType),
                    t.push(e.toneMapping),
                    t.push(e.numClippingPlanes),
                    t.push(e.numClipIntersection);
                })(n, e),
                (function (t, e) {
                  l.disableAll(), e.isWebGL2 && l.enable(0);
                  e.supportsVertexTextures && l.enable(1);
                  e.instancing && l.enable(2);
                  e.instancingColor && l.enable(3);
                  e.map && l.enable(4);
                  e.matcap && l.enable(5);
                  e.envMap && l.enable(6);
                  e.lightMap && l.enable(7);
                  e.aoMap && l.enable(8);
                  e.emissiveMap && l.enable(9);
                  e.bumpMap && l.enable(10);
                  e.normalMap && l.enable(11);
                  e.objectSpaceNormalMap && l.enable(12);
                  e.tangentSpaceNormalMap && l.enable(13);
                  e.clearcoat && l.enable(14);
                  e.clearcoatMap && l.enable(15);
                  e.clearcoatRoughnessMap && l.enable(16);
                  e.clearcoatNormalMap && l.enable(17);
                  e.displacementMap && l.enable(18);
                  e.specularMap && l.enable(19);
                  e.roughnessMap && l.enable(20);
                  e.metalnessMap && l.enable(21);
                  e.gradientMap && l.enable(22);
                  e.alphaMap && l.enable(23);
                  e.alphaTest && l.enable(24);
                  e.vertexColors && l.enable(25);
                  e.vertexAlphas && l.enable(26);
                  e.vertexUvs && l.enable(27);
                  e.vertexTangents && l.enable(28);
                  e.uvsVertexOnly && l.enable(29);
                  e.fog && l.enable(30);
                  t.push(l.mask), l.disableAll(), e.useFog && l.enable(0);
                  e.flatShading && l.enable(1);
                  e.logarithmicDepthBuffer && l.enable(2);
                  e.skinning && l.enable(3);
                  e.useVertexTexture && l.enable(4);
                  e.morphTargets && l.enable(5);
                  e.morphNormals && l.enable(6);
                  e.morphColors && l.enable(7);
                  e.premultipliedAlpha && l.enable(8);
                  e.shadowMapEnabled && l.enable(9);
                  e.physicallyCorrectLights && l.enable(10);
                  e.doubleSided && l.enable(11);
                  e.flipSided && l.enable(12);
                  e.depthPacking && l.enable(13);
                  e.dithering && l.enable(14);
                  e.specularIntensityMap && l.enable(15);
                  e.specularColorMap && l.enable(16);
                  e.transmission && l.enable(17);
                  e.transmissionMap && l.enable(18);
                  e.thicknessMap && l.enable(19);
                  e.sheen && l.enable(20);
                  e.sheenColorMap && l.enable(21);
                  e.sheenRoughnessMap && l.enable(22);
                  e.decodeVideoTexture && l.enable(23);
                  e.opaque && l.enable(24);
                  t.push(l.mask);
                })(n, e),
                n.push(t.outputEncoding)),
              n.push(e.customProgramCacheKey),
              n.join()
            );
          },
          getUniforms: function (t) {
            const e = x[t.type];
            let n;
            if (e) {
              const t = Zn[e];
              n = Ln.clone(t.uniforms);
            } else n = t.uniforms;
            return n;
          },
          acquireProgram: function (e, n) {
            let i;
            for (let t = 0, r = u.length; t < r; t++) {
              const e = u[t];
              if (e.cacheKey === n) {
                (i = e), ++i.usedTimes;
                break;
              }
            }
            return void 0 === i && ((i = new Yr(t, n, e, a)), u.push(i)), i;
          },
          releaseProgram: function (t) {
            if (0 === --t.usedTimes) {
              const e = u.indexOf(t);
              (u[e] = u[u.length - 1]), u.pop(), t.destroy();
            }
          },
          releaseShaderCache: function (t) {
            c.remove(t);
          },
          programs: u,
          dispose: function () {
            c.dispose();
          },
        };
      }
      function ts() {
        let t = new WeakMap();
        return {
          get: function (e) {
            let n = t.get(e);
            return void 0 === n && ((n = {}), t.set(e, n)), n;
          },
          remove: function (e) {
            t.delete(e);
          },
          update: function (e, n, i) {
            t.get(e)[n] = i;
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function es(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.material.id !== e.material.id
          ? t.material.id - e.material.id
          : t.z !== e.z
          ? t.z - e.z
          : t.id - e.id;
      }
      function ns(t, e) {
        return t.groupOrder !== e.groupOrder
          ? t.groupOrder - e.groupOrder
          : t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.z !== e.z
          ? e.z - t.z
          : t.id - e.id;
      }
      function is() {
        const t = [];
        let e = 0;
        const n = [],
          i = [],
          r = [];
        function s(n, i, r, s, a, o) {
          let l = t[e];
          return (
            void 0 === l
              ? ((l = {
                  id: n.id,
                  object: n,
                  geometry: i,
                  material: r,
                  groupOrder: s,
                  renderOrder: n.renderOrder,
                  z: a,
                  group: o,
                }),
                (t[e] = l))
              : ((l.id = n.id),
                (l.object = n),
                (l.geometry = i),
                (l.material = r),
                (l.groupOrder = s),
                (l.renderOrder = n.renderOrder),
                (l.z = a),
                (l.group = o)),
            e++,
            l
          );
        }
        return {
          opaque: n,
          transmissive: i,
          transparent: r,
          init: function () {
            (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
          },
          push: function (t, e, a, o, l, c) {
            const h = s(t, e, a, o, l, c);
            a.transmission > 0
              ? i.push(h)
              : !0 === a.transparent
              ? r.push(h)
              : n.push(h);
          },
          unshift: function (t, e, a, o, l, c) {
            const h = s(t, e, a, o, l, c);
            a.transmission > 0
              ? i.unshift(h)
              : !0 === a.transparent
              ? r.unshift(h)
              : n.unshift(h);
          },
          finish: function () {
            for (let n = e, i = t.length; n < i; n++) {
              const e = t[n];
              if (null === e.id) break;
              (e.id = null),
                (e.object = null),
                (e.geometry = null),
                (e.material = null),
                (e.group = null);
            }
          },
          sort: function (t, e) {
            n.length > 1 && n.sort(t || es),
              i.length > 1 && i.sort(e || ns),
              r.length > 1 && r.sort(e || ns);
          },
        };
      }
      function rs() {
        let t = new WeakMap();
        return {
          get: function (e, n) {
            let i;
            return (
              !1 === t.has(e)
                ? ((i = new is()), t.set(e, [i]))
                : n >= t.get(e).length
                ? ((i = new is()), t.get(e).push(i))
                : (i = t.get(e)[n]),
              i
            );
          },
          dispose: function () {
            t = new WeakMap();
          },
        };
      }
      function ss() {
        const t = {};
        return {
          get: function (e) {
            if (void 0 !== t[e.id]) return t[e.id];
            let n;
            switch (e.type) {
              case "DirectionalLight":
                n = { direction: new Lt(), color: new xt() };
                break;
              case "SpotLight":
                n = {
                  position: new Lt(),
                  direction: new Lt(),
                  color: new xt(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0,
                };
                break;
              case "PointLight":
                n = {
                  position: new Lt(),
                  color: new xt(),
                  distance: 0,
                  decay: 0,
                };
                break;
              case "HemisphereLight":
                n = {
                  direction: new Lt(),
                  skyColor: new xt(),
                  groundColor: new xt(),
                };
                break;
              case "RectAreaLight":
                n = {
                  color: new xt(),
                  position: new Lt(),
                  halfWidth: new Lt(),
                  halfHeight: new Lt(),
                };
            }
            return (t[e.id] = n), n;
          },
        };
      }
      let as = 0;
      function os(t, e) {
        return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
      }
      function ls(t, e) {
        const n = new ss(),
          i = (function () {
            const t = {};
            return {
              get: function (e) {
                if (void 0 !== t[e.id]) return t[e.id];
                let n;
                switch (e.type) {
                  case "DirectionalLight":
                  case "SpotLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new rt(),
                    };
                    break;
                  case "PointLight":
                    n = {
                      shadowBias: 0,
                      shadowNormalBias: 0,
                      shadowRadius: 1,
                      shadowMapSize: new rt(),
                      shadowCameraNear: 1,
                      shadowCameraFar: 1e3,
                    };
                }
                return (t[e.id] = n), n;
              },
            };
          })(),
          r = {
            version: 0,
            hash: {
              directionalLength: -1,
              pointLength: -1,
              spotLength: -1,
              rectAreaLength: -1,
              hemiLength: -1,
              numDirectionalShadows: -1,
              numPointShadows: -1,
              numSpotShadows: -1,
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
          };
        for (let l = 0; l < 9; l++) r.probe.push(new Lt());
        const s = new Lt(),
          a = new oe(),
          o = new oe();
        return {
          setup: function (s, a) {
            let o = 0,
              l = 0,
              c = 0;
            for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
            let h = 0,
              u = 0,
              d = 0,
              p = 0,
              f = 0,
              m = 0,
              g = 0,
              v = 0;
            s.sort(os);
            const x = !0 !== a ? Math.PI : 1;
            for (let t = 0, e = s.length; t < e; t++) {
              const e = s[t],
                a = e.color,
                y = e.intensity,
                _ = e.distance,
                M = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
              if (e.isAmbientLight)
                (o += a.r * y * x), (l += a.g * y * x), (c += a.b * y * x);
              else if (e.isLightProbe)
                for (let t = 0; t < 9; t++)
                  r.probe[t].addScaledVector(e.sh.coefficients[t], y);
              else if (e.isDirectionalLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * x),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (r.directionalShadow[h] = n),
                    (r.directionalShadowMap[h] = M),
                    (r.directionalShadowMatrix[h] = e.shadow.matrix),
                    m++;
                }
                (r.directional[h] = t), h++;
              } else if (e.isSpotLight) {
                const t = n.get(e);
                if (
                  (t.position.setFromMatrixPosition(e.matrixWorld),
                  t.color.copy(a).multiplyScalar(y * x),
                  (t.distance = _),
                  (t.coneCos = Math.cos(e.angle)),
                  (t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra))),
                  (t.decay = e.decay),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (r.spotShadow[d] = n),
                    (r.spotShadowMap[d] = M),
                    (r.spotShadowMatrix[d] = e.shadow.matrix),
                    v++;
                }
                (r.spot[d] = t), d++;
              } else if (e.isRectAreaLight) {
                const t = n.get(e);
                t.color.copy(a).multiplyScalar(y),
                  t.halfWidth.set(0.5 * e.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * e.height, 0),
                  (r.rectArea[p] = t),
                  p++;
              } else if (e.isPointLight) {
                const t = n.get(e);
                if (
                  (t.color.copy(e.color).multiplyScalar(e.intensity * x),
                  (t.distance = e.distance),
                  (t.decay = e.decay),
                  e.castShadow)
                ) {
                  const t = e.shadow,
                    n = i.get(e);
                  (n.shadowBias = t.bias),
                    (n.shadowNormalBias = t.normalBias),
                    (n.shadowRadius = t.radius),
                    (n.shadowMapSize = t.mapSize),
                    (n.shadowCameraNear = t.camera.near),
                    (n.shadowCameraFar = t.camera.far),
                    (r.pointShadow[u] = n),
                    (r.pointShadowMap[u] = M),
                    (r.pointShadowMatrix[u] = e.shadow.matrix),
                    g++;
                }
                (r.point[u] = t), u++;
              } else if (e.isHemisphereLight) {
                const t = n.get(e);
                t.skyColor.copy(e.color).multiplyScalar(y * x),
                  t.groundColor.copy(e.groundColor).multiplyScalar(y * x),
                  (r.hemi[f] = t),
                  f++;
              }
            }
            p > 0 &&
              (e.isWebGL2 || !0 === t.has("OES_texture_float_linear")
                ? ((r.rectAreaLTC1 = Yn.LTC_FLOAT_1),
                  (r.rectAreaLTC2 = Yn.LTC_FLOAT_2))
                : !0 === t.has("OES_texture_half_float_linear")
                ? ((r.rectAreaLTC1 = Yn.LTC_HALF_1),
                  (r.rectAreaLTC2 = Yn.LTC_HALF_2))
                : console.error(
                    "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
                  )),
              (r.ambient[0] = o),
              (r.ambient[1] = l),
              (r.ambient[2] = c);
            const y = r.hash;
            (y.directionalLength === h &&
              y.pointLength === u &&
              y.spotLength === d &&
              y.rectAreaLength === p &&
              y.hemiLength === f &&
              y.numDirectionalShadows === m &&
              y.numPointShadows === g &&
              y.numSpotShadows === v) ||
              ((r.directional.length = h),
              (r.spot.length = d),
              (r.rectArea.length = p),
              (r.point.length = u),
              (r.hemi.length = f),
              (r.directionalShadow.length = m),
              (r.directionalShadowMap.length = m),
              (r.pointShadow.length = g),
              (r.pointShadowMap.length = g),
              (r.spotShadow.length = v),
              (r.spotShadowMap.length = v),
              (r.directionalShadowMatrix.length = m),
              (r.pointShadowMatrix.length = g),
              (r.spotShadowMatrix.length = v),
              (y.directionalLength = h),
              (y.pointLength = u),
              (y.spotLength = d),
              (y.rectAreaLength = p),
              (y.hemiLength = f),
              (y.numDirectionalShadows = m),
              (y.numPointShadows = g),
              (y.numSpotShadows = v),
              (r.version = as++));
          },
          setupView: function (t, e) {
            let n = 0,
              i = 0,
              l = 0,
              c = 0,
              h = 0;
            const u = e.matrixWorldInverse;
            for (let d = 0, p = t.length; d < p; d++) {
              const e = t[d];
              if (e.isDirectionalLight) {
                const t = r.directional[n];
                t.direction.setFromMatrixPosition(e.matrixWorld),
                  s.setFromMatrixPosition(e.target.matrixWorld),
                  t.direction.sub(s),
                  t.direction.transformDirection(u),
                  n++;
              } else if (e.isSpotLight) {
                const t = r.spot[l];
                t.position.setFromMatrixPosition(e.matrixWorld),
                  t.position.applyMatrix4(u),
                  t.direction.setFromMatrixPosition(e.matrixWorld),
                  s.setFromMatrixPosition(e.target.matrixWorld),
                  t.direction.sub(s),
                  t.direction.transformDirection(u),
                  l++;
              } else if (e.isRectAreaLight) {
                const t = r.rectArea[c];
                t.position.setFromMatrixPosition(e.matrixWorld),
                  t.position.applyMatrix4(u),
                  o.identity(),
                  a.copy(e.matrixWorld),
                  a.premultiply(u),
                  o.extractRotation(a),
                  t.halfWidth.set(0.5 * e.width, 0, 0),
                  t.halfHeight.set(0, 0.5 * e.height, 0),
                  t.halfWidth.applyMatrix4(o),
                  t.halfHeight.applyMatrix4(o),
                  c++;
              } else if (e.isPointLight) {
                const t = r.point[i];
                t.position.setFromMatrixPosition(e.matrixWorld),
                  t.position.applyMatrix4(u),
                  i++;
              } else if (e.isHemisphereLight) {
                const t = r.hemi[h];
                t.direction.setFromMatrixPosition(e.matrixWorld),
                  t.direction.transformDirection(u),
                  t.direction.normalize(),
                  h++;
              }
            }
          },
          state: r,
        };
      }
      function cs(t, e) {
        const n = new ls(t, e),
          i = [],
          r = [];
        return {
          init: function () {
            (i.length = 0), (r.length = 0);
          },
          state: { lightsArray: i, shadowsArray: r, lights: n },
          setupLights: function (t) {
            n.setup(i, t);
          },
          setupLightsView: function (t) {
            n.setupView(i, t);
          },
          pushLight: function (t) {
            i.push(t);
          },
          pushShadow: function (t) {
            r.push(t);
          },
        };
      }
      function hs(t, e) {
        let n = new WeakMap();
        return {
          get: function (i, r = 0) {
            let s;
            return (
              !1 === n.has(i)
                ? ((s = new cs(t, e)), n.set(i, [s]))
                : r >= n.get(i).length
                ? ((s = new cs(t, e)), n.get(i).push(s))
                : (s = n.get(i)[r]),
              s
            );
          },
          dispose: function () {
            n = new WeakMap();
          },
        };
      }
      class us extends je {
        constructor(t) {
          super(),
            (this.type = "MeshDepthMaterial"),
            (this.depthPacking = 3200),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.depthPacking = t.depthPacking),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            this
          );
        }
      }
      us.prototype.isMeshDepthMaterial = !0;
      class ds extends je {
        constructor(t) {
          super(),
            (this.type = "MeshDistanceMaterial"),
            (this.referencePosition = new Lt()),
            (this.nearDistance = 1),
            (this.farDistance = 1e3),
            (this.map = null),
            (this.alphaMap = null),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.fog = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.referencePosition.copy(t.referencePosition),
            (this.nearDistance = t.nearDistance),
            (this.farDistance = t.farDistance),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            this
          );
        }
      }
      ds.prototype.isMeshDistanceMaterial = !0;
      function ps(t, e, n) {
        let i = new Wn();
        const s = new rt(),
          a = new rt(),
          o = new Et(),
          l = new us({ depthPacking: 3201 }),
          c = new ds(),
          h = {},
          u = n.maxTextureSize,
          d = { 0: 1, 1: 0, 2: r },
          p = new Pn({
            defines: { VSM_SAMPLES: 8 },
            uniforms: {
              shadow_pass: { value: null },
              resolution: { value: new rt() },
              radius: { value: 4 },
            },
            vertexShader:
              "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader:
              "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
          }),
          m = p.clone();
        m.defines.HORIZONTAL_PASS = 1;
        const g = new on();
        g.setAttribute(
          "position",
          new Ye(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
        );
        const v = new En(g, p),
          x = this;
        function y(n, i) {
          const r = e.update(v);
          p.defines.VSM_SAMPLES !== n.blurSamples &&
            ((p.defines.VSM_SAMPLES = n.blurSamples),
            (m.defines.VSM_SAMPLES = n.blurSamples),
            (p.needsUpdate = !0),
            (m.needsUpdate = !0)),
            (p.uniforms.shadow_pass.value = n.map.texture),
            (p.uniforms.resolution.value = n.mapSize),
            (p.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.mapPass),
            t.clear(),
            t.renderBufferDirect(i, null, r, p, v, null),
            (m.uniforms.shadow_pass.value = n.mapPass.texture),
            (m.uniforms.resolution.value = n.mapSize),
            (m.uniforms.radius.value = n.radius),
            t.setRenderTarget(n.map),
            t.clear(),
            t.renderBufferDirect(i, null, r, m, v, null);
        }
        function _(e, n, i, r, s, a) {
          let o = null;
          const u =
            !0 === i.isPointLight
              ? e.customDistanceMaterial
              : e.customDepthMaterial;
          if (
            ((o = void 0 !== u ? u : !0 === i.isPointLight ? c : l),
            (t.localClippingEnabled &&
              !0 === n.clipShadows &&
              0 !== n.clippingPlanes.length) ||
              (n.displacementMap && 0 !== n.displacementScale) ||
              (n.alphaMap && n.alphaTest > 0))
          ) {
            const t = o.uuid,
              e = n.uuid;
            let i = h[t];
            void 0 === i && ((i = {}), (h[t] = i));
            let r = i[e];
            void 0 === r && ((r = o.clone()), (i[e] = r)), (o = r);
          }
          return (
            (o.visible = n.visible),
            (o.wireframe = n.wireframe),
            (o.side =
              3 === a
                ? null !== n.shadowSide
                  ? n.shadowSide
                  : n.side
                : null !== n.shadowSide
                ? n.shadowSide
                : d[n.side]),
            (o.alphaMap = n.alphaMap),
            (o.alphaTest = n.alphaTest),
            (o.clipShadows = n.clipShadows),
            (o.clippingPlanes = n.clippingPlanes),
            (o.clipIntersection = n.clipIntersection),
            (o.displacementMap = n.displacementMap),
            (o.displacementScale = n.displacementScale),
            (o.displacementBias = n.displacementBias),
            (o.wireframeLinewidth = n.wireframeLinewidth),
            (o.linewidth = n.linewidth),
            !0 === i.isPointLight &&
              !0 === o.isMeshDistanceMaterial &&
              (o.referencePosition.setFromMatrixPosition(i.matrixWorld),
              (o.nearDistance = r),
              (o.farDistance = s)),
            o
          );
        }
        function M(n, r, s, a, o) {
          if (!1 === n.visible) return;
          if (
            n.layers.test(r.layers) &&
            (n.isMesh || n.isLine || n.isPoints) &&
            (n.castShadow || (n.receiveShadow && 3 === o)) &&
            (!n.frustumCulled || i.intersectsObject(n))
          ) {
            n.modelViewMatrix.multiplyMatrices(
              s.matrixWorldInverse,
              n.matrixWorld
            );
            const i = e.update(n),
              r = n.material;
            if (Array.isArray(r)) {
              const e = i.groups;
              for (let l = 0, c = e.length; l < c; l++) {
                const c = e[l],
                  h = r[c.materialIndex];
                if (h && h.visible) {
                  const e = _(n, h, a, s.near, s.far, o);
                  t.renderBufferDirect(s, null, i, e, n, c);
                }
              }
            } else if (r.visible) {
              const e = _(n, r, a, s.near, s.far, o);
              t.renderBufferDirect(s, null, i, e, n, null);
            }
          }
          const l = n.children;
          for (let t = 0, e = l.length; t < e; t++) M(l[t], r, s, a, o);
        }
        (this.enabled = !1),
          (this.autoUpdate = !0),
          (this.needsUpdate = !1),
          (this.type = 1),
          (this.render = function (e, n, r) {
            if (!1 === x.enabled) return;
            if (!1 === x.autoUpdate && !1 === x.needsUpdate) return;
            if (0 === e.length) return;
            const l = t.getRenderTarget(),
              c = t.getActiveCubeFace(),
              h = t.getActiveMipmapLevel(),
              d = t.state;
            d.setBlending(0),
              d.buffers.color.setClear(1, 1, 1, 1),
              d.buffers.depth.setTest(!0),
              d.setScissorTest(!1);
            for (let p = 0, m = e.length; p < m; p++) {
              const l = e[p],
                c = l.shadow;
              if (void 0 === c) {
                console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
                continue;
              }
              if (!1 === c.autoUpdate && !1 === c.needsUpdate) continue;
              s.copy(c.mapSize);
              const h = c.getFrameExtents();
              if (
                (s.multiply(h),
                a.copy(c.mapSize),
                (s.x > u || s.y > u) &&
                  (s.x > u &&
                    ((a.x = Math.floor(u / h.x)),
                    (s.x = a.x * h.x),
                    (c.mapSize.x = a.x)),
                  s.y > u &&
                    ((a.y = Math.floor(u / h.y)),
                    (s.y = a.y * h.y),
                    (c.mapSize.y = a.y))),
                null !== c.map ||
                  c.isPointLightShadow ||
                  3 !== this.type ||
                  ((c.map = new Tt(s.x, s.y)),
                  (c.map.texture.name = l.name + ".shadowMap"),
                  (c.mapPass = new Tt(s.x, s.y)),
                  c.camera.updateProjectionMatrix()),
                null === c.map)
              ) {
                const t = { minFilter: f, magFilter: f, format: E };
                (c.map = new Tt(s.x, s.y, t)),
                  (c.map.texture.name = l.name + ".shadowMap"),
                  c.camera.updateProjectionMatrix();
              }
              t.setRenderTarget(c.map), t.clear();
              const m = c.getViewportCount();
              for (let t = 0; t < m; t++) {
                const e = c.getViewport(t);
                o.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
                  d.viewport(o),
                  c.updateMatrices(l, t),
                  (i = c.getFrustum()),
                  M(n, r, c.camera, l, this.type);
              }
              c.isPointLightShadow || 3 !== this.type || y(c, r),
                (c.needsUpdate = !1);
            }
            (x.needsUpdate = !1), t.setRenderTarget(l, c, h);
          });
      }
      function fs(t, e, n) {
        const i = n.isWebGL2;
        const a = new (function () {
            let e = !1;
            const n = new Et();
            let i = null;
            const r = new Et(0, 0, 0, 0);
            return {
              setMask: function (n) {
                i === n || e || (t.colorMask(n, n, n, n), (i = n));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e, i, s, a, o) {
                !0 === o && ((e *= a), (i *= a), (s *= a)),
                  n.set(e, i, s, a),
                  !1 === r.equals(n) && (t.clearColor(e, i, s, a), r.copy(n));
              },
              reset: function () {
                (e = !1), (i = null), r.set(-1, 0, 0, 0);
              },
            };
          })(),
          o = new (function () {
            let e = !1,
              n = null,
              i = null,
              r = null;
            return {
              setTest: function (t) {
                t ? F(2929) : G(2929);
              },
              setMask: function (i) {
                n === i || e || (t.depthMask(i), (n = i));
              },
              setFunc: function (e) {
                if (i !== e) {
                  if (e)
                    switch (e) {
                      case 0:
                        t.depthFunc(512);
                        break;
                      case 1:
                        t.depthFunc(519);
                        break;
                      case 2:
                        t.depthFunc(513);
                        break;
                      case 3:
                      default:
                        t.depthFunc(515);
                        break;
                      case 4:
                        t.depthFunc(514);
                        break;
                      case 5:
                        t.depthFunc(518);
                        break;
                      case 6:
                        t.depthFunc(516);
                        break;
                      case 7:
                        t.depthFunc(517);
                    }
                  else t.depthFunc(515);
                  i = e;
                }
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                r !== e && (t.clearDepth(e), (r = e));
              },
              reset: function () {
                (e = !1), (n = null), (i = null), (r = null);
              },
            };
          })(),
          l = new (function () {
            let e = !1,
              n = null,
              i = null,
              r = null,
              s = null,
              a = null,
              o = null,
              l = null,
              c = null;
            return {
              setTest: function (t) {
                e || (t ? F(2960) : G(2960));
              },
              setMask: function (i) {
                n === i || e || (t.stencilMask(i), (n = i));
              },
              setFunc: function (e, n, a) {
                (i === e && r === n && s === a) ||
                  (t.stencilFunc(e, n, a), (i = e), (r = n), (s = a));
              },
              setOp: function (e, n, i) {
                (a === e && o === n && l === i) ||
                  (t.stencilOp(e, n, i), (a = e), (o = n), (l = i));
              },
              setLocked: function (t) {
                e = t;
              },
              setClear: function (e) {
                c !== e && (t.clearStencil(e), (c = e));
              },
              reset: function () {
                (e = !1),
                  (n = null),
                  (i = null),
                  (r = null),
                  (s = null),
                  (a = null),
                  (o = null),
                  (l = null),
                  (c = null);
              },
            };
          })();
        let c = {},
          h = {},
          u = new WeakMap(),
          d = [],
          p = null,
          f = !1,
          m = null,
          g = null,
          v = null,
          x = null,
          y = null,
          _ = null,
          M = null,
          b = !1,
          w = null,
          S = null,
          E = null,
          T = null,
          A = null;
        const R = t.getParameter(35661);
        let C = !1,
          L = 0;
        const P = t.getParameter(7938);
        -1 !== P.indexOf("WebGL")
          ? ((L = parseFloat(/^WebGL (\d)/.exec(P)[1])), (C = L >= 1))
          : -1 !== P.indexOf("OpenGL ES") &&
            ((L = parseFloat(/^OpenGL ES (\d)/.exec(P)[1])), (C = L >= 2));
        let D = null,
          I = {};
        const N = t.getParameter(3088),
          O = t.getParameter(2978),
          z = new Et().fromArray(N),
          B = new Et().fromArray(O);
        function U(e, n, i) {
          const r = new Uint8Array(4),
            s = t.createTexture();
          t.bindTexture(e, s),
            t.texParameteri(e, 10241, 9728),
            t.texParameteri(e, 10240, 9728);
          for (let a = 0; a < i; a++)
            t.texImage2D(n + a, 0, 6408, 1, 1, 0, 6408, 5121, r);
          return s;
        }
        const H = {};
        function F(e) {
          !0 !== c[e] && (t.enable(e), (c[e] = !0));
        }
        function G(e) {
          !1 !== c[e] && (t.disable(e), (c[e] = !1));
        }
        (H[3553] = U(3553, 3553, 1)),
          (H[34067] = U(34067, 34069, 6)),
          a.setClear(0, 0, 0, 1),
          o.setClear(1),
          l.setClear(0),
          F(2929),
          o.setFunc(3),
          j(!1),
          q(1),
          F(2884),
          W(0);
        const V = { [s]: 32774, 101: 32778, 102: 32779 };
        if (i) (V[103] = 32775), (V[104] = 32776);
        else {
          const t = e.get("EXT_blend_minmax");
          null !== t && ((V[103] = t.MIN_EXT), (V[104] = t.MAX_EXT));
        }
        const k = {
          200: 0,
          201: 1,
          202: 768,
          204: 770,
          210: 776,
          208: 774,
          206: 772,
          203: 769,
          205: 771,
          209: 775,
          207: 773,
        };
        function W(e, n, i, r, a, o, l, c) {
          if (0 !== e) {
            if ((!1 === f && (F(3042), (f = !0)), 5 === e))
              (a = a || n),
                (o = o || i),
                (l = l || r),
                (n === g && a === y) ||
                  (t.blendEquationSeparate(V[n], V[a]), (g = n), (y = a)),
                (i === v && r === x && o === _ && l === M) ||
                  (t.blendFuncSeparate(k[i], k[r], k[o], k[l]),
                  (v = i),
                  (x = r),
                  (_ = o),
                  (M = l)),
                (m = e),
                (b = null);
            else if (e !== m || c !== b) {
              if (
                ((g === s && y === s) ||
                  (t.blendEquation(32774), (g = s), (y = s)),
                c)
              )
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(1, 771, 1, 771);
                    break;
                  case 2:
                    t.blendFunc(1, 1);
                    break;
                  case 3:
                    t.blendFuncSeparate(0, 769, 0, 1);
                    break;
                  case 4:
                    t.blendFuncSeparate(0, 768, 0, 770);
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              else
                switch (e) {
                  case 1:
                    t.blendFuncSeparate(770, 771, 1, 771);
                    break;
                  case 2:
                    t.blendFunc(770, 1);
                    break;
                  case 3:
                    t.blendFuncSeparate(0, 769, 0, 1);
                    break;
                  case 4:
                    t.blendFunc(0, 768);
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              (v = null), (x = null), (_ = null), (M = null), (m = e), (b = c);
            }
          } else !0 === f && (G(3042), (f = !1));
        }
        function j(e) {
          w !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (w = e));
        }
        function q(e) {
          0 !== e
            ? (F(2884),
              e !== S &&
                (1 === e
                  ? t.cullFace(1029)
                  : 2 === e
                  ? t.cullFace(1028)
                  : t.cullFace(1032)))
            : G(2884),
            (S = e);
        }
        function X(e, n, i) {
          e
            ? (F(32823),
              (T === n && A === i) || (t.polygonOffset(n, i), (T = n), (A = i)))
            : G(32823);
        }
        function J(e) {
          void 0 === e && (e = 33984 + R - 1),
            D !== e && (t.activeTexture(e), (D = e));
        }
        return {
          buffers: { color: a, depth: o, stencil: l },
          enable: F,
          disable: G,
          bindFramebuffer: function (e, n) {
            return (
              h[e] !== n &&
              (t.bindFramebuffer(e, n),
              (h[e] = n),
              i &&
                (36009 === e && (h[36160] = n), 36160 === e && (h[36009] = n)),
              !0)
            );
          },
          drawBuffers: function (i, r) {
            let s = d,
              a = !1;
            if (i)
              if (
                ((s = u.get(r)),
                void 0 === s && ((s = []), u.set(r, s)),
                i.isWebGLMultipleRenderTargets)
              ) {
                const t = i.texture;
                if (s.length !== t.length || 36064 !== s[0]) {
                  for (let e = 0, n = t.length; e < n; e++) s[e] = 36064 + e;
                  (s.length = t.length), (a = !0);
                }
              } else 36064 !== s[0] && ((s[0] = 36064), (a = !0));
            else 1029 !== s[0] && ((s[0] = 1029), (a = !0));
            a &&
              (n.isWebGL2
                ? t.drawBuffers(s)
                : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
          },
          useProgram: function (e) {
            return p !== e && (t.useProgram(e), (p = e), !0);
          },
          setBlending: W,
          setMaterial: function (t, e) {
            t.side === r ? G(2884) : F(2884);
            let n = 1 === t.side;
            e && (n = !n),
              j(n),
              1 === t.blending && !1 === t.transparent
                ? W(0)
                : W(
                    t.blending,
                    t.blendEquation,
                    t.blendSrc,
                    t.blendDst,
                    t.blendEquationAlpha,
                    t.blendSrcAlpha,
                    t.blendDstAlpha,
                    t.premultipliedAlpha
                  ),
              o.setFunc(t.depthFunc),
              o.setTest(t.depthTest),
              o.setMask(t.depthWrite),
              a.setMask(t.colorWrite);
            const i = t.stencilWrite;
            l.setTest(i),
              i &&
                (l.setMask(t.stencilWriteMask),
                l.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
                l.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
              X(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
              !0 === t.alphaToCoverage ? F(32926) : G(32926);
          },
          setFlipSided: j,
          setCullFace: q,
          setLineWidth: function (e) {
            e !== E && (C && t.lineWidth(e), (E = e));
          },
          setPolygonOffset: X,
          setScissorTest: function (t) {
            t ? F(3089) : G(3089);
          },
          activeTexture: J,
          bindTexture: function (e, n) {
            null === D && J();
            let i = I[D];
            void 0 === i &&
              ((i = { type: void 0, texture: void 0 }), (I[D] = i)),
              (i.type === e && i.texture === n) ||
                (t.bindTexture(e, n || H[e]), (i.type = e), (i.texture = n));
          },
          unbindTexture: function () {
            const e = I[D];
            void 0 !== e &&
              void 0 !== e.type &&
              (t.bindTexture(e.type, null),
              (e.type = void 0),
              (e.texture = void 0));
          },
          compressedTexImage2D: function () {
            try {
              t.compressedTexImage2D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texImage2D: function () {
            try {
              t.texImage2D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texImage3D: function () {
            try {
              t.texImage3D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texStorage2D: function () {
            try {
              t.texStorage2D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texStorage3D: function () {
            try {
              t.texStorage3D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texSubImage2D: function () {
            try {
              t.texSubImage2D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          texSubImage3D: function () {
            try {
              t.texSubImage3D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          compressedTexSubImage2D: function () {
            try {
              t.compressedTexSubImage2D.apply(t, arguments);
            } catch (e) {
              console.error("THREE.WebGLState:", e);
            }
          },
          scissor: function (e) {
            !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e));
          },
          viewport: function (e) {
            !1 === B.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), B.copy(e));
          },
          reset: function () {
            t.disable(3042),
              t.disable(2884),
              t.disable(2929),
              t.disable(32823),
              t.disable(3089),
              t.disable(2960),
              t.disable(32926),
              t.blendEquation(32774),
              t.blendFunc(1, 0),
              t.blendFuncSeparate(1, 0, 1, 0),
              t.colorMask(!0, !0, !0, !0),
              t.clearColor(0, 0, 0, 0),
              t.depthMask(!0),
              t.depthFunc(513),
              t.clearDepth(1),
              t.stencilMask(4294967295),
              t.stencilFunc(519, 0, 4294967295),
              t.stencilOp(7680, 7680, 7680),
              t.clearStencil(0),
              t.cullFace(1029),
              t.frontFace(2305),
              t.polygonOffset(0, 0),
              t.activeTexture(33984),
              t.bindFramebuffer(36160, null),
              !0 === i &&
                (t.bindFramebuffer(36009, null),
                t.bindFramebuffer(36008, null)),
              t.useProgram(null),
              t.lineWidth(1),
              t.scissor(0, 0, t.canvas.width, t.canvas.height),
              t.viewport(0, 0, t.canvas.width, t.canvas.height),
              (c = {}),
              (D = null),
              (I = {}),
              (h = {}),
              (u = new WeakMap()),
              (d = []),
              (p = null),
              (f = !1),
              (m = null),
              (g = null),
              (v = null),
              (x = null),
              (y = null),
              (_ = null),
              (M = null),
              (b = !1),
              (w = null),
              (S = null),
              (E = null),
              (T = null),
              (A = null),
              z.set(0, 0, t.canvas.width, t.canvas.height),
              B.set(0, 0, t.canvas.width, t.canvas.height),
              a.reset(),
              o.reset(),
              l.reset();
          },
        };
      }
      function ms(t, e, n, i, r, s, a) {
        const o = r.isWebGL2,
          l = r.maxTextures,
          c = r.maxCubemapSize,
          h = r.maxTextureSize,
          R = r.maxSamples,
          C = e.has("WEBGL_multisampled_render_to_texture")
            ? e.get("WEBGL_multisampled_render_to_texture")
            : null,
          L = /OculusBrowser/g.test(navigator.userAgent),
          P = new WeakMap();
        let D;
        const I = new WeakMap();
        let N = !1;
        try {
          N =
            "undefined" !== typeof OffscreenCanvas &&
            null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (ut) {}
        function O(t, e) {
          return N ? new OffscreenCanvas(t, e) : ot("canvas");
        }
        function z(t, e, n, i) {
          let r = 1;
          if (
            ((t.width > i || t.height > i) &&
              (r = i / Math.max(t.width, t.height)),
            r < 1 || !0 === e)
          ) {
            if (
              ("undefined" !== typeof HTMLImageElement &&
                t instanceof HTMLImageElement) ||
              ("undefined" !== typeof HTMLCanvasElement &&
                t instanceof HTMLCanvasElement) ||
              ("undefined" !== typeof ImageBitmap && t instanceof ImageBitmap)
            ) {
              const i = e ? it : Math.floor,
                s = i(r * t.width),
                a = i(r * t.height);
              void 0 === D && (D = O(s, a));
              const o = n ? O(s, a) : D;
              (o.width = s), (o.height = a);
              return (
                o.getContext("2d").drawImage(t, 0, 0, s, a),
                console.warn(
                  "THREE.WebGLRenderer: Texture has been resized from (" +
                    t.width +
                    "x" +
                    t.height +
                    ") to (" +
                    s +
                    "x" +
                    a +
                    ")."
                ),
                o
              );
            }
            return (
              "data" in t &&
                console.warn(
                  "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                    t.width +
                    "x" +
                    t.height +
                    ")."
                ),
              t
            );
          }
          return t;
        }
        function B(t) {
          return nt(t.width) && nt(t.height);
        }
        function U(t, e) {
          return (
            t.generateMipmaps && e && t.minFilter !== f && t.minFilter !== v
          );
        }
        function G(e) {
          t.generateMipmap(e);
        }
        function V(n, i, r, s, a = !1) {
          if (!1 === o) return i;
          if (null !== n) {
            if (void 0 !== t[n]) return t[n];
            console.warn(
              "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
                n +
                "'"
            );
          }
          let l = i;
          return (
            6403 === i &&
              (5126 === r && (l = 33326),
              5131 === r && (l = 33325),
              5121 === r && (l = 33321)),
            33319 === i &&
              (5126 === r && (l = 33328),
              5131 === r && (l = 33327),
              5121 === r && (l = 33323)),
            6408 === i &&
              (5126 === r && (l = 34836),
              5131 === r && (l = 34842),
              5121 === r && (l = s === F && !1 === a ? 35907 : 32856),
              32819 === r && (l = 32854),
              32820 === r && (l = 32855)),
            (33325 !== l &&
              33326 !== l &&
              33327 !== l &&
              33328 !== l &&
              34842 !== l &&
              34836 !== l) ||
              e.get("EXT_color_buffer_float"),
            l
          );
        }
        function k(t, e, n) {
          return !0 === U(t, n) ||
            (t.isFramebufferTexture && t.minFilter !== f && t.minFilter !== v)
            ? Math.log2(Math.max(e.width, e.height)) + 1
            : void 0 !== t.mipmaps && t.mipmaps.length > 0
            ? t.mipmaps.length
            : t.isCompressedTexture && Array.isArray(t.image)
            ? e.mipmaps.length
            : 1;
        }
        function W(t) {
          return t === f || t === m || t === g ? 9728 : 9729;
        }
        function j(t) {
          const e = t.target;
          e.removeEventListener("dispose", j),
            (function (t) {
              const e = i.get(t);
              if (void 0 === e.__webglInit) return;
              const n = t.source,
                r = I.get(n);
              if (r) {
                const i = r[e.__cacheKey];
                i.usedTimes--,
                  0 === i.usedTimes && J(t),
                  0 === Object.keys(r).length && I.delete(n);
              }
              i.remove(t);
            })(e),
            e.isVideoTexture && P.delete(e);
        }
        function q(e) {
          const n = e.target;
          n.removeEventListener("dispose", q),
            (function (e) {
              const n = e.texture,
                r = i.get(e),
                s = i.get(n);
              void 0 !== s.__webglTexture &&
                (t.deleteTexture(s.__webglTexture), a.memory.textures--);
              e.depthTexture && e.depthTexture.dispose();
              if (e.isWebGLCubeRenderTarget)
                for (let i = 0; i < 6; i++)
                  t.deleteFramebuffer(r.__webglFramebuffer[i]),
                    r.__webglDepthbuffer &&
                      t.deleteRenderbuffer(r.__webglDepthbuffer[i]);
              else
                t.deleteFramebuffer(r.__webglFramebuffer),
                  r.__webglDepthbuffer &&
                    t.deleteRenderbuffer(r.__webglDepthbuffer),
                  r.__webglMultisampledFramebuffer &&
                    t.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                  r.__webglColorRenderbuffer &&
                    t.deleteRenderbuffer(r.__webglColorRenderbuffer),
                  r.__webglDepthRenderbuffer &&
                    t.deleteRenderbuffer(r.__webglDepthRenderbuffer);
              if (e.isWebGLMultipleRenderTargets)
                for (let o = 0, l = n.length; o < l; o++) {
                  const e = i.get(n[o]);
                  e.__webglTexture &&
                    (t.deleteTexture(e.__webglTexture), a.memory.textures--),
                    i.remove(n[o]);
                }
              i.remove(n), i.remove(e);
            })(n);
        }
        function J(e) {
          const n = i.get(e);
          t.deleteTexture(n.__webglTexture);
          const r = e.source;
          delete I.get(r)[n.__cacheKey], a.memory.textures--;
        }
        let Y = 0;
        function Z(t, e) {
          const r = i.get(t);
          if (
            (t.isVideoTexture &&
              (function (t) {
                const e = a.render.frame;
                P.get(t) !== e && (P.set(t, e), t.update());
              })(t),
            !1 === t.isRenderTargetTexture &&
              t.version > 0 &&
              r.__version !== t.version)
          ) {
            const n = t.image;
            if (null === n)
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but no image data found."
              );
            else {
              if (!1 !== n.complete) return void et(r, t, e);
              console.warn(
                "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
              );
            }
          }
          n.activeTexture(33984 + e), n.bindTexture(3553, r.__webglTexture);
        }
        const K = { [u]: 10497, [d]: 33071, [p]: 33648 },
          Q = {
            [f]: 9728,
            [m]: 9984,
            [g]: 9986,
            [v]: 9729,
            1007: 9985,
            [x]: 9987,
          };
        function $(n, s, a) {
          if (
            (a
              ? (t.texParameteri(n, 10242, K[s.wrapS]),
                t.texParameteri(n, 10243, K[s.wrapT]),
                (32879 !== n && 35866 !== n) ||
                  t.texParameteri(n, 32882, K[s.wrapR]),
                t.texParameteri(n, 10240, Q[s.magFilter]),
                t.texParameteri(n, 10241, Q[s.minFilter]))
              : (t.texParameteri(n, 10242, 33071),
                t.texParameteri(n, 10243, 33071),
                (32879 !== n && 35866 !== n) ||
                  t.texParameteri(n, 32882, 33071),
                (s.wrapS === d && s.wrapT === d) ||
                  console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
                  ),
                t.texParameteri(n, 10240, W(s.magFilter)),
                t.texParameteri(n, 10241, W(s.minFilter)),
                s.minFilter !== f &&
                  s.minFilter !== v &&
                  console.warn(
                    "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
                  )),
            !0 === e.has("EXT_texture_filter_anisotropic"))
          ) {
            const a = e.get("EXT_texture_filter_anisotropic");
            if (s.type === b && !1 === e.has("OES_texture_float_linear"))
              return;
            if (
              !1 === o &&
              s.type === w &&
              !1 === e.has("OES_texture_half_float_linear")
            )
              return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) &&
              (t.texParameterf(
                n,
                a.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(s.anisotropy, r.getMaxAnisotropy())
              ),
              (i.get(s).__currentAnisotropy = s.anisotropy));
          }
        }
        function tt(e, n) {
          let i = !1;
          void 0 === e.__webglInit &&
            ((e.__webglInit = !0), n.addEventListener("dispose", j));
          const r = n.source;
          let s = I.get(r);
          void 0 === s && ((s = {}), I.set(r, s));
          const o = (function (t) {
            const e = [];
            return (
              e.push(t.wrapS),
              e.push(t.wrapT),
              e.push(t.magFilter),
              e.push(t.minFilter),
              e.push(t.anisotropy),
              e.push(t.internalFormat),
              e.push(t.format),
              e.push(t.type),
              e.push(t.generateMipmaps),
              e.push(t.premultiplyAlpha),
              e.push(t.flipY),
              e.push(t.unpackAlignment),
              e.push(t.encoding),
              e.join()
            );
          })(n);
          if (o !== e.__cacheKey) {
            void 0 === s[o] &&
              ((s[o] = { texture: t.createTexture(), usedTimes: 0 }),
              a.memory.textures++,
              (i = !0)),
              s[o].usedTimes++;
            const r = s[e.__cacheKey];
            void 0 !== r &&
              (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && J(n)),
              (e.__cacheKey = o),
              (e.__webglTexture = s[o].texture);
          }
          return i;
        }
        function et(e, i, r) {
          let a = 3553;
          i.isDataArrayTexture && (a = 35866), i.isData3DTexture && (a = 32879);
          const l = tt(e, i),
            c = i.source;
          if (
            (n.activeTexture(33984 + r),
            n.bindTexture(a, e.__webglTexture),
            c.version !== c.__currentVersion || !0 === l)
          ) {
            t.pixelStorei(37440, i.flipY),
              t.pixelStorei(37441, i.premultiplyAlpha),
              t.pixelStorei(3317, i.unpackAlignment),
              t.pixelStorei(37443, 0);
            const r =
              (function (t) {
                return (
                  !o &&
                  (t.wrapS !== d ||
                    t.wrapT !== d ||
                    (t.minFilter !== f && t.minFilter !== v))
                );
              })(i) && !1 === B(i.image);
            let l = z(i.image, r, !1, h);
            l = ht(i, l);
            const u = B(l) || o,
              p = s.convert(i.format, i.encoding);
            let m,
              g = s.convert(i.type),
              x = V(i.internalFormat, p, g, i.encoding, i.isVideoTexture);
            $(a, i, u);
            const y = i.mipmaps,
              w = o && !0 !== i.isVideoTexture,
              R = void 0 === e.__version,
              C = k(i, l, u);
            if (i.isDepthTexture)
              (x = 6402),
                o
                  ? (x =
                      i.type === b
                        ? 36012
                        : i.type === M
                        ? 33190
                        : i.type === S
                        ? 35056
                        : 33189)
                  : i.type === b &&
                    console.error(
                      "WebGLRenderer: Floating point depth texture requires WebGL2."
                    ),
                i.format === T &&
                  6402 === x &&
                  i.type !== _ &&
                  i.type !== M &&
                  (console.warn(
                    "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
                  ),
                  (i.type = _),
                  (g = s.convert(i.type))),
                i.format === A &&
                  6402 === x &&
                  ((x = 34041),
                  i.type !== S &&
                    (console.warn(
                      "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
                    ),
                    (i.type = S),
                    (g = s.convert(i.type)))),
                w && R
                  ? n.texStorage2D(3553, 1, x, l.width, l.height)
                  : n.texImage2D(3553, 0, x, l.width, l.height, 0, p, g, null);
            else if (i.isDataTexture)
              if (y.length > 0 && u) {
                w && R && n.texStorage2D(3553, C, x, y[0].width, y[0].height);
                for (let t = 0, e = y.length; t < e; t++)
                  (m = y[t]),
                    w
                      ? n.texSubImage2D(
                          3553,
                          t,
                          0,
                          0,
                          m.width,
                          m.height,
                          p,
                          g,
                          m.data
                        )
                      : n.texImage2D(
                          3553,
                          t,
                          x,
                          m.width,
                          m.height,
                          0,
                          p,
                          g,
                          m.data
                        );
                i.generateMipmaps = !1;
              } else
                w
                  ? (R && n.texStorage2D(3553, C, x, l.width, l.height),
                    n.texSubImage2D(
                      3553,
                      0,
                      0,
                      0,
                      l.width,
                      l.height,
                      p,
                      g,
                      l.data
                    ))
                  : n.texImage2D(
                      3553,
                      0,
                      x,
                      l.width,
                      l.height,
                      0,
                      p,
                      g,
                      l.data
                    );
            else if (i.isCompressedTexture) {
              w && R && n.texStorage2D(3553, C, x, y[0].width, y[0].height);
              for (let t = 0, e = y.length; t < e; t++)
                (m = y[t]),
                  i.format !== E
                    ? null !== p
                      ? w
                        ? n.compressedTexSubImage2D(
                            3553,
                            t,
                            0,
                            0,
                            m.width,
                            m.height,
                            p,
                            m.data
                          )
                        : n.compressedTexImage2D(
                            3553,
                            t,
                            x,
                            m.width,
                            m.height,
                            0,
                            m.data
                          )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                        )
                    : w
                    ? n.texSubImage2D(
                        3553,
                        t,
                        0,
                        0,
                        m.width,
                        m.height,
                        p,
                        g,
                        m.data
                      )
                    : n.texImage2D(
                        3553,
                        t,
                        x,
                        m.width,
                        m.height,
                        0,
                        p,
                        g,
                        m.data
                      );
            } else if (i.isDataArrayTexture)
              w
                ? (R && n.texStorage3D(35866, C, x, l.width, l.height, l.depth),
                  n.texSubImage3D(
                    35866,
                    0,
                    0,
                    0,
                    0,
                    l.width,
                    l.height,
                    l.depth,
                    p,
                    g,
                    l.data
                  ))
                : n.texImage3D(
                    35866,
                    0,
                    x,
                    l.width,
                    l.height,
                    l.depth,
                    0,
                    p,
                    g,
                    l.data
                  );
            else if (i.isData3DTexture)
              w
                ? (R && n.texStorage3D(32879, C, x, l.width, l.height, l.depth),
                  n.texSubImage3D(
                    32879,
                    0,
                    0,
                    0,
                    0,
                    l.width,
                    l.height,
                    l.depth,
                    p,
                    g,
                    l.data
                  ))
                : n.texImage3D(
                    32879,
                    0,
                    x,
                    l.width,
                    l.height,
                    l.depth,
                    0,
                    p,
                    g,
                    l.data
                  );
            else if (i.isFramebufferTexture)
              w && R
                ? n.texStorage2D(3553, C, x, l.width, l.height)
                : n.texImage2D(3553, 0, x, l.width, l.height, 0, p, g, null);
            else if (y.length > 0 && u) {
              w && R && n.texStorage2D(3553, C, x, y[0].width, y[0].height);
              for (let t = 0, e = y.length; t < e; t++)
                (m = y[t]),
                  w
                    ? n.texSubImage2D(3553, t, 0, 0, p, g, m)
                    : n.texImage2D(3553, t, x, p, g, m);
              i.generateMipmaps = !1;
            } else
              w
                ? (R && n.texStorage2D(3553, C, x, l.width, l.height),
                  n.texSubImage2D(3553, 0, 0, 0, p, g, l))
                : n.texImage2D(3553, 0, x, p, g, l);
            U(i, u) && G(a),
              (c.__currentVersion = c.version),
              i.onUpdate && i.onUpdate(i);
          }
          e.__version = i.version;
        }
        function rt(e, r, a, o, l) {
          const c = s.convert(a.format, a.encoding),
            h = s.convert(a.type),
            u = V(a.internalFormat, c, h, a.encoding);
          i.get(r).__hasExternalTextures ||
            (32879 === l || 35866 === l
              ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
              : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
            n.bindFramebuffer(36160, e),
            ct(r)
              ? C.framebufferTexture2DMultisampleEXT(
                  36160,
                  o,
                  l,
                  i.get(a).__webglTexture,
                  0,
                  lt(r)
                )
              : t.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0),
            n.bindFramebuffer(36160, null);
        }
        function st(e, n, i) {
          if (
            (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)
          ) {
            let r = 33189;
            if (i || ct(n)) {
              const e = n.depthTexture;
              e &&
                e.isDepthTexture &&
                (e.type === b ? (r = 36012) : e.type === M && (r = 33190));
              const i = lt(n);
              ct(n)
                ? C.renderbufferStorageMultisampleEXT(
                    36161,
                    i,
                    r,
                    n.width,
                    n.height
                  )
                : t.renderbufferStorageMultisample(
                    36161,
                    i,
                    r,
                    n.width,
                    n.height
                  );
            } else t.renderbufferStorage(36161, r, n.width, n.height);
            t.framebufferRenderbuffer(36160, 36096, 36161, e);
          } else if (n.depthBuffer && n.stencilBuffer) {
            const r = lt(n);
            i && !1 === ct(n)
              ? t.renderbufferStorageMultisample(
                  36161,
                  r,
                  35056,
                  n.width,
                  n.height
                )
              : ct(n)
              ? C.renderbufferStorageMultisampleEXT(
                  36161,
                  r,
                  35056,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(36161, 34041, n.width, n.height),
              t.framebufferRenderbuffer(36160, 33306, 36161, e);
          } else {
            const e =
                !0 === n.isWebGLMultipleRenderTargets
                  ? n.texture[0]
                  : n.texture,
              r = s.convert(e.format, e.encoding),
              a = s.convert(e.type),
              o = V(e.internalFormat, r, a, e.encoding),
              l = lt(n);
            i && !1 === ct(n)
              ? t.renderbufferStorageMultisample(36161, l, o, n.width, n.height)
              : ct(n)
              ? C.renderbufferStorageMultisampleEXT(
                  36161,
                  l,
                  o,
                  n.width,
                  n.height
                )
              : t.renderbufferStorage(36161, o, n.width, n.height);
          }
          t.bindRenderbuffer(36161, null);
        }
        function at(e) {
          const r = i.get(e),
            s = !0 === e.isWebGLCubeRenderTarget;
          if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s)
              throw new Error(
                "target.depthTexture not supported in Cube render targets"
              );
            !(function (e, r) {
              if (r && r.isWebGLCubeRenderTarget)
                throw new Error(
                  "Depth Texture with cube render targets is not supported"
                );
              if (
                (n.bindFramebuffer(36160, e),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
              )
                throw new Error(
                  "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
                );
              (i.get(r.depthTexture).__webglTexture &&
                r.depthTexture.image.width === r.width &&
                r.depthTexture.image.height === r.height) ||
                ((r.depthTexture.image.width = r.width),
                (r.depthTexture.image.height = r.height),
                (r.depthTexture.needsUpdate = !0)),
                Z(r.depthTexture, 0);
              const s = i.get(r.depthTexture).__webglTexture,
                a = lt(r);
              if (r.depthTexture.format === T)
                ct(r)
                  ? C.framebufferTexture2DMultisampleEXT(
                      36160,
                      36096,
                      3553,
                      s,
                      0,
                      a
                    )
                  : t.framebufferTexture2D(36160, 36096, 3553, s, 0);
              else {
                if (r.depthTexture.format !== A)
                  throw new Error("Unknown depthTexture format");
                ct(r)
                  ? C.framebufferTexture2DMultisampleEXT(
                      36160,
                      33306,
                      3553,
                      s,
                      0,
                      a
                    )
                  : t.framebufferTexture2D(36160, 33306, 3553, s, 0);
              }
            })(r.__webglFramebuffer, e);
          } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
              n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
                st(r.__webglDepthbuffer[i], e, !1);
          } else
            n.bindFramebuffer(36160, r.__webglFramebuffer),
              (r.__webglDepthbuffer = t.createRenderbuffer()),
              st(r.__webglDepthbuffer, e, !1);
          n.bindFramebuffer(36160, null);
        }
        function lt(t) {
          return Math.min(R, t.samples);
        }
        function ct(t) {
          const n = i.get(t);
          return (
            o &&
            t.samples > 0 &&
            !0 === e.has("WEBGL_multisampled_render_to_texture") &&
            !1 !== n.__useRenderToTexture
          );
        }
        function ht(t, n) {
          const i = t.encoding,
            r = t.format,
            s = t.type;
          return (
            !0 === t.isCompressedTexture ||
              !0 === t.isVideoTexture ||
              t.format === X ||
              (i !== H &&
                (i === F
                  ? !1 === o
                    ? !0 === e.has("EXT_sRGB") && r === E
                      ? ((t.format = X),
                        (t.minFilter = v),
                        (t.generateMipmaps = !1))
                      : (n = _t.sRGBToLinear(n))
                    : (r === E && s === y) ||
                      console.warn(
                        "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                      )
                  : console.error(
                      "THREE.WebGLTextures: Unsupported texture encoding:",
                      i
                    ))),
            n
          );
        }
        (this.allocateTextureUnit = function () {
          const t = Y;
          return (
            t >= l &&
              console.warn(
                "THREE.WebGLTextures: Trying to use " +
                  t +
                  " texture units while this GPU supports only " +
                  l
              ),
            (Y += 1),
            t
          );
        }),
          (this.resetTextureUnits = function () {
            Y = 0;
          }),
          (this.setTexture2D = Z),
          (this.setTexture2DArray = function (t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version
              ? et(r, t, e)
              : (n.activeTexture(33984 + e),
                n.bindTexture(35866, r.__webglTexture));
          }),
          (this.setTexture3D = function (t, e) {
            const r = i.get(t);
            t.version > 0 && r.__version !== t.version
              ? et(r, t, e)
              : (n.activeTexture(33984 + e),
                n.bindTexture(32879, r.__webglTexture));
          }),
          (this.setTextureCube = function (e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version
              ? (function (e, i, r) {
                  if (6 !== i.image.length) return;
                  const a = tt(e, i),
                    l = i.source;
                  if (
                    (n.activeTexture(33984 + r),
                    n.bindTexture(34067, e.__webglTexture),
                    l.version !== l.__currentVersion || !0 === a)
                  ) {
                    t.pixelStorei(37440, i.flipY),
                      t.pixelStorei(37441, i.premultiplyAlpha),
                      t.pixelStorei(3317, i.unpackAlignment),
                      t.pixelStorei(37443, 0);
                    const r =
                        i.isCompressedTexture || i.image[0].isCompressedTexture,
                      a = i.image[0] && i.image[0].isDataTexture,
                      h = [];
                    for (let t = 0; t < 6; t++)
                      (h[t] =
                        r || a
                          ? a
                            ? i.image[t].image
                            : i.image[t]
                          : z(i.image[t], !1, !0, c)),
                        (h[t] = ht(i, h[t]));
                    const u = h[0],
                      d = B(u) || o,
                      p = s.convert(i.format, i.encoding),
                      f = s.convert(i.type),
                      m = V(i.internalFormat, p, f, i.encoding),
                      g = o && !0 !== i.isVideoTexture,
                      v = void 0 === e.__version;
                    let x,
                      y = k(i, u, d);
                    if (($(34067, i, d), r)) {
                      g && v && n.texStorage2D(34067, y, m, u.width, u.height);
                      for (let t = 0; t < 6; t++) {
                        x = h[t].mipmaps;
                        for (let e = 0; e < x.length; e++) {
                          const r = x[e];
                          i.format !== E
                            ? null !== p
                              ? g
                                ? n.compressedTexSubImage2D(
                                    34069 + t,
                                    e,
                                    0,
                                    0,
                                    r.width,
                                    r.height,
                                    p,
                                    r.data
                                  )
                                : n.compressedTexImage2D(
                                    34069 + t,
                                    e,
                                    m,
                                    r.width,
                                    r.height,
                                    0,
                                    r.data
                                  )
                              : console.warn(
                                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                                )
                            : g
                            ? n.texSubImage2D(
                                34069 + t,
                                e,
                                0,
                                0,
                                r.width,
                                r.height,
                                p,
                                f,
                                r.data
                              )
                            : n.texImage2D(
                                34069 + t,
                                e,
                                m,
                                r.width,
                                r.height,
                                0,
                                p,
                                f,
                                r.data
                              );
                        }
                      }
                    } else {
                      (x = i.mipmaps),
                        g &&
                          v &&
                          (x.length > 0 && y++,
                          n.texStorage2D(34067, y, m, h[0].width, h[0].height));
                      for (let t = 0; t < 6; t++)
                        if (a) {
                          g
                            ? n.texSubImage2D(
                                34069 + t,
                                0,
                                0,
                                0,
                                h[t].width,
                                h[t].height,
                                p,
                                f,
                                h[t].data
                              )
                            : n.texImage2D(
                                34069 + t,
                                0,
                                m,
                                h[t].width,
                                h[t].height,
                                0,
                                p,
                                f,
                                h[t].data
                              );
                          for (let e = 0; e < x.length; e++) {
                            const i = x[e].image[t].image;
                            g
                              ? n.texSubImage2D(
                                  34069 + t,
                                  e + 1,
                                  0,
                                  0,
                                  i.width,
                                  i.height,
                                  p,
                                  f,
                                  i.data
                                )
                              : n.texImage2D(
                                  34069 + t,
                                  e + 1,
                                  m,
                                  i.width,
                                  i.height,
                                  0,
                                  p,
                                  f,
                                  i.data
                                );
                          }
                        } else {
                          g
                            ? n.texSubImage2D(34069 + t, 0, 0, 0, p, f, h[t])
                            : n.texImage2D(34069 + t, 0, m, p, f, h[t]);
                          for (let e = 0; e < x.length; e++) {
                            const i = x[e];
                            g
                              ? n.texSubImage2D(
                                  34069 + t,
                                  e + 1,
                                  0,
                                  0,
                                  p,
                                  f,
                                  i.image[t]
                                )
                              : n.texImage2D(
                                  34069 + t,
                                  e + 1,
                                  m,
                                  p,
                                  f,
                                  i.image[t]
                                );
                          }
                        }
                    }
                    U(i, d) && G(34067),
                      (l.__currentVersion = l.version),
                      i.onUpdate && i.onUpdate(i);
                  }
                  e.__version = i.version;
                })(a, e, r)
              : (n.activeTexture(33984 + r),
                n.bindTexture(34067, a.__webglTexture));
          }),
          (this.rebindTextures = function (t, e, n) {
            const r = i.get(t);
            void 0 !== e && rt(r.__webglFramebuffer, t, t.texture, 36064, 3553),
              void 0 !== n && at(t);
          }),
          (this.setupRenderTarget = function (e) {
            const l = e.texture,
              c = i.get(e),
              h = i.get(l);
            e.addEventListener("dispose", q),
              !0 !== e.isWebGLMultipleRenderTargets &&
                (void 0 === h.__webglTexture &&
                  (h.__webglTexture = t.createTexture()),
                (h.__version = l.version),
                a.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget,
              d = !0 === e.isWebGLMultipleRenderTargets,
              p = B(e) || o;
            if (u) {
              c.__webglFramebuffer = [];
              for (let e = 0; e < 6; e++)
                c.__webglFramebuffer[e] = t.createFramebuffer();
            } else if (((c.__webglFramebuffer = t.createFramebuffer()), d))
              if (r.drawBuffers) {
                const n = e.texture;
                for (let e = 0, r = n.length; e < r; e++) {
                  const r = i.get(n[e]);
                  void 0 === r.__webglTexture &&
                    ((r.__webglTexture = t.createTexture()),
                    a.memory.textures++);
                }
              } else
                console.warn(
                  "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
                );
            else if (o && e.samples > 0 && !1 === ct(e)) {
              (c.__webglMultisampledFramebuffer = t.createFramebuffer()),
                (c.__webglColorRenderbuffer = t.createRenderbuffer()),
                t.bindRenderbuffer(36161, c.__webglColorRenderbuffer);
              const i = s.convert(l.format, l.encoding),
                r = s.convert(l.type),
                a = V(l.internalFormat, i, r, l.encoding),
                o = lt(e);
              t.renderbufferStorageMultisample(36161, o, a, e.width, e.height),
                n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer),
                t.framebufferRenderbuffer(
                  36160,
                  36064,
                  36161,
                  c.__webglColorRenderbuffer
                ),
                t.bindRenderbuffer(36161, null),
                e.depthBuffer &&
                  ((c.__webglDepthRenderbuffer = t.createRenderbuffer()),
                  st(c.__webglDepthRenderbuffer, e, !0)),
                n.bindFramebuffer(36160, null);
            }
            if (u) {
              n.bindTexture(34067, h.__webglTexture), $(34067, l, p);
              for (let t = 0; t < 6; t++)
                rt(c.__webglFramebuffer[t], e, l, 36064, 34069 + t);
              U(l, p) && G(34067), n.unbindTexture();
            } else if (d) {
              const t = e.texture;
              for (let r = 0, s = t.length; r < s; r++) {
                const s = t[r],
                  a = i.get(s);
                n.bindTexture(3553, a.__webglTexture),
                  $(3553, s, p),
                  rt(c.__webglFramebuffer, e, s, 36064 + r, 3553),
                  U(s, p) && G(3553);
              }
              n.unbindTexture();
            } else {
              let t = 3553;
              (e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
                (o
                  ? (t = e.isWebGL3DRenderTarget ? 32879 : 35866)
                  : console.error(
                      "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
                    )),
                n.bindTexture(t, h.__webglTexture),
                $(t, l, p),
                rt(c.__webglFramebuffer, e, l, 36064, t),
                U(l, p) && G(t),
                n.unbindTexture();
            }
            e.depthBuffer && at(e);
          }),
          (this.updateRenderTargetMipmap = function (t) {
            const e = B(t) || o,
              r =
                !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
            for (let s = 0, a = r.length; s < a; s++) {
              const a = r[s];
              if (U(a, e)) {
                const e = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                  r = i.get(a).__webglTexture;
                n.bindTexture(e, r), G(e), n.unbindTexture();
              }
            }
          }),
          (this.updateMultisampleRenderTarget = function (e) {
            if (o && e.samples > 0 && !1 === ct(e)) {
              const r = e.width,
                s = e.height;
              let a = 16384;
              const o = [36064],
                l = e.stencilBuffer ? 33306 : 36096;
              e.depthBuffer && o.push(l);
              const c = i.get(e),
                h = void 0 !== c.__ignoreDepthValues && c.__ignoreDepthValues;
              !1 === h &&
                (e.depthBuffer && (a |= 256), e.stencilBuffer && (a |= 1024)),
                n.bindFramebuffer(36008, c.__webglMultisampledFramebuffer),
                n.bindFramebuffer(36009, c.__webglFramebuffer),
                !0 === h &&
                  (t.invalidateFramebuffer(36008, [l]),
                  t.invalidateFramebuffer(36009, [l])),
                t.blitFramebuffer(0, 0, r, s, 0, 0, r, s, a, 9728),
                L && t.invalidateFramebuffer(36008, o),
                n.bindFramebuffer(36008, null),
                n.bindFramebuffer(36009, c.__webglMultisampledFramebuffer);
            }
          }),
          (this.setupDepthRenderbuffer = at),
          (this.setupFrameBufferTexture = rt),
          (this.useMultisampledRTT = ct);
      }
      function gs(t, e, n) {
        const i = n.isWebGL2;
        return {
          convert: function (t, n = null) {
            let r;
            if (t === y) return 5121;
            if (1017 === t) return 32819;
            if (1018 === t) return 32820;
            if (1010 === t) return 5120;
            if (1011 === t) return 5122;
            if (t === _) return 5123;
            if (1013 === t) return 5124;
            if (t === M) return 5125;
            if (t === b) return 5126;
            if (t === w)
              return i
                ? 5131
                : ((r = e.get("OES_texture_half_float")),
                  null !== r ? r.HALF_FLOAT_OES : null);
            if (1021 === t) return 6406;
            if (t === E) return 6408;
            if (1024 === t) return 6409;
            if (1025 === t) return 6410;
            if (t === T) return 6402;
            if (t === A) return 34041;
            if (1028 === t) return 6403;
            if (1022 === t)
              return (
                console.warn(
                  "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
                ),
                6408
              );
            if (t === X)
              return (
                (r = e.get("EXT_sRGB")), null !== r ? r.SRGB_ALPHA_EXT : null
              );
            if (1029 === t) return 36244;
            if (1030 === t) return 33319;
            if (1031 === t) return 33320;
            if (1033 === t) return 36249;
            if (t === R || t === C || t === L || t === P)
              if (n === F) {
                if (
                  ((r = e.get("WEBGL_compressed_texture_s3tc_srgb")),
                  null === r)
                )
                  return null;
                if (t === R) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (t === C) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (t === L) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (t === P) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
                  return null;
                if (t === R) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === C) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === L) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === P) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              }
            if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
              if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
                return null;
              if (35840 === t) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (35841 === t) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (35842 === t) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (35843 === t) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (36196 === t)
              return (
                (r = e.get("WEBGL_compressed_texture_etc1")),
                null !== r ? r.COMPRESSED_RGB_ETC1_WEBGL : null
              );
            if (37492 === t || 37496 === t) {
              if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
                return null;
              if (37492 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ETC2
                  : r.COMPRESSED_RGB8_ETC2;
              if (37496 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
                  : r.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (
              37808 === t ||
              37809 === t ||
              37810 === t ||
              37811 === t ||
              37812 === t ||
              37813 === t ||
              37814 === t ||
              37815 === t ||
              37816 === t ||
              37817 === t ||
              37818 === t ||
              37819 === t ||
              37820 === t ||
              37821 === t
            ) {
              if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
                return null;
              if (37808 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                  : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (37809 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                  : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (37810 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                  : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (37811 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                  : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (37812 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                  : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (37813 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                  : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (37814 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                  : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (37815 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                  : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (37816 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                  : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (37817 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                  : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (37818 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                  : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (37819 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                  : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (37820 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                  : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (37821 === t)
                return n === F
                  ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                  : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (36492 === t) {
              if (((r = e.get("EXT_texture_compression_bptc")), null === r))
                return null;
              if (36492 === t)
                return n === F
                  ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                  : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            }
            return t === S
              ? i
                ? 34042
                : ((r = e.get("WEBGL_depth_texture")),
                  null !== r ? r.UNSIGNED_INT_24_8_WEBGL : null)
              : void 0;
          },
        };
      }
      class vs extends In {
        constructor(t = []) {
          super(), (this.cameras = t);
        }
      }
      vs.prototype.isArrayCamera = !0;
      class xs extends De {
        constructor() {
          super(), (this.type = "Group");
        }
      }
      xs.prototype.isGroup = !0;
      const ys = { type: "move" };
      class _s {
        constructor() {
          (this._targetRay = null), (this._grip = null), (this._hand = null);
        }
        getHandSpace() {
          return (
            null === this._hand &&
              ((this._hand = new xs()),
              (this._hand.matrixAutoUpdate = !1),
              (this._hand.visible = !1),
              (this._hand.joints = {}),
              (this._hand.inputState = { pinching: !1 })),
            this._hand
          );
        }
        getTargetRaySpace() {
          return (
            null === this._targetRay &&
              ((this._targetRay = new xs()),
              (this._targetRay.matrixAutoUpdate = !1),
              (this._targetRay.visible = !1),
              (this._targetRay.hasLinearVelocity = !1),
              (this._targetRay.linearVelocity = new Lt()),
              (this._targetRay.hasAngularVelocity = !1),
              (this._targetRay.angularVelocity = new Lt())),
            this._targetRay
          );
        }
        getGripSpace() {
          return (
            null === this._grip &&
              ((this._grip = new xs()),
              (this._grip.matrixAutoUpdate = !1),
              (this._grip.visible = !1),
              (this._grip.hasLinearVelocity = !1),
              (this._grip.linearVelocity = new Lt()),
              (this._grip.hasAngularVelocity = !1),
              (this._grip.angularVelocity = new Lt())),
            this._grip
          );
        }
        dispatchEvent(t) {
          return (
            null !== this._targetRay && this._targetRay.dispatchEvent(t),
            null !== this._grip && this._grip.dispatchEvent(t),
            null !== this._hand && this._hand.dispatchEvent(t),
            this
          );
        }
        disconnect(t) {
          return (
            this.dispatchEvent({ type: "disconnected", data: t }),
            null !== this._targetRay && (this._targetRay.visible = !1),
            null !== this._grip && (this._grip.visible = !1),
            null !== this._hand && (this._hand.visible = !1),
            this
          );
        }
        update(t, e, n) {
          let i = null,
            r = null,
            s = null;
          const a = this._targetRay,
            o = this._grip,
            l = this._hand;
          if (t && "visible-blurred" !== e.session.visibilityState)
            if (
              (null !== a &&
                ((i = e.getPose(t.targetRaySpace, n)),
                null !== i &&
                  (a.matrix.fromArray(i.transform.matrix),
                  a.matrix.decompose(a.position, a.rotation, a.scale),
                  i.linearVelocity
                    ? ((a.hasLinearVelocity = !0),
                      a.linearVelocity.copy(i.linearVelocity))
                    : (a.hasLinearVelocity = !1),
                  i.angularVelocity
                    ? ((a.hasAngularVelocity = !0),
                      a.angularVelocity.copy(i.angularVelocity))
                    : (a.hasAngularVelocity = !1),
                  this.dispatchEvent(ys))),
              l && t.hand)
            ) {
              s = !0;
              for (const s of t.hand.values()) {
                const t = e.getJointPose(s, n);
                if (void 0 === l.joints[s.jointName]) {
                  const t = new xs();
                  (t.matrixAutoUpdate = !1),
                    (t.visible = !1),
                    (l.joints[s.jointName] = t),
                    l.add(t);
                }
                const i = l.joints[s.jointName];
                null !== t &&
                  (i.matrix.fromArray(t.transform.matrix),
                  i.matrix.decompose(i.position, i.rotation, i.scale),
                  (i.jointRadius = t.radius)),
                  (i.visible = null !== t);
              }
              const i = l.joints["index-finger-tip"],
                r = l.joints["thumb-tip"],
                a = i.position.distanceTo(r.position),
                o = 0.02,
                c = 0.005;
              l.inputState.pinching && a > o + c
                ? ((l.inputState.pinching = !1),
                  this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this,
                  }))
                : !l.inputState.pinching &&
                  a <= o - c &&
                  ((l.inputState.pinching = !0),
                  this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this,
                  }));
            } else
              null !== o &&
                t.gripSpace &&
                ((r = e.getPose(t.gripSpace, n)),
                null !== r &&
                  (o.matrix.fromArray(r.transform.matrix),
                  o.matrix.decompose(o.position, o.rotation, o.scale),
                  r.linearVelocity
                    ? ((o.hasLinearVelocity = !0),
                      o.linearVelocity.copy(r.linearVelocity))
                    : (o.hasLinearVelocity = !1),
                  r.angularVelocity
                    ? ((o.hasAngularVelocity = !0),
                      o.angularVelocity.copy(r.angularVelocity))
                    : (o.hasAngularVelocity = !1)));
          return (
            null !== a && (a.visible = null !== i),
            null !== o && (o.visible = null !== r),
            null !== l && (l.visible = null !== s),
            this
          );
        }
      }
      class Ms extends St {
        constructor(t, e, n, i, r, s, a, o, l, c) {
          if ((c = void 0 !== c ? c : T) !== T && c !== A)
            throw new Error(
              "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
            );
          void 0 === n && c === T && (n = _),
            void 0 === n && c === A && (n = S),
            super(null, i, r, s, a, o, c, n, l),
            (this.image = { width: t, height: e }),
            (this.magFilter = void 0 !== a ? a : f),
            (this.minFilter = void 0 !== o ? o : f),
            (this.flipY = !1),
            (this.generateMipmaps = !1);
        }
      }
      Ms.prototype.isDepthTexture = !0;
      class bs extends J {
        constructor(t, e) {
          super();
          const n = this;
          let i = null,
            r = 1,
            s = null,
            a = "local-floor",
            o = null,
            l = null,
            c = null,
            h = null,
            u = null;
          const d = e.getContextAttributes();
          let p = null,
            f = null;
          const m = [],
            g = new Map(),
            v = new In();
          v.layers.enable(1), (v.viewport = new Et());
          const x = new In();
          x.layers.enable(2), (x.viewport = new Et());
          const M = [v, x],
            b = new vs();
          b.layers.enable(1), b.layers.enable(2);
          let w = null,
            R = null;
          function C(t) {
            const e = g.get(t.inputSource);
            e && e.dispatchEvent({ type: t.type, data: t.inputSource });
          }
          function L() {
            g.forEach(function (t, e) {
              t.disconnect(e);
            }),
              g.clear(),
              (w = null),
              (R = null),
              t.setRenderTarget(p),
              (h = null),
              (c = null),
              (l = null),
              (i = null),
              (f = null),
              z.stop(),
              (n.isPresenting = !1),
              n.dispatchEvent({ type: "sessionend" });
          }
          function P(t) {
            const e = i.inputSources;
            for (let n = 0; n < m.length; n++) g.set(e[n], m[n]);
            for (let n = 0; n < t.removed.length; n++) {
              const e = t.removed[n],
                i = g.get(e);
              i &&
                (i.dispatchEvent({ type: "disconnected", data: e }),
                g.delete(e));
            }
            for (let n = 0; n < t.added.length; n++) {
              const e = t.added[n],
                i = g.get(e);
              i && i.dispatchEvent({ type: "connected", data: e });
            }
          }
          (this.cameraAutoUpdate = !0),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.getController = function (t) {
              let e = m[t];
              return (
                void 0 === e && ((e = new _s()), (m[t] = e)),
                e.getTargetRaySpace()
              );
            }),
            (this.getControllerGrip = function (t) {
              let e = m[t];
              return (
                void 0 === e && ((e = new _s()), (m[t] = e)), e.getGripSpace()
              );
            }),
            (this.getHand = function (t) {
              let e = m[t];
              return (
                void 0 === e && ((e = new _s()), (m[t] = e)), e.getHandSpace()
              );
            }),
            (this.setFramebufferScaleFactor = function (t) {
              (r = t),
                !0 === n.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
                  );
            }),
            (this.setReferenceSpaceType = function (t) {
              (a = t),
                !0 === n.isPresenting &&
                  console.warn(
                    "THREE.WebXRManager: Cannot change reference space type while presenting."
                  );
            }),
            (this.getReferenceSpace = function () {
              return s;
            }),
            (this.getBaseLayer = function () {
              return null !== c ? c : h;
            }),
            (this.getBinding = function () {
              return l;
            }),
            (this.getFrame = function () {
              return u;
            }),
            (this.getSession = function () {
              return i;
            }),
            (this.setSession = async function (o) {
              if (((i = o), null !== i)) {
                if (
                  ((p = t.getRenderTarget()),
                  i.addEventListener("select", C),
                  i.addEventListener("selectstart", C),
                  i.addEventListener("selectend", C),
                  i.addEventListener("squeeze", C),
                  i.addEventListener("squeezestart", C),
                  i.addEventListener("squeezeend", C),
                  i.addEventListener("end", L),
                  i.addEventListener("inputsourceschange", P),
                  !0 !== d.xrCompatible && (await e.makeXRCompatible()),
                  void 0 === i.renderState.layers ||
                    !1 === t.capabilities.isWebGL2)
                ) {
                  const n = {
                    antialias: void 0 !== i.renderState.layers || d.antialias,
                    alpha: d.alpha,
                    depth: d.depth,
                    stencil: d.stencil,
                    framebufferScaleFactor: r,
                  };
                  (h = new XRWebGLLayer(i, e, n)),
                    i.updateRenderState({ baseLayer: h }),
                    (f = new Tt(h.framebufferWidth, h.framebufferHeight, {
                      format: E,
                      type: y,
                      encoding: t.outputEncoding,
                    }));
                } else {
                  let n = null,
                    s = null,
                    a = null;
                  d.depth &&
                    ((a = d.stencil ? 35056 : 33190),
                    (n = d.stencil ? A : T),
                    (s = d.stencil ? S : _));
                  const o = {
                    colorFormat: t.outputEncoding === F ? 35907 : 32856,
                    depthFormat: a,
                    scaleFactor: r,
                  };
                  (l = new XRWebGLBinding(i, e)),
                    (c = l.createProjectionLayer(o)),
                    i.updateRenderState({ layers: [c] }),
                    (f = new Tt(c.textureWidth, c.textureHeight, {
                      format: E,
                      type: y,
                      depthTexture: new Ms(
                        c.textureWidth,
                        c.textureHeight,
                        s,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        n
                      ),
                      stencilBuffer: d.stencil,
                      encoding: t.outputEncoding,
                      samples: d.antialias ? 4 : 0,
                    }));
                  t.properties.get(f).__ignoreDepthValues = c.ignoreDepthValues;
                }
                (f.isXRRenderTarget = !0),
                  this.setFoveation(1),
                  (s = await i.requestReferenceSpace(a)),
                  z.setContext(i),
                  z.start(),
                  (n.isPresenting = !0),
                  n.dispatchEvent({ type: "sessionstart" });
              }
            });
          const D = new Lt(),
            I = new Lt();
          function N(t, e) {
            null === e
              ? t.matrixWorld.copy(t.matrix)
              : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
              t.matrixWorldInverse.copy(t.matrixWorld).invert();
          }
          (this.updateCamera = function (t) {
            if (null === i) return;
            (b.near = x.near = v.near = t.near),
              (b.far = x.far = v.far = t.far),
              (w === b.near && R === b.far) ||
                (i.updateRenderState({ depthNear: b.near, depthFar: b.far }),
                (w = b.near),
                (R = b.far));
            const e = t.parent,
              n = b.cameras;
            N(b, e);
            for (let i = 0; i < n.length; i++) N(n[i], e);
            b.matrixWorld.decompose(b.position, b.quaternion, b.scale),
              t.position.copy(b.position),
              t.quaternion.copy(b.quaternion),
              t.scale.copy(b.scale),
              t.matrix.copy(b.matrix),
              t.matrixWorld.copy(b.matrixWorld);
            const r = t.children;
            for (let i = 0, s = r.length; i < s; i++)
              r[i].updateMatrixWorld(!0);
            2 === n.length
              ? (function (t, e, n) {
                  D.setFromMatrixPosition(e.matrixWorld),
                    I.setFromMatrixPosition(n.matrixWorld);
                  const i = D.distanceTo(I),
                    r = e.projectionMatrix.elements,
                    s = n.projectionMatrix.elements,
                    a = r[14] / (r[10] - 1),
                    o = r[14] / (r[10] + 1),
                    l = (r[9] + 1) / r[5],
                    c = (r[9] - 1) / r[5],
                    h = (r[8] - 1) / r[0],
                    u = (s[8] + 1) / s[0],
                    d = a * h,
                    p = a * u,
                    f = i / (-h + u),
                    m = f * -h;
                  e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                    t.translateX(m),
                    t.translateZ(f),
                    t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                    t.matrixWorldInverse.copy(t.matrixWorld).invert();
                  const g = a + f,
                    v = o + f,
                    x = d - m,
                    y = p + (i - m),
                    _ = ((l * o) / v) * g,
                    M = ((c * o) / v) * g;
                  t.projectionMatrix.makePerspective(x, y, _, M, g, v);
                })(b, v, x)
              : b.projectionMatrix.copy(v.projectionMatrix);
          }),
            (this.getCamera = function () {
              return b;
            }),
            (this.getFoveation = function () {
              return null !== c
                ? c.fixedFoveation
                : null !== h
                ? h.fixedFoveation
                : void 0;
            }),
            (this.setFoveation = function (t) {
              null !== c && (c.fixedFoveation = t),
                null !== h &&
                  void 0 !== h.fixedFoveation &&
                  (h.fixedFoveation = t);
            });
          let O = null;
          const z = new jn();
          z.setAnimationLoop(function (e, n) {
            if (((o = n.getViewerPose(s)), (u = n), null !== o)) {
              const e = o.views;
              null !== h &&
                (t.setRenderTargetFramebuffer(f, h.framebuffer),
                t.setRenderTarget(f));
              let n = !1;
              e.length !== b.cameras.length &&
                ((b.cameras.length = 0), (n = !0));
              for (let i = 0; i < e.length; i++) {
                const r = e[i];
                let s = null;
                if (null !== h) s = h.getViewport(r);
                else {
                  const e = l.getViewSubImage(c, r);
                  (s = e.viewport),
                    0 === i &&
                      (t.setRenderTargetTextures(
                        f,
                        e.colorTexture,
                        c.ignoreDepthValues ? void 0 : e.depthStencilTexture
                      ),
                      t.setRenderTarget(f));
                }
                const a = M[i];
                a.matrix.fromArray(r.transform.matrix),
                  a.projectionMatrix.fromArray(r.projectionMatrix),
                  a.viewport.set(s.x, s.y, s.width, s.height),
                  0 === i && b.matrix.copy(a.matrix),
                  !0 === n && b.cameras.push(a);
              }
            }
            const r = i.inputSources;
            for (let t = 0; t < m.length; t++) {
              const e = m[t],
                i = r[t];
              e.update(i, n, s);
            }
            O && O(e, n), (u = null);
          }),
            (this.setAnimationLoop = function (t) {
              O = t;
            }),
            (this.dispose = function () {});
        }
      }
      function ws(t, e) {
        function n(n, i) {
          (n.opacity.value = i.opacity),
            i.color && n.diffuse.value.copy(i.color),
            i.emissive &&
              n.emissive.value
                .copy(i.emissive)
                .multiplyScalar(i.emissiveIntensity),
            i.map && (n.map.value = i.map),
            i.alphaMap && (n.alphaMap.value = i.alphaMap),
            i.bumpMap &&
              ((n.bumpMap.value = i.bumpMap),
              (n.bumpScale.value = i.bumpScale),
              1 === i.side && (n.bumpScale.value *= -1)),
            i.displacementMap &&
              ((n.displacementMap.value = i.displacementMap),
              (n.displacementScale.value = i.displacementScale),
              (n.displacementBias.value = i.displacementBias)),
            i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
            i.normalMap &&
              ((n.normalMap.value = i.normalMap),
              n.normalScale.value.copy(i.normalScale),
              1 === i.side && n.normalScale.value.negate()),
            i.specularMap && (n.specularMap.value = i.specularMap),
            i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
          const r = e.get(i).envMap;
          if (
            (r &&
              ((n.envMap.value = r),
              (n.flipEnvMap.value =
                r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
              (n.reflectivity.value = i.reflectivity),
              (n.ior.value = i.ior),
              (n.refractionRatio.value = i.refractionRatio)),
            i.lightMap)
          ) {
            n.lightMap.value = i.lightMap;
            const e = !0 !== t.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * e;
          }
          let s, a;
          i.aoMap &&
            ((n.aoMap.value = i.aoMap),
            (n.aoMapIntensity.value = i.aoMapIntensity)),
            i.map
              ? (s = i.map)
              : i.specularMap
              ? (s = i.specularMap)
              : i.displacementMap
              ? (s = i.displacementMap)
              : i.normalMap
              ? (s = i.normalMap)
              : i.bumpMap
              ? (s = i.bumpMap)
              : i.roughnessMap
              ? (s = i.roughnessMap)
              : i.metalnessMap
              ? (s = i.metalnessMap)
              : i.alphaMap
              ? (s = i.alphaMap)
              : i.emissiveMap
              ? (s = i.emissiveMap)
              : i.clearcoatMap
              ? (s = i.clearcoatMap)
              : i.clearcoatNormalMap
              ? (s = i.clearcoatNormalMap)
              : i.clearcoatRoughnessMap
              ? (s = i.clearcoatRoughnessMap)
              : i.specularIntensityMap
              ? (s = i.specularIntensityMap)
              : i.specularColorMap
              ? (s = i.specularColorMap)
              : i.transmissionMap
              ? (s = i.transmissionMap)
              : i.thicknessMap
              ? (s = i.thicknessMap)
              : i.sheenColorMap
              ? (s = i.sheenColorMap)
              : i.sheenRoughnessMap && (s = i.sheenRoughnessMap),
            void 0 !== s &&
              (s.isWebGLRenderTarget && (s = s.texture),
              !0 === s.matrixAutoUpdate && s.updateMatrix(),
              n.uvTransform.value.copy(s.matrix)),
            i.aoMap ? (a = i.aoMap) : i.lightMap && (a = i.lightMap),
            void 0 !== a &&
              (a.isWebGLRenderTarget && (a = a.texture),
              !0 === a.matrixAutoUpdate && a.updateMatrix(),
              n.uv2Transform.value.copy(a.matrix));
        }
        return {
          refreshFogUniforms: function (t, e) {
            t.fogColor.value.copy(e.color),
              e.isFog
                ? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
                : e.isFogExp2 && (t.fogDensity.value = e.density);
          },
          refreshMaterialUniforms: function (t, i, r, s, a) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial
              ? n(t, i)
              : i.isMeshToonMaterial
              ? (n(t, i),
                (function (t, e) {
                  e.gradientMap && (t.gradientMap.value = e.gradientMap);
                })(t, i))
              : i.isMeshPhongMaterial
              ? (n(t, i),
                (function (t, e) {
                  t.specular.value.copy(e.specular),
                    (t.shininess.value = Math.max(e.shininess, 1e-4));
                })(t, i))
              : i.isMeshStandardMaterial
              ? (n(t, i),
                (function (t, n) {
                  (t.roughness.value = n.roughness),
                    (t.metalness.value = n.metalness),
                    n.roughnessMap && (t.roughnessMap.value = n.roughnessMap);
                  n.metalnessMap && (t.metalnessMap.value = n.metalnessMap);
                  e.get(n).envMap &&
                    (t.envMapIntensity.value = n.envMapIntensity);
                })(t, i),
                i.isMeshPhysicalMaterial &&
                  (function (t, e, n) {
                    (t.ior.value = e.ior),
                      e.sheen > 0 &&
                        (t.sheenColor.value
                          .copy(e.sheenColor)
                          .multiplyScalar(e.sheen),
                        (t.sheenRoughness.value = e.sheenRoughness),
                        e.sheenColorMap &&
                          (t.sheenColorMap.value = e.sheenColorMap),
                        e.sheenRoughnessMap &&
                          (t.sheenRoughnessMap.value = e.sheenRoughnessMap));
                    e.clearcoat > 0 &&
                      ((t.clearcoat.value = e.clearcoat),
                      (t.clearcoatRoughness.value = e.clearcoatRoughness),
                      e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
                      e.clearcoatRoughnessMap &&
                        (t.clearcoatRoughnessMap.value =
                          e.clearcoatRoughnessMap),
                      e.clearcoatNormalMap &&
                        (t.clearcoatNormalScale.value.copy(
                          e.clearcoatNormalScale
                        ),
                        (t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                        1 === e.side && t.clearcoatNormalScale.value.negate()));
                    e.transmission > 0 &&
                      ((t.transmission.value = e.transmission),
                      (t.transmissionSamplerMap.value = n.texture),
                      t.transmissionSamplerSize.value.set(n.width, n.height),
                      e.transmissionMap &&
                        (t.transmissionMap.value = e.transmissionMap),
                      (t.thickness.value = e.thickness),
                      e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
                      (t.attenuationDistance.value = e.attenuationDistance),
                      t.attenuationColor.value.copy(e.attenuationColor));
                    (t.specularIntensity.value = e.specularIntensity),
                      t.specularColor.value.copy(e.specularColor),
                      e.specularIntensityMap &&
                        (t.specularIntensityMap.value = e.specularIntensityMap);
                    e.specularColorMap &&
                      (t.specularColorMap.value = e.specularColorMap);
                  })(t, i, a))
              : i.isMeshMatcapMaterial
              ? (n(t, i),
                (function (t, e) {
                  e.matcap && (t.matcap.value = e.matcap);
                })(t, i))
              : i.isMeshDepthMaterial
              ? n(t, i)
              : i.isMeshDistanceMaterial
              ? (n(t, i),
                (function (t, e) {
                  t.referencePosition.value.copy(e.referencePosition),
                    (t.nearDistance.value = e.nearDistance),
                    (t.farDistance.value = e.farDistance);
                })(t, i))
              : i.isMeshNormalMaterial
              ? n(t, i)
              : i.isLineBasicMaterial
              ? ((function (t, e) {
                  t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
                })(t, i),
                i.isLineDashedMaterial &&
                  (function (t, e) {
                    (t.dashSize.value = e.dashSize),
                      (t.totalSize.value = e.dashSize + e.gapSize),
                      (t.scale.value = e.scale);
                  })(t, i))
              : i.isPointsMaterial
              ? (function (t, e, n, i) {
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.size.value = e.size * n),
                    (t.scale.value = 0.5 * i),
                    e.map && (t.map.value = e.map);
                  e.alphaMap && (t.alphaMap.value = e.alphaMap);
                  e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                  let r;
                  e.map ? (r = e.map) : e.alphaMap && (r = e.alphaMap);
                  void 0 !== r &&
                    (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                    t.uvTransform.value.copy(r.matrix));
                })(t, i, r, s)
              : i.isSpriteMaterial
              ? (function (t, e) {
                  t.diffuse.value.copy(e.color),
                    (t.opacity.value = e.opacity),
                    (t.rotation.value = e.rotation),
                    e.map && (t.map.value = e.map);
                  e.alphaMap && (t.alphaMap.value = e.alphaMap);
                  e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
                  let n;
                  e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
                  void 0 !== n &&
                    (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                    t.uvTransform.value.copy(n.matrix));
                })(t, i)
              : i.isShadowMaterial
              ? (t.color.value.copy(i.color), (t.opacity.value = i.opacity))
              : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
          },
        };
      }
      function Ss(t = {}) {
        const e =
            void 0 !== t.canvas
              ? t.canvas
              : (function () {
                  const t = ot("canvas");
                  return (t.style.display = "block"), t;
                })(),
          n = void 0 !== t.context ? t.context : null,
          i = void 0 === t.depth || t.depth,
          s = void 0 === t.stencil || t.stencil,
          a = void 0 !== t.antialias && t.antialias,
          o = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          l = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          c = void 0 !== t.powerPreference ? t.powerPreference : "default",
          h =
            void 0 !== t.failIfMajorPerformanceCaveat &&
            t.failIfMajorPerformanceCaveat;
        let u;
        u =
          void 0 !== t.context
            ? n.getContextAttributes().alpha
            : void 0 !== t.alpha && t.alpha;
        let d = null,
          p = null;
        const f = [],
          m = [];
        (this.domElement = e),
          (this.debug = { checkShaderErrors: !0 }),
          (this.autoClear = !0),
          (this.autoClearColor = !0),
          (this.autoClearDepth = !0),
          (this.autoClearStencil = !0),
          (this.sortObjects = !0),
          (this.clippingPlanes = []),
          (this.localClippingEnabled = !1),
          (this.outputEncoding = H),
          (this.physicallyCorrectLights = !1),
          (this.toneMapping = 0),
          (this.toneMappingExposure = 1);
        const g = this;
        let v = !1,
          _ = 0,
          M = 0,
          S = null,
          T = -1,
          A = null;
        const R = new Et(),
          C = new Et();
        let L = null,
          P = e.width,
          D = e.height,
          I = 1,
          N = null,
          O = null;
        const z = new Et(0, 0, P, D),
          B = new Et(0, 0, P, D);
        let U = !1;
        const F = new Wn();
        let G = !1,
          V = !1,
          k = null;
        const W = new oe(),
          j = new rt(),
          q = new Lt(),
          X = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0,
          };
        function J() {
          return null === S ? I : 1;
        }
        let Y,
          Z,
          K,
          Q,
          $,
          tt,
          et,
          nt,
          st,
          at,
          lt,
          ct,
          ht,
          ut,
          dt,
          pt,
          ft,
          mt,
          gt,
          vt,
          xt,
          yt,
          _t,
          Mt = n;
        function bt(t, n) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i],
              s = e.getContext(r, n);
            if (null !== s) return s;
          }
          return null;
        }
        try {
          const t = {
            alpha: !0,
            depth: i,
            stencil: s,
            antialias: a,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: h,
          };
          if (
            ("setAttribute" in e &&
              e.setAttribute("data-engine", "three.js r139"),
            e.addEventListener("webglcontextlost", At, !1),
            e.addEventListener("webglcontextrestored", Rt, !1),
            null === Mt)
          ) {
            const e = ["webgl2", "webgl", "experimental-webgl"];
            if (
              (!0 === g.isWebGL1Renderer && e.shift(),
              (Mt = bt(e, t)),
              null === Mt)
            )
              throw bt(e)
                ? new Error(
                    "Error creating WebGL context with your selected attributes."
                  )
                : new Error("Error creating WebGL context.");
          }
          void 0 === Mt.getShaderPrecisionFormat &&
            (Mt.getShaderPrecisionFormat = function () {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
        } catch (Gt) {
          throw (console.error("THREE.WebGLRenderer: " + Gt.message), Gt);
        }
        function wt() {
          (Y = new yi(Mt)),
            (Z = new ti(Mt, Y, t)),
            Y.init(Z),
            (yt = new gs(Mt, Y, Z)),
            (K = new fs(Mt, Y, Z)),
            (Q = new bi(Mt)),
            ($ = new ts()),
            (tt = new ms(Mt, Y, K, $, Z, yt, Q)),
            (et = new ni(g)),
            (nt = new xi(g)),
            (st = new qn(Mt, Z)),
            (_t = new Qn(Mt, Y, st, Z)),
            (at = new _i(Mt, st, Q, _t)),
            (lt = new Ai(Mt, at, st, Q)),
            (gt = new Ti(Mt, Z, tt)),
            (pt = new ei($)),
            (ct = new $r(g, et, nt, Y, Z, _t, pt)),
            (ht = new ws(g, $)),
            (ut = new rs()),
            (dt = new hs(Y, Z)),
            (mt = new Kn(g, et, K, lt, u, o)),
            (ft = new ps(g, lt, Z)),
            (vt = new $n(Mt, Y, Q, Z)),
            (xt = new Mi(Mt, Y, Q, Z)),
            (Q.programs = ct.programs),
            (g.capabilities = Z),
            (g.extensions = Y),
            (g.properties = $),
            (g.renderLists = ut),
            (g.shadowMap = ft),
            (g.state = K),
            (g.info = Q);
        }
        wt();
        const St = new bs(g, Mt);
        function At(t) {
          t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            (v = !0);
        }
        function Rt() {
          console.log("THREE.WebGLRenderer: Context Restored."), (v = !1);
          const t = Q.autoReset,
            e = ft.enabled,
            n = ft.autoUpdate,
            i = ft.needsUpdate,
            r = ft.type;
          wt(),
            (Q.autoReset = t),
            (ft.enabled = e),
            (ft.autoUpdate = n),
            (ft.needsUpdate = i),
            (ft.type = r);
        }
        function Ct(t) {
          const e = t.target;
          e.removeEventListener("dispose", Ct),
            (function (t) {
              (function (t) {
                const e = $.get(t).programs;
                void 0 !== e &&
                  (e.forEach(function (t) {
                    ct.releaseProgram(t);
                  }),
                  t.isShaderMaterial && ct.releaseShaderCache(t));
              })(t),
                $.remove(t);
            })(e);
        }
        (this.xr = St),
          (this.getContext = function () {
            return Mt;
          }),
          (this.getContextAttributes = function () {
            return Mt.getContextAttributes();
          }),
          (this.forceContextLoss = function () {
            const t = Y.get("WEBGL_lose_context");
            t && t.loseContext();
          }),
          (this.forceContextRestore = function () {
            const t = Y.get("WEBGL_lose_context");
            t && t.restoreContext();
          }),
          (this.getPixelRatio = function () {
            return I;
          }),
          (this.setPixelRatio = function (t) {
            void 0 !== t && ((I = t), this.setSize(P, D, !1));
          }),
          (this.getSize = function (t) {
            return t.set(P, D);
          }),
          (this.setSize = function (t, n, i) {
            St.isPresenting
              ? console.warn(
                  "THREE.WebGLRenderer: Can't change size while VR device is presenting."
                )
              : ((P = t),
                (D = n),
                (e.width = Math.floor(t * I)),
                (e.height = Math.floor(n * I)),
                !1 !== i &&
                  ((e.style.width = t + "px"), (e.style.height = n + "px")),
                this.setViewport(0, 0, t, n));
          }),
          (this.getDrawingBufferSize = function (t) {
            return t.set(P * I, D * I).floor();
          }),
          (this.setDrawingBufferSize = function (t, n, i) {
            (P = t),
              (D = n),
              (I = i),
              (e.width = Math.floor(t * i)),
              (e.height = Math.floor(n * i)),
              this.setViewport(0, 0, t, n);
          }),
          (this.getCurrentViewport = function (t) {
            return t.copy(R);
          }),
          (this.getViewport = function (t) {
            return t.copy(z);
          }),
          (this.setViewport = function (t, e, n, i) {
            t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
              K.viewport(R.copy(z).multiplyScalar(I).floor());
          }),
          (this.getScissor = function (t) {
            return t.copy(B);
          }),
          (this.setScissor = function (t, e, n, i) {
            t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, i),
              K.scissor(C.copy(B).multiplyScalar(I).floor());
          }),
          (this.getScissorTest = function () {
            return U;
          }),
          (this.setScissorTest = function (t) {
            K.setScissorTest((U = t));
          }),
          (this.setOpaqueSort = function (t) {
            N = t;
          }),
          (this.setTransparentSort = function (t) {
            O = t;
          }),
          (this.getClearColor = function (t) {
            return t.copy(mt.getClearColor());
          }),
          (this.setClearColor = function () {
            mt.setClearColor.apply(mt, arguments);
          }),
          (this.getClearAlpha = function () {
            return mt.getClearAlpha();
          }),
          (this.setClearAlpha = function () {
            mt.setClearAlpha.apply(mt, arguments);
          }),
          (this.clear = function (t = !0, e = !0, n = !0) {
            let i = 0;
            t && (i |= 16384), e && (i |= 256), n && (i |= 1024), Mt.clear(i);
          }),
          (this.clearColor = function () {
            this.clear(!0, !1, !1);
          }),
          (this.clearDepth = function () {
            this.clear(!1, !0, !1);
          }),
          (this.clearStencil = function () {
            this.clear(!1, !1, !0);
          }),
          (this.dispose = function () {
            e.removeEventListener("webglcontextlost", At, !1),
              e.removeEventListener("webglcontextrestored", Rt, !1),
              ut.dispose(),
              dt.dispose(),
              $.dispose(),
              et.dispose(),
              nt.dispose(),
              lt.dispose(),
              _t.dispose(),
              ct.dispose(),
              St.dispose(),
              St.removeEventListener("sessionstart", Dt),
              St.removeEventListener("sessionend", It),
              k && (k.dispose(), (k = null)),
              Nt.stop();
          }),
          (this.renderBufferDirect = function (t, e, n, i, r, s) {
            null === e && (e = X);
            const a = r.isMesh && r.matrixWorld.determinant() < 0,
              o = (function (t, e, n, i, r) {
                !0 !== e.isScene && (e = X);
                tt.resetTextureUnits();
                const s = e.fog,
                  a = i.isMeshStandardMaterial ? e.environment : null,
                  o =
                    null === S
                      ? g.outputEncoding
                      : !0 === S.isXRRenderTarget
                      ? S.texture.encoding
                      : H,
                  l = (i.isMeshStandardMaterial ? nt : et).get(i.envMap || a),
                  c =
                    !0 === i.vertexColors &&
                    !!n.attributes.color &&
                    4 === n.attributes.color.itemSize,
                  h = !!i.normalMap && !!n.attributes.tangent,
                  u = !!n.morphAttributes.position,
                  d = !!n.morphAttributes.normal,
                  f = !!n.morphAttributes.color,
                  m = i.toneMapped ? g.toneMapping : 0,
                  v =
                    n.morphAttributes.position ||
                    n.morphAttributes.normal ||
                    n.morphAttributes.color,
                  x = void 0 !== v ? v.length : 0,
                  y = $.get(i),
                  _ = p.state.lights;
                if (!0 === G && (!0 === V || t !== A)) {
                  const e = t === A && i.id === T;
                  pt.setState(i, t, e);
                }
                let M = !1;
                i.version === y.__version
                  ? (y.needsLights &&
                      y.lightsStateVersion !== _.state.version) ||
                    y.outputEncoding !== o ||
                    (r.isInstancedMesh && !1 === y.instancing)
                    ? (M = !0)
                    : r.isInstancedMesh || !0 !== y.instancing
                    ? r.isSkinnedMesh && !1 === y.skinning
                      ? (M = !0)
                      : r.isSkinnedMesh || !0 !== y.skinning
                      ? y.envMap !== l || (i.fog && y.fog !== s)
                        ? (M = !0)
                        : void 0 === y.numClippingPlanes ||
                          (y.numClippingPlanes === pt.numPlanes &&
                            y.numIntersection === pt.numIntersection)
                        ? (y.vertexAlphas !== c ||
                            y.vertexTangents !== h ||
                            y.morphTargets !== u ||
                            y.morphNormals !== d ||
                            y.morphColors !== f ||
                            y.toneMapping !== m ||
                            (!0 === Z.isWebGL2 && y.morphTargetsCount !== x)) &&
                          (M = !0)
                        : (M = !0)
                      : (M = !0)
                    : (M = !0)
                  : ((M = !0), (y.__version = i.version));
                let b = y.currentProgram;
                !0 === M && (b = Ht(i, e, r));
                let w = !1,
                  E = !1,
                  R = !1;
                const C = b.getUniforms(),
                  L = y.uniforms;
                K.useProgram(b.program) && ((w = !0), (E = !0), (R = !0));
                i.id !== T && ((T = i.id), (E = !0));
                if (w || A !== t) {
                  if (
                    (C.setValue(Mt, "projectionMatrix", t.projectionMatrix),
                    Z.logarithmicDepthBuffer &&
                      C.setValue(
                        Mt,
                        "logDepthBufFC",
                        2 / (Math.log(t.far + 1) / Math.LN2)
                      ),
                    A !== t && ((A = t), (E = !0), (R = !0)),
                    i.isShaderMaterial ||
                      i.isMeshPhongMaterial ||
                      i.isMeshToonMaterial ||
                      i.isMeshStandardMaterial ||
                      i.envMap)
                  ) {
                    const e = C.map.cameraPosition;
                    void 0 !== e &&
                      e.setValue(Mt, q.setFromMatrixPosition(t.matrixWorld));
                  }
                  (i.isMeshPhongMaterial ||
                    i.isMeshToonMaterial ||
                    i.isMeshLambertMaterial ||
                    i.isMeshBasicMaterial ||
                    i.isMeshStandardMaterial ||
                    i.isShaderMaterial) &&
                    C.setValue(
                      Mt,
                      "isOrthographic",
                      !0 === t.isOrthographicCamera
                    ),
                    (i.isMeshPhongMaterial ||
                      i.isMeshToonMaterial ||
                      i.isMeshLambertMaterial ||
                      i.isMeshBasicMaterial ||
                      i.isMeshStandardMaterial ||
                      i.isShaderMaterial ||
                      i.isShadowMaterial ||
                      r.isSkinnedMesh) &&
                      C.setValue(Mt, "viewMatrix", t.matrixWorldInverse);
                }
                if (r.isSkinnedMesh) {
                  C.setOptional(Mt, r, "bindMatrix"),
                    C.setOptional(Mt, r, "bindMatrixInverse");
                  const t = r.skeleton;
                  t &&
                    (Z.floatVertexTextures
                      ? (null === t.boneTexture && t.computeBoneTexture(),
                        C.setValue(Mt, "boneTexture", t.boneTexture, tt),
                        C.setValue(Mt, "boneTextureSize", t.boneTextureSize))
                      : C.setOptional(Mt, t, "boneMatrices"));
                }
                const P = n.morphAttributes;
                (void 0 !== P.position ||
                  void 0 !== P.normal ||
                  (void 0 !== P.color && !0 === Z.isWebGL2)) &&
                  gt.update(r, n, i, b);
                (E || y.receiveShadow !== r.receiveShadow) &&
                  ((y.receiveShadow = r.receiveShadow),
                  C.setValue(Mt, "receiveShadow", r.receiveShadow));
                E &&
                  (C.setValue(Mt, "toneMappingExposure", g.toneMappingExposure),
                  y.needsLights &&
                    ((O = R),
                    ((N = L).ambientLightColor.needsUpdate = O),
                    (N.lightProbe.needsUpdate = O),
                    (N.directionalLights.needsUpdate = O),
                    (N.directionalLightShadows.needsUpdate = O),
                    (N.pointLights.needsUpdate = O),
                    (N.pointLightShadows.needsUpdate = O),
                    (N.spotLights.needsUpdate = O),
                    (N.spotLightShadows.needsUpdate = O),
                    (N.rectAreaLights.needsUpdate = O),
                    (N.hemisphereLights.needsUpdate = O)),
                  s && i.fog && ht.refreshFogUniforms(L, s),
                  ht.refreshMaterialUniforms(L, i, I, D, k),
                  Pr.upload(Mt, y.uniformsList, L, tt));
                var N, O;
                i.isShaderMaterial &&
                  !0 === i.uniformsNeedUpdate &&
                  (Pr.upload(Mt, y.uniformsList, L, tt),
                  (i.uniformsNeedUpdate = !1));
                i.isSpriteMaterial && C.setValue(Mt, "center", r.center);
                return (
                  C.setValue(Mt, "modelViewMatrix", r.modelViewMatrix),
                  C.setValue(Mt, "normalMatrix", r.normalMatrix),
                  C.setValue(Mt, "modelMatrix", r.matrixWorld),
                  b
                );
              })(t, e, n, i, r);
            K.setMaterial(i, a);
            let l = n.index;
            const c = n.attributes.position;
            if (null === l) {
              if (void 0 === c || 0 === c.count) return;
            } else if (0 === l.count) return;
            let h,
              u = 1;
            !0 === i.wireframe && ((l = at.getWireframeAttribute(n)), (u = 2)),
              _t.setup(r, i, o, n, l);
            let d = vt;
            null !== l && ((h = st.get(l)), (d = xt), d.setIndex(h));
            const f = null !== l ? l.count : c.count,
              m = n.drawRange.start * u,
              v = n.drawRange.count * u,
              x = null !== s ? s.start * u : 0,
              y = null !== s ? s.count * u : 1 / 0,
              _ = Math.max(m, x),
              M = Math.min(f, m + v, x + y) - 1,
              b = Math.max(0, M - _ + 1);
            if (0 !== b) {
              if (r.isMesh)
                !0 === i.wireframe
                  ? (K.setLineWidth(i.wireframeLinewidth * J()), d.setMode(1))
                  : d.setMode(4);
              else if (r.isLine) {
                let t = i.linewidth;
                void 0 === t && (t = 1),
                  K.setLineWidth(t * J()),
                  r.isLineSegments
                    ? d.setMode(1)
                    : r.isLineLoop
                    ? d.setMode(2)
                    : d.setMode(3);
              } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
              if (r.isInstancedMesh) d.renderInstances(_, b, r.count);
              else if (n.isInstancedBufferGeometry) {
                const t = Math.min(n.instanceCount, n._maxInstanceCount);
                d.renderInstances(_, b, t);
              } else d.render(_, b);
            }
          }),
          (this.compile = function (t, e) {
            (p = dt.get(t)),
              p.init(),
              m.push(p),
              t.traverseVisible(function (t) {
                t.isLight &&
                  t.layers.test(e.layers) &&
                  (p.pushLight(t), t.castShadow && p.pushShadow(t));
              }),
              p.setupLights(g.physicallyCorrectLights),
              t.traverse(function (e) {
                const n = e.material;
                if (n)
                  if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) {
                      Ht(n[i], t, e);
                    }
                  else Ht(n, t, e);
              }),
              m.pop(),
              (p = null);
          });
        let Pt = null;
        function Dt() {
          Nt.stop();
        }
        function It() {
          Nt.start();
        }
        const Nt = new jn();
        function Ot(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
            else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || F.intersectsSprite(t)) {
                i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
                const e = lt.update(t),
                  r = t.material;
                r.visible && d.push(t, e, r, n, q.z, null);
              }
            } else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (t.isSkinnedMesh &&
                t.skeleton.frame !== Q.render.frame &&
                (t.skeleton.update(), (t.skeleton.frame = Q.render.frame)),
              !t.frustumCulled || F.intersectsObject(t))
            ) {
              i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(W);
              const e = lt.update(t),
                r = t.material;
              if (Array.isArray(r)) {
                const i = e.groups;
                for (let s = 0, a = i.length; s < a; s++) {
                  const a = i[s],
                    o = r[a.materialIndex];
                  o && o.visible && d.push(t, e, o, n, q.z, a);
                }
              } else r.visible && d.push(t, e, r, n, q.z, null);
            }
          const r = t.children;
          for (let s = 0, a = r.length; s < a; s++) Ot(r[s], e, n, i);
        }
        function zt(t, e, n, i) {
          const r = t.opaque,
            s = t.transmissive,
            o = t.transparent;
          p.setupLightsView(n),
            s.length > 0 &&
              (function (t, e, n) {
                const i = Z.isWebGL2;
                null === k &&
                  (k = new Tt(1, 1, {
                    generateMipmaps: !0,
                    type: null !== yt.convert(w) ? w : y,
                    minFilter: x,
                    samples: i && !0 === a ? 4 : 0,
                  }));
                g.getDrawingBufferSize(j),
                  i ? k.setSize(j.x, j.y) : k.setSize(it(j.x), it(j.y));
                const r = g.getRenderTarget();
                g.setRenderTarget(k), g.clear();
                const s = g.toneMapping;
                (g.toneMapping = 0),
                  Bt(t, e, n),
                  (g.toneMapping = s),
                  tt.updateMultisampleRenderTarget(k),
                  tt.updateRenderTargetMipmap(k),
                  g.setRenderTarget(r);
              })(r, e, n),
            i && K.viewport(R.copy(i)),
            r.length > 0 && Bt(r, e, n),
            s.length > 0 && Bt(s, e, n),
            o.length > 0 && Bt(o, e, n),
            K.buffers.depth.setTest(!0),
            K.buffers.depth.setMask(!0),
            K.buffers.color.setMask(!0),
            K.setPolygonOffset(!1);
        }
        function Bt(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, s = t.length; r < s; r++) {
            const s = t[r],
              a = s.object,
              o = s.geometry,
              l = null === i ? s.material : i,
              c = s.group;
            a.layers.test(n.layers) && Ut(a, e, n, o, l, c);
          }
        }
        function Ut(t, e, n, i, s, a) {
          t.onBeforeRender(g, e, n, i, s, a),
            t.modelViewMatrix.multiplyMatrices(
              n.matrixWorldInverse,
              t.matrixWorld
            ),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            s.onBeforeRender(g, e, n, i, t, a),
            !0 === s.transparent && s.side === r
              ? ((s.side = 1),
                (s.needsUpdate = !0),
                g.renderBufferDirect(n, e, i, s, t, a),
                (s.side = 0),
                (s.needsUpdate = !0),
                g.renderBufferDirect(n, e, i, s, t, a),
                (s.side = r))
              : g.renderBufferDirect(n, e, i, s, t, a),
            t.onAfterRender(g, e, n, i, s, a);
        }
        function Ht(t, e, n) {
          !0 !== e.isScene && (e = X);
          const i = $.get(t),
            r = p.state.lights,
            s = p.state.shadowsArray,
            a = r.state.version,
            o = ct.getParameters(t, r.state, s, e, n),
            l = ct.getProgramCacheKey(o);
          let c = i.programs;
          (i.environment = t.isMeshStandardMaterial ? e.environment : null),
            (i.fog = e.fog),
            (i.envMap = (t.isMeshStandardMaterial ? nt : et).get(
              t.envMap || i.environment
            )),
            void 0 === c &&
              (t.addEventListener("dispose", Ct),
              (c = new Map()),
              (i.programs = c));
          let h = c.get(l);
          if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === a)
              return Ft(t, o), h;
          } else
            (o.uniforms = ct.getUniforms(t)),
              t.onBuild(n, o, g),
              t.onBeforeCompile(o, g),
              (h = ct.acquireProgram(o, l)),
              c.set(l, h),
              (i.uniforms = o.uniforms);
          const u = i.uniforms;
          ((t.isShaderMaterial || t.isRawShaderMaterial) &&
            !0 !== t.clipping) ||
            (u.clippingPlanes = pt.uniform),
            Ft(t, o),
            (i.needsLights = (function (t) {
              return (
                t.isMeshLambertMaterial ||
                t.isMeshToonMaterial ||
                t.isMeshPhongMaterial ||
                t.isMeshStandardMaterial ||
                t.isShadowMaterial ||
                (t.isShaderMaterial && !0 === t.lights)
              );
            })(t)),
            (i.lightsStateVersion = a),
            i.needsLights &&
              ((u.ambientLightColor.value = r.state.ambient),
              (u.lightProbe.value = r.state.probe),
              (u.directionalLights.value = r.state.directional),
              (u.directionalLightShadows.value = r.state.directionalShadow),
              (u.spotLights.value = r.state.spot),
              (u.spotLightShadows.value = r.state.spotShadow),
              (u.rectAreaLights.value = r.state.rectArea),
              (u.ltc_1.value = r.state.rectAreaLTC1),
              (u.ltc_2.value = r.state.rectAreaLTC2),
              (u.pointLights.value = r.state.point),
              (u.pointLightShadows.value = r.state.pointShadow),
              (u.hemisphereLights.value = r.state.hemi),
              (u.directionalShadowMap.value = r.state.directionalShadowMap),
              (u.directionalShadowMatrix.value =
                r.state.directionalShadowMatrix),
              (u.spotShadowMap.value = r.state.spotShadowMap),
              (u.spotShadowMatrix.value = r.state.spotShadowMatrix),
              (u.pointShadowMap.value = r.state.pointShadowMap),
              (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
          const d = h.getUniforms(),
            f = Pr.seqWithValue(d.seq, u);
          return (i.currentProgram = h), (i.uniformsList = f), h;
        }
        function Ft(t, e) {
          const n = $.get(t);
          (n.outputEncoding = e.outputEncoding),
            (n.instancing = e.instancing),
            (n.skinning = e.skinning),
            (n.morphTargets = e.morphTargets),
            (n.morphNormals = e.morphNormals),
            (n.morphColors = e.morphColors),
            (n.morphTargetsCount = e.morphTargetsCount),
            (n.numClippingPlanes = e.numClippingPlanes),
            (n.numIntersection = e.numClipIntersection),
            (n.vertexAlphas = e.vertexAlphas),
            (n.vertexTangents = e.vertexTangents),
            (n.toneMapping = e.toneMapping);
        }
        Nt.setAnimationLoop(function (t) {
          Pt && Pt(t);
        }),
          "undefined" !== typeof self && Nt.setContext(self),
          (this.setAnimationLoop = function (t) {
            (Pt = t),
              St.setAnimationLoop(t),
              null === t ? Nt.stop() : Nt.start();
          }),
          St.addEventListener("sessionstart", Dt),
          St.addEventListener("sessionend", It),
          (this.render = function (t, e) {
            if (void 0 !== e && !0 !== e.isCamera)
              return void console.error(
                "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
              );
            if (!0 === v) return;
            !0 === t.autoUpdate && t.updateMatrixWorld(),
              null === e.parent && e.updateMatrixWorld(),
              !0 === St.enabled &&
                !0 === St.isPresenting &&
                (!0 === St.cameraAutoUpdate && St.updateCamera(e),
                (e = St.getCamera())),
              !0 === t.isScene && t.onBeforeRender(g, t, e, S),
              (p = dt.get(t, m.length)),
              p.init(),
              m.push(p),
              W.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
              F.setFromProjectionMatrix(W),
              (V = this.localClippingEnabled),
              (G = pt.init(this.clippingPlanes, V, e)),
              (d = ut.get(t, f.length)),
              d.init(),
              f.push(d),
              Ot(t, e, 0, g.sortObjects),
              d.finish(),
              !0 === g.sortObjects && d.sort(N, O),
              !0 === G && pt.beginShadows();
            const n = p.state.shadowsArray;
            if (
              (ft.render(n, t, e),
              !0 === G && pt.endShadows(),
              !0 === this.info.autoReset && this.info.reset(),
              mt.render(d, t),
              p.setupLights(g.physicallyCorrectLights),
              e.isArrayCamera)
            ) {
              const n = e.cameras;
              for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                zt(d, t, i, i.viewport);
              }
            } else zt(d, t, e);
            null !== S &&
              (tt.updateMultisampleRenderTarget(S),
              tt.updateRenderTargetMipmap(S)),
              !0 === t.isScene && t.onAfterRender(g, t, e),
              _t.resetDefaultState(),
              (T = -1),
              (A = null),
              m.pop(),
              (p = m.length > 0 ? m[m.length - 1] : null),
              f.pop(),
              (d = f.length > 0 ? f[f.length - 1] : null);
          }),
          (this.getActiveCubeFace = function () {
            return _;
          }),
          (this.getActiveMipmapLevel = function () {
            return M;
          }),
          (this.getRenderTarget = function () {
            return S;
          }),
          (this.setRenderTargetTextures = function (t, e, n) {
            ($.get(t.texture).__webglTexture = e),
              ($.get(t.depthTexture).__webglTexture = n);
            const i = $.get(t);
            (i.__hasExternalTextures = !0),
              i.__hasExternalTextures &&
                ((i.__autoAllocateDepthBuffer = void 0 === n),
                i.__autoAllocateDepthBuffer ||
                  (!0 === Y.has("WEBGL_multisampled_render_to_texture") &&
                    (console.warn(
                      "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                    ),
                    (i.__useRenderToTexture = !1))));
          }),
          (this.setRenderTargetFramebuffer = function (t, e) {
            const n = $.get(t);
            (n.__webglFramebuffer = e),
              (n.__useDefaultFramebuffer = void 0 === e);
          }),
          (this.setRenderTarget = function (t, e = 0, n = 0) {
            (S = t), (_ = e), (M = n);
            let i = !0;
            if (t) {
              const e = $.get(t);
              void 0 !== e.__useDefaultFramebuffer
                ? (K.bindFramebuffer(36160, null), (i = !1))
                : void 0 === e.__webglFramebuffer
                ? tt.setupRenderTarget(t)
                : e.__hasExternalTextures &&
                  tt.rebindTextures(
                    t,
                    $.get(t.texture).__webglTexture,
                    $.get(t.depthTexture).__webglTexture
                  );
            }
            let r = null,
              s = !1,
              a = !1;
            if (t) {
              const n = t.texture;
              (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
              const i = $.get(t).__webglFramebuffer;
              t.isWebGLCubeRenderTarget
                ? ((r = i[e]), (s = !0))
                : (r =
                    Z.isWebGL2 &&
                    t.samples > 0 &&
                    !1 === tt.useMultisampledRTT(t)
                      ? $.get(t).__webglMultisampledFramebuffer
                      : i),
                R.copy(t.viewport),
                C.copy(t.scissor),
                (L = t.scissorTest);
            } else
              R.copy(z).multiplyScalar(I).floor(),
                C.copy(B).multiplyScalar(I).floor(),
                (L = U);
            if (
              (K.bindFramebuffer(36160, r) &&
                Z.drawBuffers &&
                i &&
                K.drawBuffers(t, r),
              K.viewport(R),
              K.scissor(C),
              K.setScissorTest(L),
              s)
            ) {
              const i = $.get(t.texture);
              Mt.framebufferTexture2D(
                36160,
                36064,
                34069 + e,
                i.__webglTexture,
                n
              );
            } else if (a) {
              const i = $.get(t.texture),
                r = e || 0;
              Mt.framebufferTextureLayer(
                36160,
                36064,
                i.__webglTexture,
                n || 0,
                r
              );
            }
            T = -1;
          }),
          (this.readRenderTargetPixels = function (t, e, n, i, r, s, a) {
            if (!t || !t.isWebGLRenderTarget)
              return void console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
              );
            let o = $.get(t).__webglFramebuffer;
            if ((t.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o)) {
              K.bindFramebuffer(36160, o);
              try {
                const a = t.texture,
                  o = a.format,
                  l = a.type;
                if (o !== E && yt.convert(o) !== Mt.getParameter(35739))
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  );
                const c =
                  l === w &&
                  (Y.has("EXT_color_buffer_half_float") ||
                    (Z.isWebGL2 && Y.has("EXT_color_buffer_float")));
                if (
                  l !== y &&
                  yt.convert(l) !== Mt.getParameter(35738) &&
                  (l !== b ||
                    !(
                      Z.isWebGL2 ||
                      Y.has("OES_texture_float") ||
                      Y.has("WEBGL_color_buffer_float")
                    )) &&
                  !c
                )
                  return void console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  );
                e >= 0 &&
                  e <= t.width - i &&
                  n >= 0 &&
                  n <= t.height - r &&
                  Mt.readPixels(e, n, i, r, yt.convert(o), yt.convert(l), s);
              } finally {
                const t = null !== S ? $.get(S).__webglFramebuffer : null;
                K.bindFramebuffer(36160, t);
              }
            }
          }),
          (this.copyFramebufferToTexture = function (t, e, n = 0) {
            if (!0 !== e.isFramebufferTexture)
              return void console.error(
                "THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture."
              );
            const i = Math.pow(2, -n),
              r = Math.floor(e.image.width * i),
              s = Math.floor(e.image.height * i);
            tt.setTexture2D(e, 0),
              Mt.copyTexSubImage2D(3553, n, 0, 0, t.x, t.y, r, s),
              K.unbindTexture();
          }),
          (this.copyTextureToTexture = function (t, e, n, i = 0) {
            const r = e.image.width,
              s = e.image.height,
              a = yt.convert(n.format),
              o = yt.convert(n.type);
            tt.setTexture2D(n, 0),
              Mt.pixelStorei(37440, n.flipY),
              Mt.pixelStorei(37441, n.premultiplyAlpha),
              Mt.pixelStorei(3317, n.unpackAlignment),
              e.isDataTexture
                ? Mt.texSubImage2D(3553, i, t.x, t.y, r, s, a, o, e.image.data)
                : e.isCompressedTexture
                ? Mt.compressedTexSubImage2D(
                    3553,
                    i,
                    t.x,
                    t.y,
                    e.mipmaps[0].width,
                    e.mipmaps[0].height,
                    a,
                    e.mipmaps[0].data
                  )
                : Mt.texSubImage2D(3553, i, t.x, t.y, a, o, e.image),
              0 === i && n.generateMipmaps && Mt.generateMipmap(3553),
              K.unbindTexture();
          }),
          (this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
            if (g.isWebGL1Renderer)
              return void console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
              );
            const s = t.max.x - t.min.x + 1,
              a = t.max.y - t.min.y + 1,
              o = t.max.z - t.min.z + 1,
              l = yt.convert(i.format),
              c = yt.convert(i.type);
            let h;
            if (i.isData3DTexture) tt.setTexture3D(i, 0), (h = 32879);
            else {
              if (!i.isDataArrayTexture)
                return void console.warn(
                  "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
                );
              tt.setTexture2DArray(i, 0), (h = 35866);
            }
            Mt.pixelStorei(37440, i.flipY),
              Mt.pixelStorei(37441, i.premultiplyAlpha),
              Mt.pixelStorei(3317, i.unpackAlignment);
            const u = Mt.getParameter(3314),
              d = Mt.getParameter(32878),
              p = Mt.getParameter(3316),
              f = Mt.getParameter(3315),
              m = Mt.getParameter(32877),
              v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
            Mt.pixelStorei(3314, v.width),
              Mt.pixelStorei(32878, v.height),
              Mt.pixelStorei(3316, t.min.x),
              Mt.pixelStorei(3315, t.min.y),
              Mt.pixelStorei(32877, t.min.z),
              n.isDataTexture || n.isData3DTexture
                ? Mt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v.data)
                : n.isCompressedTexture
                ? (console.warn(
                    "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
                  ),
                  Mt.compressedTexSubImage3D(
                    h,
                    r,
                    e.x,
                    e.y,
                    e.z,
                    s,
                    a,
                    o,
                    l,
                    v.data
                  ))
                : Mt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, v),
              Mt.pixelStorei(3314, u),
              Mt.pixelStorei(32878, d),
              Mt.pixelStorei(3316, p),
              Mt.pixelStorei(3315, f),
              Mt.pixelStorei(32877, m),
              0 === r && i.generateMipmaps && Mt.generateMipmap(h),
              K.unbindTexture();
          }),
          (this.initTexture = function (t) {
            tt.setTexture2D(t, 0), K.unbindTexture();
          }),
          (this.resetState = function () {
            (_ = 0), (M = 0), (S = null), K.reset(), _t.reset();
          }),
          "undefined" !== typeof __THREE_DEVTOOLS__ &&
            __THREE_DEVTOOLS__.dispatchEvent(
              new CustomEvent("observe", { detail: this })
            );
      }
      Ss.prototype.isWebGLRenderer = !0;
      (class extends Ss {}.prototype.isWebGL1Renderer = !0);
      class Es {
        constructor(t, e = 25e-5) {
          (this.name = ""), (this.color = new xt(t)), (this.density = e);
        }
        clone() {
          return new Es(this.color, this.density);
        }
        toJSON() {
          return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density,
          };
        }
      }
      Es.prototype.isFogExp2 = !0;
      class Ts {
        constructor(t, e = 1, n = 1e3) {
          (this.name = ""),
            (this.color = new xt(t)),
            (this.near = e),
            (this.far = n);
        }
        clone() {
          return new Ts(this.color, this.near, this.far);
        }
        toJSON() {
          return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far,
          };
        }
      }
      Ts.prototype.isFog = !0;
      class As extends De {
        constructor() {
          super(),
            (this.type = "Scene"),
            (this.background = null),
            (this.environment = null),
            (this.fog = null),
            (this.overrideMaterial = null),
            (this.autoUpdate = !0),
            "undefined" !== typeof __THREE_DEVTOOLS__ &&
              __THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this })
              );
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.environment &&
              (this.environment = t.environment.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial &&
              (this.overrideMaterial = t.overrideMaterial.clone()),
            (this.autoUpdate = t.autoUpdate),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return null !== this.fog && (e.object.fog = this.fog.toJSON()), e;
        }
      }
      As.prototype.isScene = !0;
      class Rs {
        constructor(t, e) {
          (this.array = t),
            (this.stride = e),
            (this.count = void 0 !== t ? t.length / e : 0),
            (this.usage = W),
            (this.updateRange = { offset: 0, count: -1 }),
            (this.version = 0),
            (this.uuid = Q());
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        setUsage(t) {
          return (this.usage = t), this;
        }
        copy(t) {
          return (
            (this.array = new t.array.constructor(t.array)),
            (this.count = t.count),
            (this.stride = t.stride),
            (this.usage = t.usage),
            this
          );
        }
        copyAt(t, e, n) {
          (t *= this.stride), (n *= e.stride);
          for (let i = 0, r = this.stride; i < r; i++)
            this.array[t + i] = e.array[n + i];
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        clone(t) {
          void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid &&
              (this.array.buffer._uuid = Q()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
              (t.arrayBuffers[this.array.buffer._uuid] =
                this.array.slice(0).buffer);
          const e = new this.array.constructor(
              t.arrayBuffers[this.array.buffer._uuid]
            ),
            n = new this.constructor(e, this.stride);
          return n.setUsage(this.usage), n;
        }
        onUpload(t) {
          return (this.onUploadCallback = t), this;
        }
        toJSON(t) {
          return (
            void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
            void 0 === this.array.buffer._uuid &&
              (this.array.buffer._uuid = Q()),
            void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
              (t.arrayBuffers[this.array.buffer._uuid] =
                Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
            {
              uuid: this.uuid,
              buffer: this.array.buffer._uuid,
              type: this.array.constructor.name,
              stride: this.stride,
            }
          );
        }
      }
      Rs.prototype.isInterleavedBuffer = !0;
      const Cs = new Lt();
      class Ls {
        constructor(t, e, n, i = !1) {
          (this.name = ""),
            (this.data = t),
            (this.itemSize = e),
            (this.offset = n),
            (this.normalized = !0 === i);
        }
        get count() {
          return this.data.count;
        }
        get array() {
          return this.data.array;
        }
        set needsUpdate(t) {
          this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.data.count; e < n; e++)
            Cs.fromBufferAttribute(this, e),
              Cs.applyMatrix4(t),
              this.setXYZ(e, Cs.x, Cs.y, Cs.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Cs.fromBufferAttribute(this, e),
              Cs.applyNormalMatrix(t),
              this.setXYZ(e, Cs.x, Cs.y, Cs.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Cs.fromBufferAttribute(this, e),
              Cs.transformDirection(t),
              this.setXYZ(e, Cs.x, Cs.y, Cs.z);
          return this;
        }
        setX(t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset] = e), this
          );
        }
        setY(t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 1] = e), this
          );
        }
        setZ(t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 2] = e), this
          );
        }
        setW(t, e) {
          return (
            (this.data.array[t * this.data.stride + this.offset + 3] = e), this
          );
        }
        getX(t) {
          return this.data.array[t * this.data.stride + this.offset];
        }
        getY(t) {
          return this.data.array[t * this.data.stride + this.offset + 1];
        }
        getZ(t) {
          return this.data.array[t * this.data.stride + this.offset + 2];
        }
        getW(t) {
          return this.data.array[t * this.data.stride + this.offset + 3];
        }
        setXY(t, e, n) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = n),
            this
          );
        }
        setXYZ(t, e, n, i) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = n),
            (this.data.array[t + 2] = i),
            this
          );
        }
        setXYZW(t, e, n, i, r) {
          return (
            (t = t * this.data.stride + this.offset),
            (this.data.array[t + 0] = e),
            (this.data.array[t + 1] = n),
            (this.data.array[t + 2] = i),
            (this.data.array[t + 3] = r),
            this
          );
        }
        clone(t) {
          if (void 0 === t) {
            console.log(
              "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
            );
            const t = [];
            for (let e = 0; e < this.count; e++) {
              const n = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++)
                t.push(this.data.array[n + e]);
            }
            return new Ye(
              new this.array.constructor(t),
              this.itemSize,
              this.normalized
            );
          }
          return (
            void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] &&
              (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
            new Ls(
              t.interleavedBuffers[this.data.uuid],
              this.itemSize,
              this.offset,
              this.normalized
            )
          );
        }
        toJSON(t) {
          if (void 0 === t) {
            console.log(
              "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
            );
            const t = [];
            for (let e = 0; e < this.count; e++) {
              const n = e * this.data.stride + this.offset;
              for (let e = 0; e < this.itemSize; e++)
                t.push(this.data.array[n + e]);
            }
            return {
              itemSize: this.itemSize,
              type: this.array.constructor.name,
              array: t,
              normalized: this.normalized,
            };
          }
          return (
            void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
            void 0 === t.interleavedBuffers[this.data.uuid] &&
              (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
            {
              isInterleavedBufferAttribute: !0,
              itemSize: this.itemSize,
              data: this.data.uuid,
              offset: this.offset,
              normalized: this.normalized,
            }
          );
        }
      }
      Ls.prototype.isInterleavedBufferAttribute = !0;
      class Ps extends je {
        constructor(t) {
          super(),
            (this.type = "SpriteMaterial"),
            (this.color = new xt(16777215)),
            (this.map = null),
            (this.alphaMap = null),
            (this.rotation = 0),
            (this.sizeAttenuation = !0),
            (this.transparent = !0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.rotation = t.rotation),
            (this.sizeAttenuation = t.sizeAttenuation),
            this
          );
        }
      }
      let Ds;
      Ps.prototype.isSpriteMaterial = !0;
      const Is = new Lt(),
        Ns = new Lt(),
        Os = new Lt(),
        zs = new rt(),
        Bs = new rt(),
        Us = new oe(),
        Hs = new Lt(),
        Fs = new Lt(),
        Gs = new Lt(),
        Vs = new rt(),
        ks = new rt(),
        Ws = new rt();
      class js extends De {
        constructor(t) {
          if ((super(), (this.type = "Sprite"), void 0 === Ds)) {
            Ds = new on();
            const t = new Float32Array([
                -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1,
                -0.5, 0.5, 0, 0, 1,
              ]),
              e = new Rs(t, 5);
            Ds.setIndex([0, 1, 2, 0, 2, 3]),
              Ds.setAttribute("position", new Ls(e, 3, 0, !1)),
              Ds.setAttribute("uv", new Ls(e, 2, 3, !1));
          }
          (this.geometry = Ds),
            (this.material = void 0 !== t ? t : new Ps()),
            (this.center = new rt(0.5, 0.5));
        }
        raycast(t, e) {
          null === t.camera &&
            console.error(
              'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
            ),
            Ns.setFromMatrixScale(this.matrixWorld),
            Us.copy(t.camera.matrixWorld),
            this.modelViewMatrix.multiplyMatrices(
              t.camera.matrixWorldInverse,
              this.matrixWorld
            ),
            Os.setFromMatrixPosition(this.modelViewMatrix),
            t.camera.isPerspectiveCamera &&
              !1 === this.material.sizeAttenuation &&
              Ns.multiplyScalar(-Os.z);
          const n = this.material.rotation;
          let i, r;
          0 !== n && ((r = Math.cos(n)), (i = Math.sin(n)));
          const s = this.center;
          qs(Hs.set(-0.5, -0.5, 0), Os, s, Ns, i, r),
            qs(Fs.set(0.5, -0.5, 0), Os, s, Ns, i, r),
            qs(Gs.set(0.5, 0.5, 0), Os, s, Ns, i, r),
            Vs.set(0, 0),
            ks.set(1, 0),
            Ws.set(1, 1);
          let a = t.ray.intersectTriangle(Hs, Fs, Gs, !1, Is);
          if (
            null === a &&
            (qs(Fs.set(-0.5, 0.5, 0), Os, s, Ns, i, r),
            ks.set(0, 1),
            (a = t.ray.intersectTriangle(Hs, Gs, Fs, !1, Is)),
            null === a)
          )
            return;
          const o = t.ray.origin.distanceTo(Is);
          o < t.near ||
            o > t.far ||
            e.push({
              distance: o,
              point: Is.clone(),
              uv: ke.getUV(Is, Hs, Fs, Gs, Vs, ks, Ws, new rt()),
              face: null,
              object: this,
            });
        }
        copy(t) {
          return (
            super.copy(t),
            void 0 !== t.center && this.center.copy(t.center),
            (this.material = t.material),
            this
          );
        }
      }
      function qs(t, e, n, i, r, s) {
        zs.subVectors(t, n).addScalar(0.5).multiply(i),
          void 0 !== r
            ? ((Bs.x = s * zs.x - r * zs.y), (Bs.y = r * zs.x + s * zs.y))
            : Bs.copy(zs),
          t.copy(e),
          (t.x += Bs.x),
          (t.y += Bs.y),
          t.applyMatrix4(Us);
      }
      js.prototype.isSprite = !0;
      const Xs = new Lt(),
        Js = new Et(),
        Ys = new Et(),
        Zs = new Lt(),
        Ks = new oe();
      class Qs extends En {
        constructor(t, e) {
          super(t, e),
            (this.type = "SkinnedMesh"),
            (this.bindMode = "attached"),
            (this.bindMatrix = new oe()),
            (this.bindMatrixInverse = new oe());
        }
        copy(t) {
          return (
            super.copy(t),
            (this.bindMode = t.bindMode),
            this.bindMatrix.copy(t.bindMatrix),
            this.bindMatrixInverse.copy(t.bindMatrixInverse),
            (this.skeleton = t.skeleton),
            this
          );
        }
        bind(t, e) {
          (this.skeleton = t),
            void 0 === e &&
              (this.updateMatrixWorld(!0),
              this.skeleton.calculateInverses(),
              (e = this.matrixWorld)),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
          this.skeleton.pose();
        }
        normalizeSkinWeights() {
          const t = new Et(),
            e = this.geometry.attributes.skinWeight;
          for (let n = 0, i = e.count; n < i; n++) {
            t.fromBufferAttribute(e, n);
            const i = 1 / t.manhattanLength();
            i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
              e.setXYZW(n, t.x, t.y, t.z, t.w);
          }
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t),
            "attached" === this.bindMode
              ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
              : "detached" === this.bindMode
              ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
              : console.warn(
                  "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
                );
        }
        boneTransform(t, e) {
          const n = this.skeleton,
            i = this.geometry;
          Js.fromBufferAttribute(i.attributes.skinIndex, t),
            Ys.fromBufferAttribute(i.attributes.skinWeight, t),
            Xs.copy(e).applyMatrix4(this.bindMatrix),
            e.set(0, 0, 0);
          for (let r = 0; r < 4; r++) {
            const t = Ys.getComponent(r);
            if (0 !== t) {
              const i = Js.getComponent(r);
              Ks.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]),
                e.addScaledVector(Zs.copy(Xs).applyMatrix4(Ks), t);
            }
          }
          return e.applyMatrix4(this.bindMatrixInverse);
        }
      }
      Qs.prototype.isSkinnedMesh = !0;
      class $s extends De {
        constructor() {
          super(), (this.type = "Bone");
        }
      }
      $s.prototype.isBone = !0;
      class ta extends St {
        constructor(
          t = null,
          e = 1,
          n = 1,
          i,
          r,
          s,
          a,
          o,
          l = 1003,
          c = 1003,
          h,
          u
        ) {
          super(null, s, a, o, l, c, i, r, h, u),
            (this.image = { data: t, width: e, height: n }),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      ta.prototype.isDataTexture = !0;
      class ea extends Ye {
        constructor(t, e, n, i = 1) {
          "number" === typeof n &&
            ((i = n),
            (n = !1),
            console.error(
              "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
            )),
            super(t, e, n),
            (this.meshPerAttribute = i);
        }
        copy(t) {
          return (
            super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.meshPerAttribute = this.meshPerAttribute),
            (t.isInstancedBufferAttribute = !0),
            t
          );
        }
      }
      ea.prototype.isInstancedBufferAttribute = !0;
      const na = new oe(),
        ia = new oe(),
        ra = [],
        sa = new En();
      class aa extends En {
        constructor(t, e, n) {
          super(t, e),
            (this.instanceMatrix = new ea(new Float32Array(16 * n), 16)),
            (this.instanceColor = null),
            (this.count = n),
            (this.frustumCulled = !1);
        }
        copy(t) {
          return (
            super.copy(t),
            this.instanceMatrix.copy(t.instanceMatrix),
            null !== t.instanceColor &&
              (this.instanceColor = t.instanceColor.clone()),
            (this.count = t.count),
            this
          );
        }
        getColorAt(t, e) {
          e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
          e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        raycast(t, e) {
          const n = this.matrixWorld,
            i = this.count;
          if (
            ((sa.geometry = this.geometry),
            (sa.material = this.material),
            void 0 !== sa.material)
          )
            for (let r = 0; r < i; r++) {
              this.getMatrixAt(r, na),
                ia.multiplyMatrices(n, na),
                (sa.matrixWorld = ia),
                sa.raycast(t, ra);
              for (let t = 0, n = ra.length; t < n; t++) {
                const n = ra[t];
                (n.instanceId = r), (n.object = this), e.push(n);
              }
              ra.length = 0;
            }
        }
        setColorAt(t, e) {
          null === this.instanceColor &&
            (this.instanceColor = new ea(
              new Float32Array(3 * this.instanceMatrix.count),
              3
            )),
            e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
          e.toArray(this.instanceMatrix.array, 16 * t);
        }
        updateMorphTargets() {}
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      aa.prototype.isInstancedMesh = !0;
      class oa extends je {
        constructor(t) {
          super(),
            (this.type = "LineBasicMaterial"),
            (this.color = new xt(16777215)),
            (this.linewidth = 1),
            (this.linecap = "round"),
            (this.linejoin = "round"),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.linewidth = t.linewidth),
            (this.linecap = t.linecap),
            (this.linejoin = t.linejoin),
            this
          );
        }
      }
      oa.prototype.isLineBasicMaterial = !0;
      const la = new Lt(),
        ca = new Lt(),
        ha = new oe(),
        ua = new ae(),
        da = new Qt();
      class pa extends De {
        constructor(t = new on(), e = new oa()) {
          super(),
            (this.type = "Line"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t) {
          return (
            super.copy(t),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        computeLineDistances() {
          const t = this.geometry;
          if (t.isBufferGeometry)
            if (null === t.index) {
              const e = t.attributes.position,
                n = [0];
              for (let t = 1, i = e.count; t < i; t++)
                la.fromBufferAttribute(e, t - 1),
                  ca.fromBufferAttribute(e, t),
                  (n[t] = n[t - 1]),
                  (n[t] += la.distanceTo(ca));
              t.setAttribute("lineDistance", new Qe(n, 1));
            } else
              console.warn(
                "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
              );
          else
            t.isGeometry &&
              console.error(
                "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
              );
          return this;
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Line.threshold,
            s = n.drawRange;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            da.copy(n.boundingSphere),
            da.applyMatrix4(i),
            (da.radius += r),
            !1 === t.ray.intersectsSphere(da))
          )
            return;
          ha.copy(i).invert(), ua.copy(t.ray).applyMatrix4(ha);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a,
            l = new Lt(),
            c = new Lt(),
            h = new Lt(),
            u = new Lt(),
            d = this.isLineSegments ? 2 : 1;
          if (n.isBufferGeometry) {
            const i = n.index,
              r = n.attributes.position;
            if (null !== i) {
              for (
                let n = Math.max(0, s.start),
                  a = Math.min(i.count, s.start + s.count) - 1;
                n < a;
                n += d
              ) {
                const s = i.getX(n),
                  a = i.getX(n + 1);
                l.fromBufferAttribute(r, s), c.fromBufferAttribute(r, a);
                if (ua.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const d = t.ray.origin.distanceTo(u);
                d < t.near ||
                  d > t.far ||
                  e.push({
                    distance: d,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this,
                  });
              }
            } else {
              for (
                let n = Math.max(0, s.start),
                  i = Math.min(r.count, s.start + s.count) - 1;
                n < i;
                n += d
              ) {
                l.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1);
                if (ua.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const i = t.ray.origin.distanceTo(u);
                i < t.near ||
                  i > t.far ||
                  e.push({
                    distance: i,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this,
                  });
              }
            }
          } else
            n.isGeometry &&
              console.error(
                "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
              );
        }
        updateMorphTargets() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
            const e = t.morphAttributes,
              n = Object.keys(e);
            if (n.length > 0) {
              const t = e[n[0]];
              if (void 0 !== t) {
                (this.morphTargetInfluences = []),
                  (this.morphTargetDictionary = {});
                for (let e = 0, n = t.length; e < n; e++) {
                  const n = t[e].name || String(e);
                  this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[n] = e);
                }
              }
            }
          } else {
            const e = t.morphTargets;
            void 0 !== e &&
              e.length > 0 &&
              console.error(
                "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
              );
          }
        }
      }
      pa.prototype.isLine = !0;
      const fa = new Lt(),
        ma = new Lt();
      class ga extends pa {
        constructor(t, e) {
          super(t, e), (this.type = "LineSegments");
        }
        computeLineDistances() {
          const t = this.geometry;
          if (t.isBufferGeometry)
            if (null === t.index) {
              const e = t.attributes.position,
                n = [];
              for (let t = 0, i = e.count; t < i; t += 2)
                fa.fromBufferAttribute(e, t),
                  ma.fromBufferAttribute(e, t + 1),
                  (n[t] = 0 === t ? 0 : n[t - 1]),
                  (n[t + 1] = n[t] + fa.distanceTo(ma));
              t.setAttribute("lineDistance", new Qe(n, 1));
            } else
              console.warn(
                "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
              );
          else
            t.isGeometry &&
              console.error(
                "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
              );
          return this;
        }
      }
      ga.prototype.isLineSegments = !0;
      class va extends pa {
        constructor(t, e) {
          super(t, e), (this.type = "LineLoop");
        }
      }
      va.prototype.isLineLoop = !0;
      class xa extends je {
        constructor(t) {
          super(),
            (this.type = "PointsMaterial"),
            (this.color = new xt(16777215)),
            (this.map = null),
            (this.alphaMap = null),
            (this.size = 1),
            (this.sizeAttenuation = !0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.alphaMap = t.alphaMap),
            (this.size = t.size),
            (this.sizeAttenuation = t.sizeAttenuation),
            this
          );
        }
      }
      xa.prototype.isPointsMaterial = !0;
      const ya = new oe(),
        _a = new ae(),
        Ma = new Qt(),
        ba = new Lt();
      class wa extends De {
        constructor(t = new on(), e = new xa()) {
          super(),
            (this.type = "Points"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t) {
          return (
            super.copy(t),
            (this.material = t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.matrixWorld,
            r = t.params.Points.threshold,
            s = n.drawRange;
          if (
            (null === n.boundingSphere && n.computeBoundingSphere(),
            Ma.copy(n.boundingSphere),
            Ma.applyMatrix4(i),
            (Ma.radius += r),
            !1 === t.ray.intersectsSphere(Ma))
          )
            return;
          ya.copy(i).invert(), _a.copy(t.ray).applyMatrix4(ya);
          const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            o = a * a;
          if (n.isBufferGeometry) {
            const r = n.index,
              a = n.attributes.position;
            if (null !== r) {
              for (
                let n = Math.max(0, s.start),
                  l = Math.min(r.count, s.start + s.count);
                n < l;
                n++
              ) {
                const s = r.getX(n);
                ba.fromBufferAttribute(a, s), Sa(ba, s, o, i, t, e, this);
              }
            } else {
              for (
                let n = Math.max(0, s.start),
                  r = Math.min(a.count, s.start + s.count);
                n < r;
                n++
              )
                ba.fromBufferAttribute(a, n), Sa(ba, n, o, i, t, e, this);
            }
          } else
            console.error(
              "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
            );
        }
        updateMorphTargets() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
            const e = t.morphAttributes,
              n = Object.keys(e);
            if (n.length > 0) {
              const t = e[n[0]];
              if (void 0 !== t) {
                (this.morphTargetInfluences = []),
                  (this.morphTargetDictionary = {});
                for (let e = 0, n = t.length; e < n; e++) {
                  const n = t[e].name || String(e);
                  this.morphTargetInfluences.push(0),
                    (this.morphTargetDictionary[n] = e);
                }
              }
            }
          } else {
            const e = t.morphTargets;
            void 0 !== e &&
              e.length > 0 &&
              console.error(
                "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
              );
          }
        }
      }
      function Sa(t, e, n, i, r, s, a) {
        const o = _a.distanceSqToPoint(t);
        if (o < n) {
          const n = new Lt();
          _a.closestPointToPoint(t, n), n.applyMatrix4(i);
          const l = r.ray.origin.distanceTo(n);
          if (l < r.near || l > r.far) return;
          s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: e,
            face: null,
            object: a,
          });
        }
      }
      wa.prototype.isPoints = !0;
      (class extends St {
        constructor(t, e, n, i, r, s, a, o, l) {
          super(t, e, n, i, r, s, a, o, l),
            (this.minFilter = void 0 !== s ? s : v),
            (this.magFilter = void 0 !== r ? r : v),
            (this.generateMipmaps = !1);
          const c = this;
          "requestVideoFrameCallback" in t &&
            t.requestVideoFrameCallback(function e() {
              (c.needsUpdate = !0), t.requestVideoFrameCallback(e);
            });
        }
        clone() {
          return new this.constructor(this.image).copy(this);
        }
        update() {
          const t = this.image;
          !1 === "requestVideoFrameCallback" in t &&
            t.readyState >= t.HAVE_CURRENT_DATA &&
            (this.needsUpdate = !0);
        }
      }.prototype.isVideoTexture = !0);
      (class extends St {
        constructor(t, e, n) {
          super({ width: t, height: e }),
            (this.format = n),
            (this.magFilter = f),
            (this.minFilter = f),
            (this.generateMipmaps = !1),
            (this.needsUpdate = !0);
        }
      }.prototype.isFramebufferTexture = !0);
      class Ea extends St {
        constructor(t, e, n, i, r, s, a, o, l, c, h, u) {
          super(null, s, a, o, l, c, i, r, h, u),
            (this.image = { width: e, height: n }),
            (this.mipmaps = t),
            (this.flipY = !1),
            (this.generateMipmaps = !1);
        }
      }
      Ea.prototype.isCompressedTexture = !0;
      (class extends St {
        constructor(t, e, n, i, r, s, a, o, l) {
          super(t, e, n, i, r, s, a, o, l), (this.needsUpdate = !0);
        }
      }.prototype.isCanvasTexture = !0);
      class Ta {
        constructor() {
          (this.type = "Curve"), (this.arcLengthDivisions = 200);
        }
        getPoint() {
          return (
            console.warn("THREE.Curve: .getPoint() not implemented."), null
          );
        }
        getPointAt(t, e) {
          const n = this.getUtoTmapping(t);
          return this.getPoint(n, e);
        }
        getPoints(t = 5) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return e;
        }
        getSpacedPoints(t = 5) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
          return e;
        }
        getLength() {
          const t = this.getLengths();
          return t[t.length - 1];
        }
        getLengths(t = this.arcLengthDivisions) {
          if (
            this.cacheArcLengths &&
            this.cacheArcLengths.length === t + 1 &&
            !this.needsUpdate
          )
            return this.cacheArcLengths;
          this.needsUpdate = !1;
          const e = [];
          let n,
            i = this.getPoint(0),
            r = 0;
          e.push(0);
          for (let s = 1; s <= t; s++)
            (n = this.getPoint(s / t)),
              (r += n.distanceTo(i)),
              e.push(r),
              (i = n);
          return (this.cacheArcLengths = e), e;
        }
        updateArcLengths() {
          (this.needsUpdate = !0), this.getLengths();
        }
        getUtoTmapping(t, e) {
          const n = this.getLengths();
          let i = 0;
          const r = n.length;
          let s;
          s = e || t * n[r - 1];
          let a,
            o = 0,
            l = r - 1;
          for (; o <= l; )
            if (((i = Math.floor(o + (l - o) / 2)), (a = n[i] - s), a < 0))
              o = i + 1;
            else {
              if (!(a > 0)) {
                l = i;
                break;
              }
              l = i - 1;
            }
          if (((i = l), n[i] === s)) return i / (r - 1);
          const c = n[i];
          return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t, e) {
          const n = 1e-4;
          let i = t - n,
            r = t + n;
          i < 0 && (i = 0), r > 1 && (r = 1);
          const s = this.getPoint(i),
            a = this.getPoint(r),
            o = e || (s.isVector2 ? new rt() : new Lt());
          return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t, e) {
          const n = this.getUtoTmapping(t);
          return this.getTangent(n, e);
        }
        computeFrenetFrames(t, e) {
          const n = new Lt(),
            i = [],
            r = [],
            s = [],
            a = new Lt(),
            o = new oe();
          for (let d = 0; d <= t; d++) {
            const e = d / t;
            i[d] = this.getTangentAt(e, new Lt());
          }
          (r[0] = new Lt()), (s[0] = new Lt());
          let l = Number.MAX_VALUE;
          const c = Math.abs(i[0].x),
            h = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
          c <= l && ((l = c), n.set(1, 0, 0)),
            h <= l && ((l = h), n.set(0, 1, 0)),
            u <= l && n.set(0, 0, 1),
            a.crossVectors(i[0], n).normalize(),
            r[0].crossVectors(i[0], a),
            s[0].crossVectors(i[0], r[0]);
          for (let d = 1; d <= t; d++) {
            if (
              ((r[d] = r[d - 1].clone()),
              (s[d] = s[d - 1].clone()),
              a.crossVectors(i[d - 1], i[d]),
              a.length() > Number.EPSILON)
            ) {
              a.normalize();
              const t = Math.acos($(i[d - 1].dot(i[d]), -1, 1));
              r[d].applyMatrix4(o.makeRotationAxis(a, t));
            }
            s[d].crossVectors(i[d], r[d]);
          }
          if (!0 === e) {
            let e = Math.acos($(r[0].dot(r[t]), -1, 1));
            (e /= t), i[0].dot(a.crossVectors(r[0], r[t])) > 0 && (e = -e);
            for (let n = 1; n <= t; n++)
              r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
                s[n].crossVectors(i[n], r[n]);
          }
          return { tangents: i, normals: r, binormals: s };
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (this.arcLengthDivisions = t.arcLengthDivisions), this;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.5,
              type: "Curve",
              generator: "Curve.toJSON",
            },
          };
          return (
            (t.arcLengthDivisions = this.arcLengthDivisions),
            (t.type = this.type),
            t
          );
        }
        fromJSON(t) {
          return (this.arcLengthDivisions = t.arcLengthDivisions), this;
        }
      }
      class Aa extends Ta {
        constructor(
          t = 0,
          e = 0,
          n = 1,
          i = 1,
          r = 0,
          s = 2 * Math.PI,
          a = !1,
          o = 0
        ) {
          super(),
            (this.type = "EllipseCurve"),
            (this.aX = t),
            (this.aY = e),
            (this.xRadius = n),
            (this.yRadius = i),
            (this.aStartAngle = r),
            (this.aEndAngle = s),
            (this.aClockwise = a),
            (this.aRotation = o);
        }
        getPoint(t, e) {
          const n = e || new rt(),
            i = 2 * Math.PI;
          let r = this.aEndAngle - this.aStartAngle;
          const s = Math.abs(r) < Number.EPSILON;
          for (; r < 0; ) r += i;
          for (; r > i; ) r -= i;
          r < Number.EPSILON && (r = s ? 0 : i),
            !0 !== this.aClockwise || s || (r === i ? (r = -i) : (r -= i));
          const a = this.aStartAngle + t * r;
          let o = this.aX + this.xRadius * Math.cos(a),
            l = this.aY + this.yRadius * Math.sin(a);
          if (0 !== this.aRotation) {
            const t = Math.cos(this.aRotation),
              e = Math.sin(this.aRotation),
              n = o - this.aX,
              i = l - this.aY;
            (o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
          }
          return n.set(o, l);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.aX = t.aX),
            (this.aY = t.aY),
            (this.xRadius = t.xRadius),
            (this.yRadius = t.yRadius),
            (this.aStartAngle = t.aStartAngle),
            (this.aEndAngle = t.aEndAngle),
            (this.aClockwise = t.aClockwise),
            (this.aRotation = t.aRotation),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.aX = this.aX),
            (t.aY = this.aY),
            (t.xRadius = this.xRadius),
            (t.yRadius = this.yRadius),
            (t.aStartAngle = this.aStartAngle),
            (t.aEndAngle = this.aEndAngle),
            (t.aClockwise = this.aClockwise),
            (t.aRotation = this.aRotation),
            t
          );
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            (this.aX = t.aX),
            (this.aY = t.aY),
            (this.xRadius = t.xRadius),
            (this.yRadius = t.yRadius),
            (this.aStartAngle = t.aStartAngle),
            (this.aEndAngle = t.aEndAngle),
            (this.aClockwise = t.aClockwise),
            (this.aRotation = t.aRotation),
            this
          );
        }
      }
      Aa.prototype.isEllipseCurve = !0;
      class Ra extends Aa {
        constructor(t, e, n, i, r, s) {
          super(t, e, n, n, i, r, s), (this.type = "ArcCurve");
        }
      }
      function Ca() {
        let t = 0,
          e = 0,
          n = 0,
          i = 0;
        function r(r, s, a, o) {
          (t = r),
            (e = a),
            (n = -3 * r + 3 * s - 2 * a - o),
            (i = 2 * r - 2 * s + a + o);
        }
        return {
          initCatmullRom: function (t, e, n, i, s) {
            r(e, n, s * (n - t), s * (i - e));
          },
          initNonuniformCatmullRom: function (t, e, n, i, s, a, o) {
            let l = (e - t) / s - (n - t) / (s + a) + (n - e) / a,
              c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
            (l *= a), (c *= a), r(e, n, l, c);
          },
          calc: function (r) {
            const s = r * r;
            return t + e * r + n * s + i * (s * r);
          },
        };
      }
      Ra.prototype.isArcCurve = !0;
      const La = new Lt(),
        Pa = new Ca(),
        Da = new Ca(),
        Ia = new Ca();
      class Na extends Ta {
        constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
          super(),
            (this.type = "CatmullRomCurve3"),
            (this.points = t),
            (this.closed = e),
            (this.curveType = n),
            (this.tension = i);
        }
        getPoint(t, e = new Lt()) {
          const n = e,
            i = this.points,
            r = i.length,
            s = (r - (this.closed ? 0 : 1)) * t;
          let a,
            o,
            l = Math.floor(s),
            c = s - l;
          this.closed
            ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
            : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
            this.closed || l > 0
              ? (a = i[(l - 1) % r])
              : (La.subVectors(i[0], i[1]).add(i[0]), (a = La));
          const h = i[l % r],
            u = i[(l + 1) % r];
          if (
            (this.closed || l + 2 < r
              ? (o = i[(l + 2) % r])
              : (La.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = La)),
            "centripetal" === this.curveType || "chordal" === this.curveType)
          ) {
            const t = "chordal" === this.curveType ? 0.5 : 0.25;
            let e = Math.pow(a.distanceToSquared(h), t),
              n = Math.pow(h.distanceToSquared(u), t),
              i = Math.pow(u.distanceToSquared(o), t);
            n < 1e-4 && (n = 1),
              e < 1e-4 && (e = n),
              i < 1e-4 && (i = n),
              Pa.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i),
              Da.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i),
              Ia.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
          } else
            "catmullrom" === this.curveType &&
              (Pa.initCatmullRom(a.x, h.x, u.x, o.x, this.tension),
              Da.initCatmullRom(a.y, h.y, u.y, o.y, this.tension),
              Ia.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
          return n.set(Pa.calc(c), Da.calc(c), Ia.calc(c)), n;
        }
        copy(t) {
          super.copy(t), (this.points = []);
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone());
          }
          return (
            (this.closed = t.closed),
            (this.curveType = t.curveType),
            (this.tension = t.tension),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray());
          }
          return (
            (t.closed = this.closed),
            (t.curveType = this.curveType),
            (t.tension = this.tension),
            t
          );
        }
        fromJSON(t) {
          super.fromJSON(t), (this.points = []);
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(new Lt().fromArray(n));
          }
          return (
            (this.closed = t.closed),
            (this.curveType = t.curveType),
            (this.tension = t.tension),
            this
          );
        }
      }
      function Oa(t, e, n, i, r) {
        const s = 0.5 * (i - e),
          a = 0.5 * (r - n),
          o = t * t;
        return (
          (2 * n - 2 * i + s + a) * (t * o) +
          (-3 * n + 3 * i - 2 * s - a) * o +
          s * t +
          n
        );
      }
      function za(t, e, n, i) {
        return (
          (function (t, e) {
            const n = 1 - t;
            return n * n * e;
          })(t, e) +
          (function (t, e) {
            return 2 * (1 - t) * t * e;
          })(t, n) +
          (function (t, e) {
            return t * t * e;
          })(t, i)
        );
      }
      function Ba(t, e, n, i, r) {
        return (
          (function (t, e) {
            const n = 1 - t;
            return n * n * n * e;
          })(t, e) +
          (function (t, e) {
            const n = 1 - t;
            return 3 * n * n * t * e;
          })(t, n) +
          (function (t, e) {
            return 3 * (1 - t) * t * t * e;
          })(t, i) +
          (function (t, e) {
            return t * t * t * e;
          })(t, r)
        );
      }
      Na.prototype.isCatmullRomCurve3 = !0;
      class Ua extends Ta {
        constructor(t = new rt(), e = new rt(), n = new rt(), i = new rt()) {
          super(),
            (this.type = "CubicBezierCurve"),
            (this.v0 = t),
            (this.v1 = e),
            (this.v2 = n),
            (this.v3 = i);
        }
        getPoint(t, e = new rt()) {
          const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
          return n.set(Ba(t, i.x, r.x, s.x, a.x), Ba(t, i.y, r.y, s.y, a.y)), n;
        }
        copy(t) {
          return (
            super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            (t.v3 = this.v3.toArray()),
            t
          );
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
          );
        }
      }
      Ua.prototype.isCubicBezierCurve = !0;
      class Ha extends Ta {
        constructor(t = new Lt(), e = new Lt(), n = new Lt(), i = new Lt()) {
          super(),
            (this.type = "CubicBezierCurve3"),
            (this.v0 = t),
            (this.v1 = e),
            (this.v2 = n),
            (this.v3 = i);
        }
        getPoint(t, e = new Lt()) {
          const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2,
            a = this.v3;
          return (
            n.set(
              Ba(t, i.x, r.x, s.x, a.x),
              Ba(t, i.y, r.y, s.y, a.y),
              Ba(t, i.z, r.z, s.z, a.z)
            ),
            n
          );
        }
        copy(t) {
          return (
            super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this.v3.copy(t.v3),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            (t.v3 = this.v3.toArray()),
            t
          );
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this.v3.fromArray(t.v3),
            this
          );
        }
      }
      Ha.prototype.isCubicBezierCurve3 = !0;
      class Fa extends Ta {
        constructor(t = new rt(), e = new rt()) {
          super(), (this.type = "LineCurve"), (this.v1 = t), (this.v2 = e);
        }
        getPoint(t, e = new rt()) {
          const n = e;
          return (
            1 === t
              ? n.copy(this.v2)
              : (n.copy(this.v2).sub(this.v1),
                n.multiplyScalar(t).add(this.v1)),
            n
          );
        }
        getPointAt(t, e) {
          return this.getPoint(t, e);
        }
        getTangent(t, e) {
          const n = e || new rt();
          return n.copy(this.v2).sub(this.v1).normalize(), n;
        }
        copy(t) {
          return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
        }
        toJSON() {
          const t = super.toJSON();
          return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }
      }
      Fa.prototype.isLineCurve = !0;
      class Ga extends Ta {
        constructor(t = new rt(), e = new rt(), n = new rt()) {
          super(),
            (this.type = "QuadraticBezierCurve"),
            (this.v0 = t),
            (this.v1 = e),
            (this.v2 = n);
        }
        getPoint(t, e = new rt()) {
          const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
          return n.set(za(t, i.x, r.x, s.x), za(t, i.y, r.y, s.y)), n;
        }
        copy(t) {
          return (
            super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            t
          );
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }
      }
      Ga.prototype.isQuadraticBezierCurve = !0;
      class Va extends Ta {
        constructor(t = new Lt(), e = new Lt(), n = new Lt()) {
          super(),
            (this.type = "QuadraticBezierCurve3"),
            (this.v0 = t),
            (this.v1 = e),
            (this.v2 = n);
        }
        getPoint(t, e = new Lt()) {
          const n = e,
            i = this.v0,
            r = this.v1,
            s = this.v2;
          return (
            n.set(
              za(t, i.x, r.x, s.x),
              za(t, i.y, r.y, s.y),
              za(t, i.z, r.z, s.z)
            ),
            n
          );
        }
        copy(t) {
          return (
            super.copy(t),
            this.v0.copy(t.v0),
            this.v1.copy(t.v1),
            this.v2.copy(t.v2),
            this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.v0 = this.v0.toArray()),
            (t.v1 = this.v1.toArray()),
            (t.v2 = this.v2.toArray()),
            t
          );
        }
        fromJSON(t) {
          return (
            super.fromJSON(t),
            this.v0.fromArray(t.v0),
            this.v1.fromArray(t.v1),
            this.v2.fromArray(t.v2),
            this
          );
        }
      }
      Va.prototype.isQuadraticBezierCurve3 = !0;
      class ka extends Ta {
        constructor(t = []) {
          super(), (this.type = "SplineCurve"), (this.points = t);
        }
        getPoint(t, e = new rt()) {
          const n = e,
            i = this.points,
            r = (i.length - 1) * t,
            s = Math.floor(r),
            a = r - s,
            o = i[0 === s ? s : s - 1],
            l = i[s],
            c = i[s > i.length - 2 ? i.length - 1 : s + 1],
            h = i[s > i.length - 3 ? i.length - 1 : s + 2];
          return n.set(Oa(a, o.x, l.x, c.x, h.x), Oa(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t) {
          super.copy(t), (this.points = []);
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(n.clone());
          }
          return this;
        }
        toJSON() {
          const t = super.toJSON();
          t.points = [];
          for (let e = 0, n = this.points.length; e < n; e++) {
            const n = this.points[e];
            t.points.push(n.toArray());
          }
          return t;
        }
        fromJSON(t) {
          super.fromJSON(t), (this.points = []);
          for (let e = 0, n = t.points.length; e < n; e++) {
            const n = t.points[e];
            this.points.push(new rt().fromArray(n));
          }
          return this;
        }
      }
      ka.prototype.isSplineCurve = !0;
      var Wa = Object.freeze({
        __proto__: null,
        ArcCurve: Ra,
        CatmullRomCurve3: Na,
        CubicBezierCurve: Ua,
        CubicBezierCurve3: Ha,
        EllipseCurve: Aa,
        LineCurve: Fa,
        LineCurve3: class extends Ta {
          constructor(t = new Lt(), e = new Lt()) {
            super(),
              (this.type = "LineCurve3"),
              (this.isLineCurve3 = !0),
              (this.v1 = t),
              (this.v2 = e);
          }
          getPoint(t, e = new Lt()) {
            const n = e;
            return (
              1 === t
                ? n.copy(this.v2)
                : (n.copy(this.v2).sub(this.v1),
                  n.multiplyScalar(t).add(this.v1)),
              n
            );
          }
          getPointAt(t, e) {
            return this.getPoint(t, e);
          }
          copy(t) {
            return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
          }
          toJSON() {
            const t = super.toJSON();
            return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
          }
          fromJSON(t) {
            return (
              super.fromJSON(t),
              this.v1.fromArray(t.v1),
              this.v2.fromArray(t.v2),
              this
            );
          }
        },
        QuadraticBezierCurve: Ga,
        QuadraticBezierCurve3: Va,
        SplineCurve: ka,
      });
      class ja extends Ta {
        constructor() {
          super(),
            (this.type = "CurvePath"),
            (this.curves = []),
            (this.autoClose = !1);
        }
        add(t) {
          this.curves.push(t);
        }
        closePath() {
          const t = this.curves[0].getPoint(0),
            e = this.curves[this.curves.length - 1].getPoint(1);
          t.equals(e) || this.curves.push(new Fa(e, t));
        }
        getPoint(t, e) {
          const n = t * this.getLength(),
            i = this.getCurveLengths();
          let r = 0;
          for (; r < i.length; ) {
            if (i[r] >= n) {
              const t = i[r] - n,
                s = this.curves[r],
                a = s.getLength(),
                o = 0 === a ? 0 : 1 - t / a;
              return s.getPointAt(o, e);
            }
            r++;
          }
          return null;
        }
        getLength() {
          const t = this.getCurveLengths();
          return t[t.length - 1];
        }
        updateArcLengths() {
          (this.needsUpdate = !0),
            (this.cacheLengths = null),
            this.getCurveLengths();
        }
        getCurveLengths() {
          if (
            this.cacheLengths &&
            this.cacheLengths.length === this.curves.length
          )
            return this.cacheLengths;
          const t = [];
          let e = 0;
          for (let n = 0, i = this.curves.length; n < i; n++)
            (e += this.curves[n].getLength()), t.push(e);
          return (this.cacheLengths = t), t;
        }
        getSpacedPoints(t = 40) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t = 12) {
          const e = [];
          let n;
          for (let i = 0, r = this.curves; i < r.length; i++) {
            const s = r[i],
              a = s.isEllipseCurve
                ? 2 * t
                : s.isLineCurve || s.isLineCurve3
                ? 1
                : s.isSplineCurve
                ? t * s.points.length
                : t,
              o = s.getPoints(a);
            for (let t = 0; t < o.length; t++) {
              const i = o[t];
              (n && n.equals(i)) || (e.push(i), (n = i));
            }
          }
          return (
            this.autoClose &&
              e.length > 1 &&
              !e[e.length - 1].equals(e[0]) &&
              e.push(e[0]),
            e
          );
        }
        copy(t) {
          super.copy(t), (this.curves = []);
          for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push(n.clone());
          }
          return (this.autoClose = t.autoClose), this;
        }
        toJSON() {
          const t = super.toJSON();
          (t.autoClose = this.autoClose), (t.curves = []);
          for (let e = 0, n = this.curves.length; e < n; e++) {
            const n = this.curves[e];
            t.curves.push(n.toJSON());
          }
          return t;
        }
        fromJSON(t) {
          super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
          for (let e = 0, n = t.curves.length; e < n; e++) {
            const n = t.curves[e];
            this.curves.push(new Wa[n.type]().fromJSON(n));
          }
          return this;
        }
      }
      class qa extends ja {
        constructor(t) {
          super(),
            (this.type = "Path"),
            (this.currentPoint = new rt()),
            t && this.setFromPoints(t);
        }
        setFromPoints(t) {
          this.moveTo(t[0].x, t[0].y);
          for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
          return this;
        }
        moveTo(t, e) {
          return this.currentPoint.set(t, e), this;
        }
        lineTo(t, e) {
          const n = new Fa(this.currentPoint.clone(), new rt(t, e));
          return this.curves.push(n), this.currentPoint.set(t, e), this;
        }
        quadraticCurveTo(t, e, n, i) {
          const r = new Ga(
            this.currentPoint.clone(),
            new rt(t, e),
            new rt(n, i)
          );
          return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t, e, n, i, r, s) {
          const a = new Ua(
            this.currentPoint.clone(),
            new rt(t, e),
            new rt(n, i),
            new rt(r, s)
          );
          return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t) {
          const e = [this.currentPoint.clone()].concat(t),
            n = new ka(e);
          return (
            this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this
          );
        }
        arc(t, e, n, i, r, s) {
          const a = this.currentPoint.x,
            o = this.currentPoint.y;
          return this.absarc(t + a, e + o, n, i, r, s), this;
        }
        absarc(t, e, n, i, r, s) {
          return this.absellipse(t, e, n, n, i, r, s), this;
        }
        ellipse(t, e, n, i, r, s, a, o) {
          const l = this.currentPoint.x,
            c = this.currentPoint.y;
          return this.absellipse(t + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t, e, n, i, r, s, a, o) {
          const l = new Aa(t, e, n, i, r, s, a, o);
          if (this.curves.length > 0) {
            const t = l.getPoint(0);
            t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
          }
          this.curves.push(l);
          const c = l.getPoint(1);
          return this.currentPoint.copy(c), this;
        }
        copy(t) {
          return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
        }
        toJSON() {
          const t = super.toJSON();
          return (t.currentPoint = this.currentPoint.toArray()), t;
        }
        fromJSON(t) {
          return (
            super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this
          );
        }
      }
      new Lt(), new Lt(), new Lt(), new ke();
      class Xa extends qa {
        constructor(t) {
          super(t), (this.uuid = Q()), (this.type = "Shape"), (this.holes = []);
        }
        getPointsHoles(t) {
          const e = [];
          for (let n = 0, i = this.holes.length; n < i; n++)
            e[n] = this.holes[n].getPoints(t);
          return e;
        }
        extractPoints(t) {
          return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
        }
        copy(t) {
          super.copy(t), (this.holes = []);
          for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push(n.clone());
          }
          return this;
        }
        toJSON() {
          const t = super.toJSON();
          (t.uuid = this.uuid), (t.holes = []);
          for (let e = 0, n = this.holes.length; e < n; e++) {
            const n = this.holes[e];
            t.holes.push(n.toJSON());
          }
          return t;
        }
        fromJSON(t) {
          super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
          for (let e = 0, n = t.holes.length; e < n; e++) {
            const n = t.holes[e];
            this.holes.push(new qa().fromJSON(n));
          }
          return this;
        }
      }
      const Ja = function (t, e, n = 2) {
        const i = e && e.length,
          r = i ? e[0] * n : t.length;
        let s = Ya(t, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (
          (i &&
            (s = (function (t, e, n, i) {
              const r = [];
              let s, a, o, l, c;
              for (s = 0, a = e.length; s < a; s++)
                (o = e[s] * i),
                  (l = s < a - 1 ? e[s + 1] * i : t.length),
                  (c = Ya(t, o, l, i, !1)),
                  c === c.next && (c.steiner = !0),
                  r.push(ao(c));
              for (r.sort(no), s = 0; s < r.length; s++)
                io(r[s], n), (n = Za(n, n.next));
              return n;
            })(t, e, s, n)),
          t.length > 80 * n)
        ) {
          (o = c = t[0]), (l = h = t[1]);
          for (let e = n; e < r; e += n)
            (u = t[e]),
              (d = t[e + 1]),
              u < o && (o = u),
              d < l && (l = d),
              u > c && (c = u),
              d > h && (h = d);
          (p = Math.max(c - o, h - l)), (p = 0 !== p ? 1 / p : 0);
        }
        return Ka(s, a, n, o, l, p), a;
      };
      function Ya(t, e, n, i, r) {
        let s, a;
        if (
          r ===
          (function (t, e, n, i) {
            let r = 0;
            for (let s = e, a = n - i; s < n; s += i)
              (r += (t[a] - t[s]) * (t[s + 1] + t[a + 1])), (a = s);
            return r;
          })(t, e, n, i) >
            0
        )
          for (s = e; s < n; s += i) a = vo(s, t[s], t[s + 1], a);
        else for (s = n - i; s >= e; s -= i) a = vo(s, t[s], t[s + 1], a);
        return a && ho(a, a.next) && (xo(a), (a = a.next)), a;
      }
      function Za(t, e) {
        if (!t) return t;
        e || (e = t);
        let n,
          i = t;
        do {
          if (
            ((n = !1),
            i.steiner || (!ho(i, i.next) && 0 !== co(i.prev, i, i.next)))
          )
            i = i.next;
          else {
            if ((xo(i), (i = e = i.prev), i === i.next)) break;
            n = !0;
          }
        } while (n || i !== e);
        return e;
      }
      function Ka(t, e, n, i, r, s, a) {
        if (!t) return;
        !a &&
          s &&
          (function (t, e, n, i) {
            let r = t;
            do {
              null === r.z && (r.z = so(r.x, r.y, e, n, i)),
                (r.prevZ = r.prev),
                (r.nextZ = r.next),
                (r = r.next);
            } while (r !== t);
            (r.prevZ.nextZ = null),
              (r.prevZ = null),
              (function (t) {
                let e,
                  n,
                  i,
                  r,
                  s,
                  a,
                  o,
                  l,
                  c = 1;
                do {
                  for (n = t, t = null, s = null, a = 0; n; ) {
                    for (
                      a++, i = n, o = 0, e = 0;
                      e < c && (o++, (i = i.nextZ), i);
                      e++
                    );
                    for (l = c; o > 0 || (l > 0 && i); )
                      0 !== o && (0 === l || !i || n.z <= i.z)
                        ? ((r = n), (n = n.nextZ), o--)
                        : ((r = i), (i = i.nextZ), l--),
                        s ? (s.nextZ = r) : (t = r),
                        (r.prevZ = s),
                        (s = r);
                    n = i;
                  }
                  (s.nextZ = null), (c *= 2);
                } while (a > 1);
              })(r);
          })(t, i, r, s);
        let o,
          l,
          c = t;
        for (; t.prev !== t.next; )
          if (((o = t.prev), (l = t.next), s ? $a(t, i, r, s) : Qa(t)))
            e.push(o.i / n),
              e.push(t.i / n),
              e.push(l.i / n),
              xo(t),
              (t = l.next),
              (c = l.next);
          else if ((t = l) === c) {
            a
              ? 1 === a
                ? Ka((t = to(Za(t), e, n)), e, n, i, r, s, 2)
                : 2 === a && eo(t, e, n, i, r, s)
              : Ka(Za(t), e, n, i, r, s, 1);
            break;
          }
      }
      function Qa(t) {
        const e = t.prev,
          n = t,
          i = t.next;
        if (co(e, n, i) >= 0) return !1;
        let r = t.next.next;
        for (; r !== t.prev; ) {
          if (
            oo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) &&
            co(r.prev, r, r.next) >= 0
          )
            return !1;
          r = r.next;
        }
        return !0;
      }
      function $a(t, e, n, i) {
        const r = t.prev,
          s = t,
          a = t.next;
        if (co(r, s, a) >= 0) return !1;
        const o = r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
          l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
          c = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
          h = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
          u = so(o, l, e, n, i),
          d = so(c, h, e, n, i);
        let p = t.prevZ,
          f = t.nextZ;
        for (; p && p.z >= u && f && f.z <= d; ) {
          if (
            p !== t.prev &&
            p !== t.next &&
            oo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
            co(p.prev, p, p.next) >= 0
          )
            return !1;
          if (
            ((p = p.prevZ),
            f !== t.prev &&
              f !== t.next &&
              oo(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
              co(f.prev, f, f.next) >= 0)
          )
            return !1;
          f = f.nextZ;
        }
        for (; p && p.z >= u; ) {
          if (
            p !== t.prev &&
            p !== t.next &&
            oo(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
            co(p.prev, p, p.next) >= 0
          )
            return !1;
          p = p.prevZ;
        }
        for (; f && f.z <= d; ) {
          if (
            f !== t.prev &&
            f !== t.next &&
            oo(r.x, r.y, s.x, s.y, a.x, a.y, f.x, f.y) &&
            co(f.prev, f, f.next) >= 0
          )
            return !1;
          f = f.nextZ;
        }
        return !0;
      }
      function to(t, e, n) {
        let i = t;
        do {
          const r = i.prev,
            s = i.next.next;
          !ho(r, s) &&
            uo(r, i, i.next, s) &&
            mo(r, s) &&
            mo(s, r) &&
            (e.push(r.i / n),
            e.push(i.i / n),
            e.push(s.i / n),
            xo(i),
            xo(i.next),
            (i = t = s)),
            (i = i.next);
        } while (i !== t);
        return Za(i);
      }
      function eo(t, e, n, i, r, s) {
        let a = t;
        do {
          let t = a.next.next;
          for (; t !== a.prev; ) {
            if (a.i !== t.i && lo(a, t)) {
              let o = go(a, t);
              return (
                (a = Za(a, a.next)),
                (o = Za(o, o.next)),
                Ka(a, e, n, i, r, s),
                void Ka(o, e, n, i, r, s)
              );
            }
            t = t.next;
          }
          a = a.next;
        } while (a !== t);
      }
      function no(t, e) {
        return t.x - e.x;
      }
      function io(t, e) {
        if (
          ((e = (function (t, e) {
            let n = e;
            const i = t.x,
              r = t.y;
            let s,
              a = -1 / 0;
            do {
              if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                const t =
                  n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                if (t <= i && t > a) {
                  if (((a = t), t === i)) {
                    if (r === n.y) return n;
                    if (r === n.next.y) return n.next;
                  }
                  s = n.x < n.next.x ? n : n.next;
                }
              }
              n = n.next;
            } while (n !== e);
            if (!s) return null;
            if (i === a) return s;
            const o = s,
              l = s.x,
              c = s.y;
            let h,
              u = 1 / 0;
            n = s;
            do {
              i >= n.x &&
                n.x >= l &&
                i !== n.x &&
                oo(r < c ? i : a, r, l, c, r < c ? a : i, r, n.x, n.y) &&
                ((h = Math.abs(r - n.y) / (i - n.x)),
                mo(n, t) &&
                  (h < u ||
                    (h === u && (n.x > s.x || (n.x === s.x && ro(s, n))))) &&
                  ((s = n), (u = h))),
                (n = n.next);
            } while (n !== o);
            return s;
          })(t, e)),
          e)
        ) {
          const n = go(e, t);
          Za(e, e.next), Za(n, n.next);
        }
      }
      function ro(t, e) {
        return co(t.prev, t, e.prev) < 0 && co(e.next, t, t.next) < 0;
      }
      function so(t, e, n, i, r) {
        return (
          (t =
            1431655765 &
            ((t =
              858993459 &
              ((t =
                252645135 &
                ((t = 16711935 & ((t = 32767 * (t - n) * r) | (t << 8))) |
                  (t << 4))) |
                (t << 2))) |
              (t << 1))) |
          ((e =
            1431655765 &
            ((e =
              858993459 &
              ((e =
                252645135 &
                ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) |
                  (e << 4))) |
                (e << 2))) |
              (e << 1))) <<
            1)
        );
      }
      function ao(t) {
        let e = t,
          n = t;
        do {
          (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
        } while (e !== t);
        return n;
      }
      function oo(t, e, n, i, r, s, a, o) {
        return (
          (r - a) * (e - o) - (t - a) * (s - o) >= 0 &&
          (t - a) * (i - o) - (n - a) * (e - o) >= 0 &&
          (n - a) * (s - o) - (r - a) * (i - o) >= 0
        );
      }
      function lo(t, e) {
        return (
          t.next.i !== e.i &&
          t.prev.i !== e.i &&
          !(function (t, e) {
            let n = t;
            do {
              if (
                n.i !== t.i &&
                n.next.i !== t.i &&
                n.i !== e.i &&
                n.next.i !== e.i &&
                uo(n, n.next, t, e)
              )
                return !0;
              n = n.next;
            } while (n !== t);
            return !1;
          })(t, e) &&
          ((mo(t, e) &&
            mo(e, t) &&
            (function (t, e) {
              let n = t,
                i = !1;
              const r = (t.x + e.x) / 2,
                s = (t.y + e.y) / 2;
              do {
                n.y > s !== n.next.y > s &&
                  n.next.y !== n.y &&
                  r < ((n.next.x - n.x) * (s - n.y)) / (n.next.y - n.y) + n.x &&
                  (i = !i),
                  (n = n.next);
              } while (n !== t);
              return i;
            })(t, e) &&
            (co(t.prev, t, e.prev) || co(t, e.prev, e))) ||
            (ho(t, e) &&
              co(t.prev, t, t.next) > 0 &&
              co(e.prev, e, e.next) > 0))
        );
      }
      function co(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
      }
      function ho(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function uo(t, e, n, i) {
        const r = fo(co(t, e, n)),
          s = fo(co(t, e, i)),
          a = fo(co(n, i, t)),
          o = fo(co(n, i, e));
        return (
          (r !== s && a !== o) ||
          !(0 !== r || !po(t, n, e)) ||
          !(0 !== s || !po(t, i, e)) ||
          !(0 !== a || !po(n, t, i)) ||
          !(0 !== o || !po(n, e, i))
        );
      }
      function po(t, e, n) {
        return (
          e.x <= Math.max(t.x, n.x) &&
          e.x >= Math.min(t.x, n.x) &&
          e.y <= Math.max(t.y, n.y) &&
          e.y >= Math.min(t.y, n.y)
        );
      }
      function fo(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }
      function mo(t, e) {
        return co(t.prev, t, t.next) < 0
          ? co(t, e, t.next) >= 0 && co(t, t.prev, e) >= 0
          : co(t, e, t.prev) < 0 || co(t, t.next, e) < 0;
      }
      function go(t, e) {
        const n = new yo(t.i, t.x, t.y),
          i = new yo(e.i, e.x, e.y),
          r = t.next,
          s = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (n.next = r),
          (r.prev = n),
          (i.next = n),
          (n.prev = i),
          (s.next = i),
          (i.prev = s),
          i
        );
      }
      function vo(t, e, n, i) {
        const r = new yo(t, e, n);
        return (
          i
            ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
            : ((r.prev = r), (r.next = r)),
          r
        );
      }
      function xo(t) {
        (t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }
      function yo(t, e, n) {
        (this.i = t),
          (this.x = e),
          (this.y = n),
          (this.prev = null),
          (this.next = null),
          (this.z = null),
          (this.prevZ = null),
          (this.nextZ = null),
          (this.steiner = !1);
      }
      class _o {
        static area(t) {
          const e = t.length;
          let n = 0;
          for (let i = e - 1, r = 0; r < e; i = r++)
            n += t[i].x * t[r].y - t[r].x * t[i].y;
          return 0.5 * n;
        }
        static isClockWise(t) {
          return _o.area(t) < 0;
        }
        static triangulateShape(t, e) {
          const n = [],
            i = [],
            r = [];
          Mo(t), bo(n, t);
          let s = t.length;
          e.forEach(Mo);
          for (let o = 0; o < e.length; o++)
            i.push(s), (s += e[o].length), bo(n, e[o]);
          const a = Ja(n, i);
          for (let o = 0; o < a.length; o += 3) r.push(a.slice(o, o + 3));
          return r;
        }
      }
      function Mo(t) {
        const e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop();
      }
      function bo(t, e) {
        for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
      }
      class wo extends on {
        constructor(
          t = new Xa([
            new rt(0.5, 0.5),
            new rt(-0.5, 0.5),
            new rt(-0.5, -0.5),
            new rt(0.5, -0.5),
          ]),
          e = {}
        ) {
          super(),
            (this.type = "ExtrudeGeometry"),
            (this.parameters = { shapes: t, options: e }),
            (t = Array.isArray(t) ? t : [t]);
          const n = this,
            i = [],
            r = [];
          for (let a = 0, o = t.length; a < o; a++) {
            s(t[a]);
          }
          function s(t) {
            const s = [],
              a = void 0 !== e.curveSegments ? e.curveSegments : 12,
              o = void 0 !== e.steps ? e.steps : 1;
            let l = void 0 !== e.depth ? e.depth : 1,
              c = void 0 === e.bevelEnabled || e.bevelEnabled,
              h = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2,
              u = void 0 !== e.bevelSize ? e.bevelSize : h - 0.1,
              d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
              p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
            const f = e.extrudePath,
              m = void 0 !== e.UVGenerator ? e.UVGenerator : So;
            void 0 !== e.amount &&
              (console.warn(
                "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
              ),
              (l = e.amount));
            let g,
              v,
              x,
              y,
              _,
              M = !1;
            f &&
              ((g = f.getSpacedPoints(o)),
              (M = !0),
              (c = !1),
              (v = f.computeFrenetFrames(o, !1)),
              (x = new Lt()),
              (y = new Lt()),
              (_ = new Lt())),
              c || ((p = 0), (h = 0), (u = 0), (d = 0));
            const b = t.extractPoints(a);
            let w = b.shape;
            const S = b.holes;
            if (!_o.isClockWise(w)) {
              w = w.reverse();
              for (let t = 0, e = S.length; t < e; t++) {
                const e = S[t];
                _o.isClockWise(e) && (S[t] = e.reverse());
              }
            }
            const E = _o.triangulateShape(w, S),
              T = w;
            for (let e = 0, n = S.length; e < n; e++) {
              const t = S[e];
              w = w.concat(t);
            }
            function A(t, e, n) {
              return (
                e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(n).add(t)
              );
            }
            const R = w.length,
              C = E.length;
            function L(t, e, n) {
              let i, r, s;
              const a = t.x - e.x,
                o = t.y - e.y,
                l = n.x - t.x,
                c = n.y - t.y,
                h = a * a + o * o,
                u = a * c - o * l;
              if (Math.abs(u) > Number.EPSILON) {
                const u = Math.sqrt(h),
                  d = Math.sqrt(l * l + c * c),
                  p = e.x - o / u,
                  f = e.y + a / u,
                  m =
                    ((n.x - c / d - p) * c - (n.y + l / d - f) * l) /
                    (a * c - o * l);
                (i = p + a * m - t.x), (r = f + o * m - t.y);
                const g = i * i + r * r;
                if (g <= 2) return new rt(i, r);
                s = Math.sqrt(g / 2);
              } else {
                let t = !1;
                a > Number.EPSILON
                  ? l > Number.EPSILON && (t = !0)
                  : a < -Number.EPSILON
                  ? l < -Number.EPSILON && (t = !0)
                  : Math.sign(o) === Math.sign(c) && (t = !0),
                  t
                    ? ((i = -o), (r = a), (s = Math.sqrt(h)))
                    : ((i = a), (r = o), (s = Math.sqrt(h / 2)));
              }
              return new rt(i / s, r / s);
            }
            const P = [];
            for (
              let e = 0, n = T.length, i = n - 1, r = e + 1;
              e < n;
              e++, i++, r++
            )
              i === n && (i = 0),
                r === n && (r = 0),
                (P[e] = L(T[e], T[i], T[r]));
            const D = [];
            let I,
              N = P.concat();
            for (let e = 0, n = S.length; e < n; e++) {
              const t = S[e];
              I = [];
              for (
                let e = 0, n = t.length, i = n - 1, r = e + 1;
                e < n;
                e++, i++, r++
              )
                i === n && (i = 0),
                  r === n && (r = 0),
                  (I[e] = L(t[e], t[i], t[r]));
              D.push(I), (N = N.concat(I));
            }
            for (let e = 0; e < p; e++) {
              const t = e / p,
                n = h * Math.cos((t * Math.PI) / 2),
                i = u * Math.sin((t * Math.PI) / 2) + d;
              for (let e = 0, r = T.length; e < r; e++) {
                const t = A(T[e], P[e], i);
                B(t.x, t.y, -n);
              }
              for (let e = 0, r = S.length; e < r; e++) {
                const t = S[e];
                I = D[e];
                for (let e = 0, r = t.length; e < r; e++) {
                  const r = A(t[e], I[e], i);
                  B(r.x, r.y, -n);
                }
              }
            }
            const O = u + d;
            for (let e = 0; e < R; e++) {
              const t = c ? A(w[e], N[e], O) : w[e];
              M
                ? (y.copy(v.normals[0]).multiplyScalar(t.x),
                  x.copy(v.binormals[0]).multiplyScalar(t.y),
                  _.copy(g[0]).add(y).add(x),
                  B(_.x, _.y, _.z))
                : B(t.x, t.y, 0);
            }
            for (let e = 1; e <= o; e++)
              for (let t = 0; t < R; t++) {
                const n = c ? A(w[t], N[t], O) : w[t];
                M
                  ? (y.copy(v.normals[e]).multiplyScalar(n.x),
                    x.copy(v.binormals[e]).multiplyScalar(n.y),
                    _.copy(g[e]).add(y).add(x),
                    B(_.x, _.y, _.z))
                  : B(n.x, n.y, (l / o) * e);
              }
            for (let e = p - 1; e >= 0; e--) {
              const t = e / p,
                n = h * Math.cos((t * Math.PI) / 2),
                i = u * Math.sin((t * Math.PI) / 2) + d;
              for (let e = 0, r = T.length; e < r; e++) {
                const t = A(T[e], P[e], i);
                B(t.x, t.y, l + n);
              }
              for (let e = 0, r = S.length; e < r; e++) {
                const t = S[e];
                I = D[e];
                for (let e = 0, r = t.length; e < r; e++) {
                  const r = A(t[e], I[e], i);
                  M
                    ? B(r.x, r.y + g[o - 1].y, g[o - 1].x + n)
                    : B(r.x, r.y, l + n);
                }
              }
            }
            function z(t, e) {
              let n = t.length;
              for (; --n >= 0; ) {
                const i = n;
                let r = n - 1;
                r < 0 && (r = t.length - 1);
                for (let t = 0, n = o + 2 * p; t < n; t++) {
                  const n = R * t,
                    s = R * (t + 1);
                  H(e + i + n, e + r + n, e + r + s, e + i + s);
                }
              }
            }
            function B(t, e, n) {
              s.push(t), s.push(e), s.push(n);
            }
            function U(t, e, r) {
              F(t), F(e), F(r);
              const s = i.length / 3,
                a = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
              G(a[0]), G(a[1]), G(a[2]);
            }
            function H(t, e, r, s) {
              F(t), F(e), F(s), F(e), F(r), F(s);
              const a = i.length / 3,
                o = m.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
              G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3]);
            }
            function F(t) {
              i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2]);
            }
            function G(t) {
              r.push(t.x), r.push(t.y);
            }
            !(function () {
              const t = i.length / 3;
              if (c) {
                let t = 0,
                  e = R * t;
                for (let n = 0; n < C; n++) {
                  const t = E[n];
                  U(t[2] + e, t[1] + e, t[0] + e);
                }
                (t = o + 2 * p), (e = R * t);
                for (let n = 0; n < C; n++) {
                  const t = E[n];
                  U(t[0] + e, t[1] + e, t[2] + e);
                }
              } else {
                for (let t = 0; t < C; t++) {
                  const e = E[t];
                  U(e[2], e[1], e[0]);
                }
                for (let t = 0; t < C; t++) {
                  const e = E[t];
                  U(e[0] + R * o, e[1] + R * o, e[2] + R * o);
                }
              }
              n.addGroup(t, i.length / 3 - t, 0);
            })(),
              (function () {
                const t = i.length / 3;
                let e = 0;
                z(T, e), (e += T.length);
                for (let n = 0, i = S.length; n < i; n++) {
                  const t = S[n];
                  z(t, e), (e += t.length);
                }
                n.addGroup(t, i.length / 3 - t, 1);
              })();
          }
          this.setAttribute("position", new Qe(i, 3)),
            this.setAttribute("uv", new Qe(r, 2)),
            this.computeVertexNormals();
        }
        toJSON() {
          const t = super.toJSON();
          return (function (t, e, n) {
            if (((n.shapes = []), Array.isArray(t)))
              for (let i = 0, r = t.length; i < r; i++) {
                const e = t[i];
                n.shapes.push(e.uuid);
              }
            else n.shapes.push(t.uuid);
            void 0 !== e.extrudePath &&
              (n.options.extrudePath = e.extrudePath.toJSON());
            return n;
          })(this.parameters.shapes, this.parameters.options, t);
        }
        static fromJSON(t, e) {
          const n = [];
          for (let r = 0, s = t.shapes.length; r < s; r++) {
            const i = e[t.shapes[r]];
            n.push(i);
          }
          const i = t.options.extrudePath;
          return (
            void 0 !== i &&
              (t.options.extrudePath = new Wa[i.type]().fromJSON(i)),
            new wo(n, t.options)
          );
        }
      }
      const So = {
        generateTopUV: function (t, e, n, i, r) {
          const s = e[3 * n],
            a = e[3 * n + 1],
            o = e[3 * i],
            l = e[3 * i + 1],
            c = e[3 * r],
            h = e[3 * r + 1];
          return [new rt(s, a), new rt(o, l), new rt(c, h)];
        },
        generateSideWallUV: function (t, e, n, i, r, s) {
          const a = e[3 * n],
            o = e[3 * n + 1],
            l = e[3 * n + 2],
            c = e[3 * i],
            h = e[3 * i + 1],
            u = e[3 * i + 2],
            d = e[3 * r],
            p = e[3 * r + 1],
            f = e[3 * r + 2],
            m = e[3 * s],
            g = e[3 * s + 1],
            v = e[3 * s + 2];
          return Math.abs(o - h) < Math.abs(a - c)
            ? [
                new rt(a, 1 - l),
                new rt(c, 1 - u),
                new rt(d, 1 - f),
                new rt(m, 1 - v),
              ]
            : [
                new rt(o, 1 - l),
                new rt(h, 1 - u),
                new rt(p, 1 - f),
                new rt(g, 1 - v),
              ];
        },
      };
      class Eo extends on {
        constructor(
          t = new Xa([new rt(0, 0.5), new rt(-0.5, -0.5), new rt(0.5, -0.5)]),
          e = 12
        ) {
          super(),
            (this.type = "ShapeGeometry"),
            (this.parameters = { shapes: t, curveSegments: e });
          const n = [],
            i = [],
            r = [],
            s = [];
          let a = 0,
            o = 0;
          if (!1 === Array.isArray(t)) l(t);
          else
            for (let c = 0; c < t.length; c++)
              l(t[c]), this.addGroup(a, o, c), (a += o), (o = 0);
          function l(t) {
            const a = i.length / 3,
              l = t.extractPoints(e);
            let c = l.shape;
            const h = l.holes;
            !1 === _o.isClockWise(c) && (c = c.reverse());
            for (let e = 0, n = h.length; e < n; e++) {
              const t = h[e];
              !0 === _o.isClockWise(t) && (h[e] = t.reverse());
            }
            const u = _o.triangulateShape(c, h);
            for (let e = 0, n = h.length; e < n; e++) {
              const t = h[e];
              c = c.concat(t);
            }
            for (let e = 0, n = c.length; e < n; e++) {
              const t = c[e];
              i.push(t.x, t.y, 0), r.push(0, 0, 1), s.push(t.x, t.y);
            }
            for (let e = 0, i = u.length; e < i; e++) {
              const t = u[e],
                i = t[0] + a,
                r = t[1] + a,
                s = t[2] + a;
              n.push(i, r, s), (o += 3);
            }
          }
          this.setIndex(n),
            this.setAttribute("position", new Qe(i, 3)),
            this.setAttribute("normal", new Qe(r, 3)),
            this.setAttribute("uv", new Qe(s, 2));
        }
        toJSON() {
          const t = super.toJSON();
          return (function (t, e) {
            if (((e.shapes = []), Array.isArray(t)))
              for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.shapes.push(i.uuid);
              }
            else e.shapes.push(t.uuid);
            return e;
          })(this.parameters.shapes, t);
        }
        static fromJSON(t, e) {
          const n = [];
          for (let i = 0, r = t.shapes.length; i < r; i++) {
            const r = e[t.shapes[i]];
            n.push(r);
          }
          return new Eo(n, t.curveSegments);
        }
      }
      class To extends je {
        constructor(t) {
          super(),
            (this.type = "ShadowMaterial"),
            (this.color = new xt(0)),
            (this.transparent = !0),
            this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this;
        }
      }
      To.prototype.isShadowMaterial = !0;
      class Ao extends Pn {
        constructor(t) {
          super(t), (this.type = "RawShaderMaterial");
        }
      }
      Ao.prototype.isRawShaderMaterial = !0;
      class Ro extends je {
        constructor(t) {
          super(),
            (this.defines = { STANDARD: "" }),
            (this.type = "MeshStandardMaterial"),
            (this.color = new xt(16777215)),
            (this.roughness = 1),
            (this.metalness = 0),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.emissive = new xt(0)),
            (this.emissiveIntensity = 1),
            (this.emissiveMap = null),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = 0),
            (this.normalScale = new rt(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.roughnessMap = null),
            (this.metalnessMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.envMapIntensity = 1),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            (this.flatShading = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.defines = { STANDARD: "" }),
            this.color.copy(t.color),
            (this.roughness = t.roughness),
            (this.metalness = t.metalness),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.roughnessMap = t.roughnessMap),
            (this.metalnessMap = t.metalnessMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.envMapIntensity = t.envMapIntensity),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.flatShading = t.flatShading),
            this
          );
        }
      }
      Ro.prototype.isMeshStandardMaterial = !0;
      class Co extends Ro {
        constructor(t) {
          super(),
            (this.defines = { STANDARD: "", PHYSICAL: "" }),
            (this.type = "MeshPhysicalMaterial"),
            (this.clearcoatMap = null),
            (this.clearcoatRoughness = 0),
            (this.clearcoatRoughnessMap = null),
            (this.clearcoatNormalScale = new rt(1, 1)),
            (this.clearcoatNormalMap = null),
            (this.ior = 1.5),
            Object.defineProperty(this, "reflectivity", {
              get: function () {
                return $((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
              },
              set: function (t) {
                this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
              },
            }),
            (this.sheenColor = new xt(0)),
            (this.sheenColorMap = null),
            (this.sheenRoughness = 1),
            (this.sheenRoughnessMap = null),
            (this.transmissionMap = null),
            (this.thickness = 0),
            (this.thicknessMap = null),
            (this.attenuationDistance = 0),
            (this.attenuationColor = new xt(1, 1, 1)),
            (this.specularIntensity = 1),
            (this.specularIntensityMap = null),
            (this.specularColor = new xt(1, 1, 1)),
            (this.specularColorMap = null),
            (this._sheen = 0),
            (this._clearcoat = 0),
            (this._transmission = 0),
            this.setValues(t);
        }
        get sheen() {
          return this._sheen;
        }
        set sheen(t) {
          this._sheen > 0 !== t > 0 && this.version++, (this._sheen = t);
        }
        get clearcoat() {
          return this._clearcoat;
        }
        set clearcoat(t) {
          this._clearcoat > 0 !== t > 0 && this.version++,
            (this._clearcoat = t);
        }
        get transmission() {
          return this._transmission;
        }
        set transmission(t) {
          this._transmission > 0 !== t > 0 && this.version++,
            (this._transmission = t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.defines = { STANDARD: "", PHYSICAL: "" }),
            (this.clearcoat = t.clearcoat),
            (this.clearcoatMap = t.clearcoatMap),
            (this.clearcoatRoughness = t.clearcoatRoughness),
            (this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
            (this.clearcoatNormalMap = t.clearcoatNormalMap),
            this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
            (this.ior = t.ior),
            (this.sheen = t.sheen),
            this.sheenColor.copy(t.sheenColor),
            (this.sheenColorMap = t.sheenColorMap),
            (this.sheenRoughness = t.sheenRoughness),
            (this.sheenRoughnessMap = t.sheenRoughnessMap),
            (this.transmission = t.transmission),
            (this.transmissionMap = t.transmissionMap),
            (this.thickness = t.thickness),
            (this.thicknessMap = t.thicknessMap),
            (this.attenuationDistance = t.attenuationDistance),
            this.attenuationColor.copy(t.attenuationColor),
            (this.specularIntensity = t.specularIntensity),
            (this.specularIntensityMap = t.specularIntensityMap),
            this.specularColor.copy(t.specularColor),
            (this.specularColorMap = t.specularColorMap),
            this
          );
        }
      }
      Co.prototype.isMeshPhysicalMaterial = !0;
      class Lo extends je {
        constructor(t) {
          super(),
            (this.type = "MeshPhongMaterial"),
            (this.color = new xt(16777215)),
            (this.specular = new xt(1118481)),
            (this.shininess = 30),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.emissive = new xt(0)),
            (this.emissiveIntensity = 1),
            (this.emissiveMap = null),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = 0),
            (this.normalScale = new rt(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = 0),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            (this.flatShading = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            this.specular.copy(t.specular),
            (this.shininess = t.shininess),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.flatShading = t.flatShading),
            this
          );
        }
      }
      Lo.prototype.isMeshPhongMaterial = !0;
      class Po extends je {
        constructor(t) {
          super(),
            (this.defines = { TOON: "" }),
            (this.type = "MeshToonMaterial"),
            (this.color = new xt(16777215)),
            (this.map = null),
            (this.gradientMap = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.emissive = new xt(0)),
            (this.emissiveIntensity = 1),
            (this.emissiveMap = null),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = 0),
            (this.normalScale = new rt(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.alphaMap = null),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.gradientMap = t.gradientMap),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.alphaMap = t.alphaMap),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            this
          );
        }
      }
      Po.prototype.isMeshToonMaterial = !0;
      class Do extends je {
        constructor(t) {
          super(),
            (this.type = "MeshNormalMaterial"),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = 0),
            (this.normalScale = new rt(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.fog = !1),
            (this.flatShading = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.flatShading = t.flatShading),
            this
          );
        }
      }
      Do.prototype.isMeshNormalMaterial = !0;
      class Io extends je {
        constructor(t) {
          super(),
            (this.type = "MeshLambertMaterial"),
            (this.color = new xt(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.emissive = new xt(0)),
            (this.emissiveIntensity = 1),
            (this.emissiveMap = null),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.combine = 0),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            this.emissive.copy(t.emissive),
            (this.emissiveMap = t.emissiveMap),
            (this.emissiveIntensity = t.emissiveIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            this
          );
        }
      }
      Io.prototype.isMeshLambertMaterial = !0;
      class No extends je {
        constructor(t) {
          super(),
            (this.defines = { MATCAP: "" }),
            (this.type = "MeshMatcapMaterial"),
            (this.color = new xt(16777215)),
            (this.matcap = null),
            (this.map = null),
            (this.bumpMap = null),
            (this.bumpScale = 1),
            (this.normalMap = null),
            (this.normalMapType = 0),
            (this.normalScale = new rt(1, 1)),
            (this.displacementMap = null),
            (this.displacementScale = 1),
            (this.displacementBias = 0),
            (this.alphaMap = null),
            (this.flatShading = !1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.defines = { MATCAP: "" }),
            this.color.copy(t.color),
            (this.matcap = t.matcap),
            (this.map = t.map),
            (this.bumpMap = t.bumpMap),
            (this.bumpScale = t.bumpScale),
            (this.normalMap = t.normalMap),
            (this.normalMapType = t.normalMapType),
            this.normalScale.copy(t.normalScale),
            (this.displacementMap = t.displacementMap),
            (this.displacementScale = t.displacementScale),
            (this.displacementBias = t.displacementBias),
            (this.alphaMap = t.alphaMap),
            (this.flatShading = t.flatShading),
            this
          );
        }
      }
      No.prototype.isMeshMatcapMaterial = !0;
      class Oo extends oa {
        constructor(t) {
          super(),
            (this.type = "LineDashedMaterial"),
            (this.scale = 1),
            (this.dashSize = 3),
            (this.gapSize = 1),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.scale = t.scale),
            (this.dashSize = t.dashSize),
            (this.gapSize = t.gapSize),
            this
          );
        }
      }
      Oo.prototype.isLineDashedMaterial = !0;
      const zo = {
        ShadowMaterial: To,
        SpriteMaterial: Ps,
        RawShaderMaterial: Ao,
        ShaderMaterial: Pn,
        PointsMaterial: xa,
        MeshPhysicalMaterial: Co,
        MeshStandardMaterial: Ro,
        MeshPhongMaterial: Lo,
        MeshToonMaterial: Po,
        MeshNormalMaterial: Do,
        MeshLambertMaterial: Io,
        MeshDepthMaterial: us,
        MeshDistanceMaterial: ds,
        MeshBasicMaterial: qe,
        MeshMatcapMaterial: No,
        LineDashedMaterial: Oo,
        LineBasicMaterial: oa,
        Material: je,
      };
      je.fromType = function (t) {
        return new zo[t]();
      };
      const Bo = {
        arraySlice: function (t, e, n) {
          return Bo.isTypedArray(t)
            ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
            : t.slice(e, n);
        },
        convertArray: function (t, e, n) {
          return !t || (!n && t.constructor === e)
            ? t
            : "number" === typeof e.BYTES_PER_ELEMENT
            ? new e(t)
            : Array.prototype.slice.call(t);
        },
        isTypedArray: function (t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView);
        },
        getKeyframeOrder: function (t) {
          const e = t.length,
            n = new Array(e);
          for (let i = 0; i !== e; ++i) n[i] = i;
          return (
            n.sort(function (e, n) {
              return t[e] - t[n];
            }),
            n
          );
        },
        sortedArray: function (t, e, n) {
          const i = t.length,
            r = new t.constructor(i);
          for (let s = 0, a = 0; a !== i; ++s) {
            const i = n[s] * e;
            for (let n = 0; n !== e; ++n) r[a++] = t[i + n];
          }
          return r;
        },
        flattenJSON: function (t, e, n, i) {
          let r = 1,
            s = t[0];
          for (; void 0 !== s && void 0 === s[i]; ) s = t[r++];
          if (void 0 === s) return;
          let a = s[i];
          if (void 0 !== a)
            if (Array.isArray(a))
              do {
                (a = s[i]),
                  void 0 !== a && (e.push(s.time), n.push.apply(n, a)),
                  (s = t[r++]);
              } while (void 0 !== s);
            else if (void 0 !== a.toArray)
              do {
                (a = s[i]),
                  void 0 !== a && (e.push(s.time), a.toArray(n, n.length)),
                  (s = t[r++]);
              } while (void 0 !== s);
            else
              do {
                (a = s[i]),
                  void 0 !== a && (e.push(s.time), n.push(a)),
                  (s = t[r++]);
              } while (void 0 !== s);
        },
        subclip: function (t, e, n, i, r = 30) {
          const s = t.clone();
          s.name = e;
          const a = [];
          for (let l = 0; l < s.tracks.length; ++l) {
            const t = s.tracks[l],
              e = t.getValueSize(),
              o = [],
              c = [];
            for (let s = 0; s < t.times.length; ++s) {
              const a = t.times[s] * r;
              if (!(a < n || a >= i)) {
                o.push(t.times[s]);
                for (let n = 0; n < e; ++n) c.push(t.values[s * e + n]);
              }
            }
            0 !== o.length &&
              ((t.times = Bo.convertArray(o, t.times.constructor)),
              (t.values = Bo.convertArray(c, t.values.constructor)),
              a.push(t));
          }
          s.tracks = a;
          let o = 1 / 0;
          for (let l = 0; l < s.tracks.length; ++l)
            o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
          for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * o);
          return s.resetDuration(), s;
        },
        makeClipAdditive: function (t, e = 0, n = t, i = 30) {
          i <= 0 && (i = 30);
          const r = n.tracks.length,
            s = e / i;
          for (let a = 0; a < r; ++a) {
            const e = n.tracks[a],
              i = e.ValueTypeName;
            if ("bool" === i || "string" === i) continue;
            const r = t.tracks.find(function (t) {
              return t.name === e.name && t.ValueTypeName === i;
            });
            if (void 0 === r) continue;
            let o = 0;
            const l = e.getValueSize();
            e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
              (o = l / 3);
            let c = 0;
            const h = r.getValueSize();
            r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
              (c = h / 3);
            const u = e.times.length - 1;
            let d;
            if (s <= e.times[0]) {
              const t = o,
                n = l - o;
              d = Bo.arraySlice(e.values, t, n);
            } else if (s >= e.times[u]) {
              const t = u * l + o,
                n = t + l - o;
              d = Bo.arraySlice(e.values, t, n);
            } else {
              const t = e.createInterpolant(),
                n = o,
                i = l - o;
              t.evaluate(s), (d = Bo.arraySlice(t.resultBuffer, n, i));
            }
            if ("quaternion" === i) {
              new Ct().fromArray(d).normalize().conjugate().toArray(d);
            }
            const p = r.times.length;
            for (let t = 0; t < p; ++t) {
              const e = t * h + c;
              if ("quaternion" === i)
                Ct.multiplyQuaternionsFlat(r.values, e, d, 0, r.values, e);
              else {
                const t = h - 2 * c;
                for (let n = 0; n < t; ++n) r.values[e + n] -= d[n];
              }
            }
          }
          return (t.blendMode = 2501), t;
        },
      };
      class Uo {
        constructor(t, e, n, i) {
          (this.parameterPositions = t),
            (this._cachedIndex = 0),
            (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
            (this.sampleValues = e),
            (this.valueSize = n),
            (this.settings = null),
            (this.DefaultSettings_ = {});
        }
        evaluate(t) {
          const e = this.parameterPositions;
          let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
          t: {
            e: {
              let s;
              n: {
                i: if (!(t < i)) {
                  for (let s = n + 2; ; ) {
                    if (void 0 === i) {
                      if (t < r) break i;
                      return (
                        (n = e.length),
                        (this._cachedIndex = n),
                        this.afterEnd_(n - 1, t, r)
                      );
                    }
                    if (n === s) break;
                    if (((r = i), (i = e[++n]), t < i)) break e;
                  }
                  s = e.length;
                  break n;
                }
                if (t >= r) break t;
                {
                  const a = e[1];
                  t < a && ((n = 2), (r = a));
                  for (let s = n - 2; ; ) {
                    if (void 0 === r)
                      return (
                        (this._cachedIndex = 0), this.beforeStart_(0, t, i)
                      );
                    if (n === s) break;
                    if (((i = r), (r = e[--n - 1]), t >= r)) break e;
                  }
                  (s = n), (n = 0);
                }
              }
              for (; n < s; ) {
                const i = (n + s) >>> 1;
                t < e[i] ? (s = i) : (n = i + 1);
              }
              if (((i = e[n]), (r = e[n - 1]), void 0 === r))
                return (this._cachedIndex = 0), this.beforeStart_(0, t, i);
              if (void 0 === i)
                return (
                  (n = e.length),
                  (this._cachedIndex = n),
                  this.afterEnd_(n - 1, r, t)
                );
            }
            (this._cachedIndex = n), this.intervalChanged_(n, r, i);
          }
          return this.interpolate_(n, r, t, i);
        }
        getSettings_() {
          return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
          const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;
          for (let s = 0; s !== i; ++s) e[s] = n[r + s];
          return e;
        }
        interpolate_() {
          throw new Error("call to abstract method");
        }
        intervalChanged_() {}
      }
      (Uo.prototype.beforeStart_ = Uo.prototype.copySampleValue_),
        (Uo.prototype.afterEnd_ = Uo.prototype.copySampleValue_);
      class Ho extends Uo {
        constructor(t, e, n, i) {
          super(t, e, n, i),
            (this._weightPrev = -0),
            (this._offsetPrev = -0),
            (this._weightNext = -0),
            (this._offsetNext = -0),
            (this.DefaultSettings_ = { endingStart: O, endingEnd: O });
        }
        intervalChanged_(t, e, n) {
          const i = this.parameterPositions;
          let r = t - 2,
            s = t + 1,
            a = i[r],
            o = i[s];
          if (void 0 === a)
            switch (this.getSettings_().endingStart) {
              case z:
                (r = t), (a = 2 * e - n);
                break;
              case B:
                (r = i.length - 2), (a = e + i[r] - i[r + 1]);
                break;
              default:
                (r = t), (a = n);
            }
          if (void 0 === o)
            switch (this.getSettings_().endingEnd) {
              case z:
                (s = t), (o = 2 * n - e);
                break;
              case B:
                (s = 1), (o = n + i[1] - i[0]);
                break;
              default:
                (s = t - 1), (o = e);
            }
          const l = 0.5 * (n - e),
            c = this.valueSize;
          (this._weightPrev = l / (e - a)),
            (this._weightNext = l / (o - n)),
            (this._offsetPrev = r * c),
            (this._offsetNext = s * c);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = this._offsetPrev,
            h = this._offsetNext,
            u = this._weightPrev,
            d = this._weightNext,
            p = (n - e) / (i - e),
            f = p * p,
            m = f * p,
            g = -u * m + 2 * u * f - u * p,
            v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
            x = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
            y = d * m - d * f;
          for (let _ = 0; _ !== a; ++_)
            r[_] = g * s[c + _] + v * s[l + _] + x * s[o + _] + y * s[h + _];
          return r;
        }
      }
      class Fo extends Uo {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = t * a,
            l = o - a,
            c = (n - e) / (i - e),
            h = 1 - c;
          for (let u = 0; u !== a; ++u) r[u] = s[l + u] * h + s[o + u] * c;
          return r;
        }
      }
      class Go extends Uo {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t) {
          return this.copySampleValue_(t - 1);
        }
      }
      class Vo {
        constructor(t, e, n, i) {
          if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
          if (void 0 === e || 0 === e.length)
            throw new Error(
              "THREE.KeyframeTrack: no keyframes in track named " + t
            );
          (this.name = t),
            (this.times = Bo.convertArray(e, this.TimeBufferType)),
            (this.values = Bo.convertArray(n, this.ValueBufferType)),
            this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
          const e = t.constructor;
          let n;
          if (e.toJSON !== this.toJSON) n = e.toJSON(t);
          else {
            n = {
              name: t.name,
              times: Bo.convertArray(t.times, Array),
              values: Bo.convertArray(t.values, Array),
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e);
          }
          return (n.type = t.ValueTypeName), n;
        }
        InterpolantFactoryMethodDiscrete(t) {
          return new Go(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
          return new Fo(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
          return new Ho(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
          let e;
          switch (t) {
            case D:
              e = this.InterpolantFactoryMethodDiscrete;
              break;
            case I:
              e = this.InterpolantFactoryMethodLinear;
              break;
            case N:
              e = this.InterpolantFactoryMethodSmooth;
          }
          if (void 0 === e) {
            const e =
              "unsupported interpolation for " +
              this.ValueTypeName +
              " keyframe track named " +
              this.name;
            if (void 0 === this.createInterpolant) {
              if (t === this.DefaultInterpolation) throw new Error(e);
              this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", e), this;
          }
          return (this.createInterpolant = e), this;
        }
        getInterpolation() {
          switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
              return D;
            case this.InterpolantFactoryMethodLinear:
              return I;
            case this.InterpolantFactoryMethodSmooth:
              return N;
          }
        }
        getValueSize() {
          return this.values.length / this.times.length;
        }
        shift(t) {
          if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
          }
          return this;
        }
        scale(t) {
          if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
          }
          return this;
        }
        trim(t, e) {
          const n = this.times,
            i = n.length;
          let r = 0,
            s = i - 1;
          for (; r !== i && n[r] < t; ) ++r;
          for (; -1 !== s && n[s] > e; ) --s;
          if ((++s, 0 !== r || s !== i)) {
            r >= s && ((s = Math.max(s, 1)), (r = s - 1));
            const t = this.getValueSize();
            (this.times = Bo.arraySlice(n, r, s)),
              (this.values = Bo.arraySlice(this.values, r * t, s * t));
          }
          return this;
        }
        validate() {
          let t = !0;
          const e = this.getValueSize();
          e - Math.floor(e) !== 0 &&
            (console.error(
              "THREE.KeyframeTrack: Invalid value size in track.",
              this
            ),
            (t = !1));
          const n = this.times,
            i = this.values,
            r = n.length;
          0 === r &&
            (console.error("THREE.KeyframeTrack: Track is empty.", this),
            (t = !1));
          let s = null;
          for (let a = 0; a !== r; a++) {
            const e = n[a];
            if ("number" === typeof e && isNaN(e)) {
              console.error(
                "THREE.KeyframeTrack: Time is not a valid number.",
                this,
                a,
                e
              ),
                (t = !1);
              break;
            }
            if (null !== s && s > e) {
              console.error(
                "THREE.KeyframeTrack: Out of order keys.",
                this,
                a,
                e,
                s
              ),
                (t = !1);
              break;
            }
            s = e;
          }
          if (void 0 !== i && Bo.isTypedArray(i))
            for (let a = 0, o = i.length; a !== o; ++a) {
              const e = i[a];
              if (isNaN(e)) {
                console.error(
                  "THREE.KeyframeTrack: Value is not a valid number.",
                  this,
                  a,
                  e
                ),
                  (t = !1);
                break;
              }
            }
          return t;
        }
        optimize() {
          const t = Bo.arraySlice(this.times),
            e = Bo.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === N,
            r = t.length - 1;
          let s = 1;
          for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = t[a];
            if (o !== t[a + 1] && (1 !== a || o !== t[0]))
              if (i) r = !0;
              else {
                const t = a * n,
                  i = t - n,
                  s = t + n;
                for (let a = 0; a !== n; ++a) {
                  const n = e[t + a];
                  if (n !== e[i + a] || n !== e[s + a]) {
                    r = !0;
                    break;
                  }
                }
              }
            if (r) {
              if (a !== s) {
                t[s] = t[a];
                const i = a * n,
                  r = s * n;
                for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
              }
              ++s;
            }
          }
          if (r > 0) {
            t[s] = t[r];
            for (let t = r * n, i = s * n, a = 0; a !== n; ++a)
              e[i + a] = e[t + a];
            ++s;
          }
          return (
            s !== t.length
              ? ((this.times = Bo.arraySlice(t, 0, s)),
                (this.values = Bo.arraySlice(e, 0, s * n)))
              : ((this.times = t), (this.values = e)),
            this
          );
        }
        clone() {
          const t = Bo.arraySlice(this.times, 0),
            e = Bo.arraySlice(this.values, 0),
            n = new (0, this.constructor)(this.name, t, e);
          return (n.createInterpolant = this.createInterpolant), n;
        }
      }
      (Vo.prototype.TimeBufferType = Float32Array),
        (Vo.prototype.ValueBufferType = Float32Array),
        (Vo.prototype.DefaultInterpolation = I);
      class ko extends Vo {}
      (ko.prototype.ValueTypeName = "bool"),
        (ko.prototype.ValueBufferType = Array),
        (ko.prototype.DefaultInterpolation = D),
        (ko.prototype.InterpolantFactoryMethodLinear = void 0),
        (ko.prototype.InterpolantFactoryMethodSmooth = void 0);
      class Wo extends Vo {}
      Wo.prototype.ValueTypeName = "color";
      class jo extends Vo {}
      jo.prototype.ValueTypeName = "number";
      class qo extends Uo {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            s = this.sampleValues,
            a = this.valueSize,
            o = (n - e) / (i - e);
          let l = t * a;
          for (let c = l + a; l !== c; l += 4)
            Ct.slerpFlat(r, 0, s, l - a, s, l, o);
          return r;
        }
      }
      class Xo extends Vo {
        InterpolantFactoryMethodLinear(t) {
          return new qo(this.times, this.values, this.getValueSize(), t);
        }
      }
      (Xo.prototype.ValueTypeName = "quaternion"),
        (Xo.prototype.DefaultInterpolation = I),
        (Xo.prototype.InterpolantFactoryMethodSmooth = void 0);
      class Jo extends Vo {}
      (Jo.prototype.ValueTypeName = "string"),
        (Jo.prototype.ValueBufferType = Array),
        (Jo.prototype.DefaultInterpolation = D),
        (Jo.prototype.InterpolantFactoryMethodLinear = void 0),
        (Jo.prototype.InterpolantFactoryMethodSmooth = void 0);
      class Yo extends Vo {}
      Yo.prototype.ValueTypeName = "vector";
      class Zo {
        constructor(t, e = -1, n, i = 2500) {
          (this.name = t),
            (this.tracks = n),
            (this.duration = e),
            (this.blendMode = i),
            (this.uuid = Q()),
            this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
          const e = [],
            n = t.tracks,
            i = 1 / (t.fps || 1);
          for (let s = 0, a = n.length; s !== a; ++s) e.push(Ko(n[s]).scale(i));
          const r = new this(t.name, t.duration, e, t.blendMode);
          return (r.uuid = t.uuid), r;
        }
        static toJSON(t) {
          const e = [],
            n = t.tracks,
            i = {
              name: t.name,
              duration: t.duration,
              tracks: e,
              uuid: t.uuid,
              blendMode: t.blendMode,
            };
          for (let r = 0, s = n.length; r !== s; ++r) e.push(Vo.toJSON(n[r]));
          return i;
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
          const r = e.length,
            s = [];
          for (let a = 0; a < r; a++) {
            let t = [],
              o = [];
            t.push((a + r - 1) % r, a, (a + 1) % r), o.push(0, 1, 0);
            const l = Bo.getKeyframeOrder(t);
            (t = Bo.sortedArray(t, 1, l)),
              (o = Bo.sortedArray(o, 1, l)),
              i || 0 !== t[0] || (t.push(r), o.push(o[0])),
              s.push(
                new jo(".morphTargetInfluences[" + e[a].name + "]", t, o).scale(
                  1 / n
                )
              );
          }
          return new this(t, -1, s);
        }
        static findByName(t, e) {
          let n = t;
          if (!Array.isArray(t)) {
            const e = t;
            n = (e.geometry && e.geometry.animations) || e.animations;
          }
          for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
          return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
          const i = {},
            r = /^([\w-]*?)([\d]+)$/;
          for (let a = 0, o = t.length; a < o; a++) {
            const e = t[a],
              n = e.name.match(r);
            if (n && n.length > 1) {
              const t = n[1];
              let r = i[t];
              r || (i[t] = r = []), r.push(e);
            }
          }
          const s = [];
          for (const a in i)
            s.push(this.CreateFromMorphTargetSequence(a, i[a], e, n));
          return s;
        }
        static parseAnimation(t, e) {
          if (!t)
            return (
              console.error(
                "THREE.AnimationClip: No animation in JSONLoader data."
              ),
              null
            );
          const n = function (t, e, n, i, r) {
              if (0 !== n.length) {
                const s = [],
                  a = [];
                Bo.flattenJSON(n, s, a, i),
                  0 !== s.length && r.push(new t(e, s, a));
              }
            },
            i = [],
            r = t.name || "default",
            s = t.fps || 30,
            a = t.blendMode;
          let o = t.length || -1;
          const l = t.hierarchy || [];
          for (let c = 0; c < l.length; c++) {
            const t = l[c].keys;
            if (t && 0 !== t.length)
              if (t[0].morphTargets) {
                const e = {};
                let n;
                for (n = 0; n < t.length; n++)
                  if (t[n].morphTargets)
                    for (let i = 0; i < t[n].morphTargets.length; i++)
                      e[t[n].morphTargets[i]] = -1;
                for (const r in e) {
                  const e = [],
                    s = [];
                  for (let i = 0; i !== t[n].morphTargets.length; ++i) {
                    const i = t[n];
                    e.push(i.time), s.push(i.morphTarget === r ? 1 : 0);
                  }
                  i.push(new jo(".morphTargetInfluence[" + r + "]", e, s));
                }
                o = e.length * s;
              } else {
                const r = ".bones[" + e[c].name + "]";
                n(Yo, r + ".position", t, "pos", i),
                  n(Xo, r + ".quaternion", t, "rot", i),
                  n(Yo, r + ".scale", t, "scl", i);
              }
          }
          if (0 === i.length) return null;
          return new this(r, o, i, a);
        }
        resetDuration() {
          let t = 0;
          for (let e = 0, n = this.tracks.length; e !== n; ++e) {
            const n = this.tracks[e];
            t = Math.max(t, n.times[n.times.length - 1]);
          }
          return (this.duration = t), this;
        }
        trim() {
          for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].trim(0, this.duration);
          return this;
        }
        validate() {
          let t = !0;
          for (let e = 0; e < this.tracks.length; e++)
            t = t && this.tracks[e].validate();
          return t;
        }
        optimize() {
          for (let t = 0; t < this.tracks.length; t++)
            this.tracks[t].optimize();
          return this;
        }
        clone() {
          const t = [];
          for (let e = 0; e < this.tracks.length; e++)
            t.push(this.tracks[e].clone());
          return new this.constructor(
            this.name,
            this.duration,
            t,
            this.blendMode
          );
        }
        toJSON() {
          return this.constructor.toJSON(this);
        }
      }
      function Ko(t) {
        if (void 0 === t.type)
          throw new Error(
            "THREE.KeyframeTrack: track type undefined, can not parse"
          );
        const e = (function (t) {
          switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
              return jo;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
              return Yo;
            case "color":
              return Wo;
            case "quaternion":
              return Xo;
            case "bool":
            case "boolean":
              return ko;
            case "string":
              return Jo;
          }
          throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t);
        })(t.type);
        if (void 0 === t.times) {
          const e = [],
            n = [];
          Bo.flattenJSON(t.keys, e, n, "value"), (t.times = e), (t.values = n);
        }
        return void 0 !== e.parse
          ? e.parse(t)
          : new e(t.name, t.times, t.values, t.interpolation);
      }
      const Qo = {
        enabled: !1,
        files: {},
        add: function (t, e) {
          !1 !== this.enabled && (this.files[t] = e);
        },
        get: function (t) {
          if (!1 !== this.enabled) return this.files[t];
        },
        remove: function (t) {
          delete this.files[t];
        },
        clear: function () {
          this.files = {};
        },
      };
      class $o {
        constructor(t, e, n) {
          const i = this;
          let r,
            s = !1,
            a = 0,
            o = 0;
          const l = [];
          (this.onStart = void 0),
            (this.onLoad = t),
            (this.onProgress = e),
            (this.onError = n),
            (this.itemStart = function (t) {
              o++,
                !1 === s && void 0 !== i.onStart && i.onStart(t, a, o),
                (s = !0);
            }),
            (this.itemEnd = function (t) {
              a++,
                void 0 !== i.onProgress && i.onProgress(t, a, o),
                a === o && ((s = !1), void 0 !== i.onLoad && i.onLoad());
            }),
            (this.itemError = function (t) {
              void 0 !== i.onError && i.onError(t);
            }),
            (this.resolveURL = function (t) {
              return r ? r(t) : t;
            }),
            (this.setURLModifier = function (t) {
              return (r = t), this;
            }),
            (this.addHandler = function (t, e) {
              return l.push(t, e), this;
            }),
            (this.removeHandler = function (t) {
              const e = l.indexOf(t);
              return -1 !== e && l.splice(e, 2), this;
            }),
            (this.getHandler = function (t) {
              for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e],
                  i = l[e + 1];
                if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
              }
              return null;
            });
        }
      }
      const tl = new $o();
      class el {
        constructor(t) {
          (this.manager = void 0 !== t ? t : tl),
            (this.crossOrigin = "anonymous"),
            (this.withCredentials = !1),
            (this.path = ""),
            (this.resourcePath = ""),
            (this.requestHeader = {});
        }
        load() {}
        loadAsync(t, e) {
          const n = this;
          return new Promise(function (i, r) {
            n.load(t, i, e, r);
          });
        }
        parse() {}
        setCrossOrigin(t) {
          return (this.crossOrigin = t), this;
        }
        setWithCredentials(t) {
          return (this.withCredentials = t), this;
        }
        setPath(t) {
          return (this.path = t), this;
        }
        setResourcePath(t) {
          return (this.resourcePath = t), this;
        }
        setRequestHeader(t) {
          return (this.requestHeader = t), this;
        }
      }
      const nl = {};
      class il extends el {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          const r = Qo.get(t);
          if (void 0 !== r)
            return (
              this.manager.itemStart(t),
              setTimeout(() => {
                e && e(r), this.manager.itemEnd(t);
              }, 0),
              r
            );
          if (void 0 !== nl[t])
            return void nl[t].push({ onLoad: e, onProgress: n, onError: i });
          (nl[t] = []), nl[t].push({ onLoad: e, onProgress: n, onError: i });
          const s = new Request(t, {
              headers: new Headers(this.requestHeader),
              credentials: this.withCredentials ? "include" : "same-origin",
            }),
            a = this.mimeType,
            o = this.responseType;
          fetch(s)
            .then((e) => {
              if (200 === e.status || 0 === e.status) {
                if (
                  (0 === e.status &&
                    console.warn("THREE.FileLoader: HTTP Status 0 received."),
                  "undefined" === typeof ReadableStream ||
                    void 0 === e.body ||
                    void 0 === e.body.getReader)
                )
                  return e;
                const n = nl[t],
                  i = e.body.getReader(),
                  r = e.headers.get("Content-Length"),
                  s = r ? parseInt(r) : 0,
                  a = 0 !== s;
                let o = 0;
                const l = new ReadableStream({
                  start(t) {
                    !(function e() {
                      i.read().then(({ done: i, value: r }) => {
                        if (i) t.close();
                        else {
                          o += r.byteLength;
                          const i = new ProgressEvent("progress", {
                            lengthComputable: a,
                            loaded: o,
                            total: s,
                          });
                          for (let t = 0, e = n.length; t < e; t++) {
                            const e = n[t];
                            e.onProgress && e.onProgress(i);
                          }
                          t.enqueue(r), e();
                        }
                      });
                    })();
                  },
                });
                return new Response(l);
              }
              throw Error(
                `fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`
              );
            })
            .then((t) => {
              switch (o) {
                case "arraybuffer":
                  return t.arrayBuffer();
                case "blob":
                  return t.blob();
                case "document":
                  return t
                    .text()
                    .then((t) => new DOMParser().parseFromString(t, a));
                case "json":
                  return t.json();
                default:
                  if (void 0 === a) return t.text();
                  {
                    const e = /charset="?([^;"\s]*)"?/i.exec(a),
                      n = e && e[1] ? e[1].toLowerCase() : void 0,
                      i = new TextDecoder(n);
                    return t.arrayBuffer().then((t) => i.decode(t));
                  }
              }
            })
            .then((e) => {
              Qo.add(t, e);
              const n = nl[t];
              delete nl[t];
              for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onLoad && i.onLoad(e);
              }
            })
            .catch((e) => {
              const n = nl[t];
              if (void 0 === n) throw (this.manager.itemError(t), e);
              delete nl[t];
              for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                i.onError && i.onError(e);
              }
              this.manager.itemError(t);
            })
            .finally(() => {
              this.manager.itemEnd(t);
            }),
            this.manager.itemStart(t);
        }
        setResponseType(t) {
          return (this.responseType = t), this;
        }
        setMimeType(t) {
          return (this.mimeType = t), this;
        }
      }
      class rl extends el {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          const r = this,
            s = Qo.get(t);
          if (void 0 !== s)
            return (
              r.manager.itemStart(t),
              setTimeout(function () {
                e && e(s), r.manager.itemEnd(t);
              }, 0),
              s
            );
          const a = ot("img");
          function o() {
            c(), Qo.add(t, this), e && e(this), r.manager.itemEnd(t);
          }
          function l(e) {
            c(), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
          }
          function c() {
            a.removeEventListener("load", o, !1),
              a.removeEventListener("error", l, !1);
          }
          return (
            a.addEventListener("load", o, !1),
            a.addEventListener("error", l, !1),
            "data:" !== t.slice(0, 5) &&
              void 0 !== this.crossOrigin &&
              (a.crossOrigin = this.crossOrigin),
            r.manager.itemStart(t),
            (a.src = t),
            a
          );
        }
      }
      class sl extends el {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          const r = new zn(),
            s = new rl(this.manager);
          s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
          let a = 0;
          function o(n) {
            s.load(
              t[n],
              function (t) {
                (r.images[n] = t),
                  a++,
                  6 === a && ((r.needsUpdate = !0), e && e(r));
              },
              void 0,
              i
            );
          }
          for (let l = 0; l < t.length; ++l) o(l);
          return r;
        }
      }
      class al extends el {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          const r = new St(),
            s = new rl(this.manager);
          return (
            s.setCrossOrigin(this.crossOrigin),
            s.setPath(this.path),
            s.load(
              t,
              function (t) {
                (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
              },
              n,
              i
            ),
            r
          );
        }
      }
      class ol extends De {
        constructor(t, e = 1) {
          super(),
            (this.type = "Light"),
            (this.color = new xt(t)),
            (this.intensity = e);
        }
        dispose() {}
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.intensity = t.intensity),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.color = this.color.getHex()),
            (e.object.intensity = this.intensity),
            void 0 !== this.groundColor &&
              (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
          );
        }
      }
      ol.prototype.isLight = !0;
      class ll extends ol {
        constructor(t, e, n) {
          super(t, n),
            (this.type = "HemisphereLight"),
            this.position.copy(De.DefaultUp),
            this.updateMatrix(),
            (this.groundColor = new xt(e));
        }
        copy(t) {
          return (
            ol.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
          );
        }
      }
      ll.prototype.isHemisphereLight = !0;
      const cl = new oe(),
        hl = new Lt(),
        ul = new Lt();
      class dl {
        constructor(t) {
          (this.camera = t),
            (this.bias = 0),
            (this.normalBias = 0),
            (this.radius = 1),
            (this.blurSamples = 8),
            (this.mapSize = new rt(512, 512)),
            (this.map = null),
            (this.mapPass = null),
            (this.matrix = new oe()),
            (this.autoUpdate = !0),
            (this.needsUpdate = !1),
            (this._frustum = new Wn()),
            (this._frameExtents = new rt(1, 1)),
            (this._viewportCount = 1),
            (this._viewports = [new Et(0, 0, 1, 1)]);
        }
        getViewportCount() {
          return this._viewportCount;
        }
        getFrustum() {
          return this._frustum;
        }
        updateMatrices(t) {
          const e = this.camera,
            n = this.matrix;
          hl.setFromMatrixPosition(t.matrixWorld),
            e.position.copy(hl),
            ul.setFromMatrixPosition(t.target.matrixWorld),
            e.lookAt(ul),
            e.updateMatrixWorld(),
            cl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(cl),
            n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
            n.multiply(e.projectionMatrix),
            n.multiply(e.matrixWorldInverse);
        }
        getViewport(t) {
          return this._viewports[t];
        }
        getFrameExtents() {
          return this._frameExtents;
        }
        dispose() {
          this.map && this.map.dispose(),
            this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
          return (
            (this.camera = t.camera.clone()),
            (this.bias = t.bias),
            (this.radius = t.radius),
            this.mapSize.copy(t.mapSize),
            this
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        toJSON() {
          const t = {};
          return (
            0 !== this.bias && (t.bias = this.bias),
            0 !== this.normalBias && (t.normalBias = this.normalBias),
            1 !== this.radius && (t.radius = this.radius),
            (512 === this.mapSize.x && 512 === this.mapSize.y) ||
              (t.mapSize = this.mapSize.toArray()),
            (t.camera = this.camera.toJSON(!1).object),
            delete t.camera.matrix,
            t
          );
        }
      }
      class pl extends dl {
        constructor() {
          super(new In(50, 1, 0.5, 500)), (this.focus = 1);
        }
        updateMatrices(t) {
          const e = this.camera,
            n = 2 * K * t.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            r = t.distance || e.far;
          (n === e.fov && i === e.aspect && r === e.far) ||
            ((e.fov = n),
            (e.aspect = i),
            (e.far = r),
            e.updateProjectionMatrix()),
            super.updateMatrices(t);
        }
        copy(t) {
          return super.copy(t), (this.focus = t.focus), this;
        }
      }
      pl.prototype.isSpotLightShadow = !0;
      class fl extends ol {
        constructor(t, e, n = 0, i = Math.PI / 3, r = 0, s = 1) {
          super(t, e),
            (this.type = "SpotLight"),
            this.position.copy(De.DefaultUp),
            this.updateMatrix(),
            (this.target = new De()),
            (this.distance = n),
            (this.angle = i),
            (this.penumbra = r),
            (this.decay = s),
            (this.shadow = new pl());
        }
        get power() {
          return this.intensity * Math.PI;
        }
        set power(t) {
          this.intensity = t / Math.PI;
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t) {
          return (
            super.copy(t),
            (this.distance = t.distance),
            (this.angle = t.angle),
            (this.penumbra = t.penumbra),
            (this.decay = t.decay),
            (this.target = t.target.clone()),
            (this.shadow = t.shadow.clone()),
            this
          );
        }
      }
      fl.prototype.isSpotLight = !0;
      const ml = new oe(),
        gl = new Lt(),
        vl = new Lt();
      class xl extends dl {
        constructor() {
          super(new In(90, 1, 0.5, 500)),
            (this._frameExtents = new rt(4, 2)),
            (this._viewportCount = 6),
            (this._viewports = [
              new Et(2, 1, 1, 1),
              new Et(0, 1, 1, 1),
              new Et(3, 1, 1, 1),
              new Et(1, 1, 1, 1),
              new Et(3, 0, 1, 1),
              new Et(1, 0, 1, 1),
            ]),
            (this._cubeDirections = [
              new Lt(1, 0, 0),
              new Lt(-1, 0, 0),
              new Lt(0, 0, 1),
              new Lt(0, 0, -1),
              new Lt(0, 1, 0),
              new Lt(0, -1, 0),
            ]),
            (this._cubeUps = [
              new Lt(0, 1, 0),
              new Lt(0, 1, 0),
              new Lt(0, 1, 0),
              new Lt(0, 1, 0),
              new Lt(0, 0, 1),
              new Lt(0, 0, -1),
            ]);
        }
        updateMatrices(t, e = 0) {
          const n = this.camera,
            i = this.matrix,
            r = t.distance || n.far;
          r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
            gl.setFromMatrixPosition(t.matrixWorld),
            n.position.copy(gl),
            vl.copy(n.position),
            vl.add(this._cubeDirections[e]),
            n.up.copy(this._cubeUps[e]),
            n.lookAt(vl),
            n.updateMatrixWorld(),
            i.makeTranslation(-gl.x, -gl.y, -gl.z),
            ml.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
            this._frustum.setFromProjectionMatrix(ml);
        }
      }
      xl.prototype.isPointLightShadow = !0;
      class yl extends ol {
        constructor(t, e, n = 0, i = 1) {
          super(t, e),
            (this.type = "PointLight"),
            (this.distance = n),
            (this.decay = i),
            (this.shadow = new xl());
        }
        get power() {
          return 4 * this.intensity * Math.PI;
        }
        set power(t) {
          this.intensity = t / (4 * Math.PI);
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t) {
          return (
            super.copy(t),
            (this.distance = t.distance),
            (this.decay = t.decay),
            (this.shadow = t.shadow.clone()),
            this
          );
        }
      }
      yl.prototype.isPointLight = !0;
      class _l extends dl {
        constructor() {
          super(new ii(-5, 5, 5, -5, 0.5, 500));
        }
      }
      _l.prototype.isDirectionalLightShadow = !0;
      class Ml extends ol {
        constructor(t, e) {
          super(t, e),
            (this.type = "DirectionalLight"),
            this.position.copy(De.DefaultUp),
            this.updateMatrix(),
            (this.target = new De()),
            (this.shadow = new _l());
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t) {
          return (
            super.copy(t),
            (this.target = t.target.clone()),
            (this.shadow = t.shadow.clone()),
            this
          );
        }
      }
      Ml.prototype.isDirectionalLight = !0;
      class bl extends ol {
        constructor(t, e) {
          super(t, e), (this.type = "AmbientLight");
        }
      }
      bl.prototype.isAmbientLight = !0;
      class wl extends ol {
        constructor(t, e, n = 10, i = 10) {
          super(t, e),
            (this.type = "RectAreaLight"),
            (this.width = n),
            (this.height = i);
        }
        get power() {
          return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t) {
          this.intensity = t / (this.width * this.height * Math.PI);
        }
        copy(t) {
          return (
            super.copy(t),
            (this.width = t.width),
            (this.height = t.height),
            this
          );
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.object.width = this.width), (e.object.height = this.height), e
          );
        }
      }
      wl.prototype.isRectAreaLight = !0;
      class Sl {
        constructor() {
          this.coefficients = [];
          for (let t = 0; t < 9; t++) this.coefficients.push(new Lt());
        }
        set(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
          return this;
        }
        zero() {
          for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
          return this;
        }
        getAt(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
          return (
            e.copy(s[0]).multiplyScalar(0.282095),
            e.addScaledVector(s[1], 0.488603 * i),
            e.addScaledVector(s[2], 0.488603 * r),
            e.addScaledVector(s[3], 0.488603 * n),
            e.addScaledVector(s[4], n * i * 1.092548),
            e.addScaledVector(s[5], i * r * 1.092548),
            e.addScaledVector(s[6], 0.315392 * (3 * r * r - 1)),
            e.addScaledVector(s[7], n * r * 1.092548),
            e.addScaledVector(s[8], 0.546274 * (n * n - i * i)),
            e
          );
        }
        getIrradianceAt(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            s = this.coefficients;
          return (
            e.copy(s[0]).multiplyScalar(0.886227),
            e.addScaledVector(s[1], 1.023328 * i),
            e.addScaledVector(s[2], 1.023328 * r),
            e.addScaledVector(s[3], 1.023328 * n),
            e.addScaledVector(s[4], 0.858086 * n * i),
            e.addScaledVector(s[5], 0.858086 * i * r),
            e.addScaledVector(s[6], 0.743125 * r * r - 0.247708),
            e.addScaledVector(s[7], 0.858086 * n * r),
            e.addScaledVector(s[8], 0.429043 * (n * n - i * i)),
            e
          );
        }
        add(t) {
          for (let e = 0; e < 9; e++)
            this.coefficients[e].add(t.coefficients[e]);
          return this;
        }
        addScaledSH(t, e) {
          for (let n = 0; n < 9; n++)
            this.coefficients[n].addScaledVector(t.coefficients[n], e);
          return this;
        }
        scale(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
          return this;
        }
        lerp(t, e) {
          for (let n = 0; n < 9; n++)
            this.coefficients[n].lerp(t.coefficients[n], e);
          return this;
        }
        equals(t) {
          for (let e = 0; e < 9; e++)
            if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
          return !0;
        }
        copy(t) {
          return this.set(t.coefficients);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        fromArray(t, e = 0) {
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
          return t;
        }
        static getBasisAt(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z;
          (e[0] = 0.282095),
            (e[1] = 0.488603 * i),
            (e[2] = 0.488603 * r),
            (e[3] = 0.488603 * n),
            (e[4] = 1.092548 * n * i),
            (e[5] = 1.092548 * i * r),
            (e[6] = 0.315392 * (3 * r * r - 1)),
            (e[7] = 1.092548 * n * r),
            (e[8] = 0.546274 * (n * n - i * i));
        }
      }
      Sl.prototype.isSphericalHarmonics3 = !0;
      class El extends ol {
        constructor(t = new Sl(), e = 1) {
          super(void 0, e), (this.sh = t);
        }
        copy(t) {
          return super.copy(t), this.sh.copy(t.sh), this;
        }
        fromJSON(t) {
          return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (e.object.sh = this.sh.toArray()), e;
        }
      }
      El.prototype.isLightProbe = !0;
      class Tl {
        static decodeText(t) {
          if ("undefined" !== typeof TextDecoder)
            return new TextDecoder().decode(t);
          let e = "";
          for (let i = 0, r = t.length; i < r; i++)
            e += String.fromCharCode(t[i]);
          try {
            return decodeURIComponent(escape(e));
          } catch (n) {
            return e;
          }
        }
        static extractUrlBase(t) {
          const e = t.lastIndexOf("/");
          return -1 === e ? "./" : t.slice(0, e + 1);
        }
        static resolveURL(t, e) {
          return "string" !== typeof t || "" === t
            ? ""
            : (/^https?:\/\//i.test(e) &&
                /^\//.test(t) &&
                (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
              /^(https?:)?\/\//i.test(t) ||
              /^data:.*,.*$/i.test(t) ||
              /^blob:.*$/i.test(t)
                ? t
                : e + t);
        }
      }
      class Al extends on {
        constructor() {
          super(),
            (this.type = "InstancedBufferGeometry"),
            (this.instanceCount = 1 / 0);
        }
        copy(t) {
          return super.copy(t), (this.instanceCount = t.instanceCount), this;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        toJSON() {
          const t = super.toJSON(this);
          return (
            (t.instanceCount = this.instanceCount),
            (t.isInstancedBufferGeometry = !0),
            t
          );
        }
      }
      Al.prototype.isInstancedBufferGeometry = !0;
      let Rl;
      (class extends el {
        constructor(t) {
          super(t),
            "undefined" === typeof createImageBitmap &&
              console.warn(
                "THREE.ImageBitmapLoader: createImageBitmap() not supported."
              ),
            "undefined" === typeof fetch &&
              console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
            (this.options = { premultiplyAlpha: "none" });
        }
        setOptions(t) {
          return (this.options = t), this;
        }
        load(t, e, n, i) {
          void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            (t = this.manager.resolveURL(t));
          const r = this,
            s = Qo.get(t);
          if (void 0 !== s)
            return (
              r.manager.itemStart(t),
              setTimeout(function () {
                e && e(s), r.manager.itemEnd(t);
              }, 0),
              s
            );
          const a = {};
          (a.credentials =
            "anonymous" === this.crossOrigin ? "same-origin" : "include"),
            (a.headers = this.requestHeader),
            fetch(t, a)
              .then(function (t) {
                return t.blob();
              })
              .then(function (t) {
                return createImageBitmap(
                  t,
                  Object.assign(r.options, { colorSpaceConversion: "none" })
                );
              })
              .then(function (n) {
                Qo.add(t, n), e && e(n), r.manager.itemEnd(t);
              })
              .catch(function (e) {
                i && i(e), r.manager.itemError(t), r.manager.itemEnd(t);
              }),
            r.manager.itemStart(t);
        }
      }.prototype.isImageBitmapLoader = !0);
      const Cl = function () {
        return (
          void 0 === Rl &&
            (Rl = new (window.AudioContext || window.webkitAudioContext)()),
          Rl
        );
      };
      class Ll extends el {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          const r = this,
            s = new il(this.manager);
          s.setResponseType("arraybuffer"),
            s.setPath(this.path),
            s.setRequestHeader(this.requestHeader),
            s.setWithCredentials(this.withCredentials),
            s.load(
              t,
              function (n) {
                try {
                  const t = n.slice(0);
                  Cl().decodeAudioData(t, function (t) {
                    e(t);
                  });
                } catch (s) {
                  i ? i(s) : console.error(s), r.manager.itemError(t);
                }
              },
              n,
              i
            );
        }
      }
      (class extends El {
        constructor(t, e, n = 1) {
          super(void 0, n);
          const i = new xt().set(t),
            r = new xt().set(e),
            s = new Lt(i.r, i.g, i.b),
            a = new Lt(r.r, r.g, r.b),
            o = Math.sqrt(Math.PI),
            l = o * Math.sqrt(0.75);
          this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),
            this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l);
        }
      }.prototype.isHemisphereLightProbe = !0);
      (class extends El {
        constructor(t, e = 1) {
          super(void 0, e);
          const n = new xt().set(t);
          this.sh.coefficients[0]
            .set(n.r, n.g, n.b)
            .multiplyScalar(2 * Math.sqrt(Math.PI));
        }
      }.prototype.isAmbientLightProbe = !0);
      class Pl extends De {
        constructor(t) {
          super(),
            (this.type = "Audio"),
            (this.listener = t),
            (this.context = t.context),
            (this.gain = this.context.createGain()),
            this.gain.connect(t.getInput()),
            (this.autoplay = !1),
            (this.buffer = null),
            (this.detune = 0),
            (this.loop = !1),
            (this.loopStart = 0),
            (this.loopEnd = 0),
            (this.offset = 0),
            (this.duration = void 0),
            (this.playbackRate = 1),
            (this.isPlaying = !1),
            (this.hasPlaybackControl = !0),
            (this.source = null),
            (this.sourceType = "empty"),
            (this._startedAt = 0),
            (this._progress = 0),
            (this._connected = !1),
            (this.filters = []);
        }
        getOutput() {
          return this.gain;
        }
        setNodeSource(t) {
          return (
            (this.hasPlaybackControl = !1),
            (this.sourceType = "audioNode"),
            (this.source = t),
            this.connect(),
            this
          );
        }
        setMediaElementSource(t) {
          return (
            (this.hasPlaybackControl = !1),
            (this.sourceType = "mediaNode"),
            (this.source = this.context.createMediaElementSource(t)),
            this.connect(),
            this
          );
        }
        setMediaStreamSource(t) {
          return (
            (this.hasPlaybackControl = !1),
            (this.sourceType = "mediaStreamNode"),
            (this.source = this.context.createMediaStreamSource(t)),
            this.connect(),
            this
          );
        }
        setBuffer(t) {
          return (
            (this.buffer = t),
            (this.sourceType = "buffer"),
            this.autoplay && this.play(),
            this
          );
        }
        play(t = 0) {
          if (!0 === this.isPlaying)
            return void console.warn("THREE.Audio: Audio is already playing.");
          if (!1 === this.hasPlaybackControl)
            return void console.warn(
              "THREE.Audio: this Audio has no playback control."
            );
          this._startedAt = this.context.currentTime + t;
          const e = this.context.createBufferSource();
          return (
            (e.buffer = this.buffer),
            (e.loop = this.loop),
            (e.loopStart = this.loopStart),
            (e.loopEnd = this.loopEnd),
            (e.onended = this.onEnded.bind(this)),
            e.start(
              this._startedAt,
              this._progress + this.offset,
              this.duration
            ),
            (this.isPlaying = !0),
            (this.source = e),
            this.setDetune(this.detune),
            this.setPlaybackRate(this.playbackRate),
            this.connect()
          );
        }
        pause() {
          if (!1 !== this.hasPlaybackControl)
            return (
              !0 === this.isPlaying &&
                ((this._progress +=
                  Math.max(this.context.currentTime - this._startedAt, 0) *
                  this.playbackRate),
                !0 === this.loop &&
                  (this._progress =
                    this._progress % (this.duration || this.buffer.duration)),
                this.source.stop(),
                (this.source.onended = null),
                (this.isPlaying = !1)),
              this
            );
          console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
          if (!1 !== this.hasPlaybackControl)
            return (
              (this._progress = 0),
              this.source.stop(),
              (this.source.onended = null),
              (this.isPlaying = !1),
              this
            );
          console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
          if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
              this.filters[t - 1].connect(this.filters[t]);
            this.filters[this.filters.length - 1].connect(this.getOutput());
          } else this.source.connect(this.getOutput());
          return (this._connected = !0), this;
        }
        disconnect() {
          if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let t = 1, e = this.filters.length; t < e; t++)
              this.filters[t - 1].disconnect(this.filters[t]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput());
          } else this.source.disconnect(this.getOutput());
          return (this._connected = !1), this;
        }
        getFilters() {
          return this.filters;
        }
        setFilters(t) {
          return (
            t || (t = []),
            !0 === this._connected
              ? (this.disconnect(), (this.filters = t.slice()), this.connect())
              : (this.filters = t.slice()),
            this
          );
        }
        setDetune(t) {
          if (((this.detune = t), void 0 !== this.source.detune))
            return (
              !0 === this.isPlaying &&
                this.source.detune.setTargetAtTime(
                  this.detune,
                  this.context.currentTime,
                  0.01
                ),
              this
            );
        }
        getDetune() {
          return this.detune;
        }
        getFilter() {
          return this.getFilters()[0];
        }
        setFilter(t) {
          return this.setFilters(t ? [t] : []);
        }
        setPlaybackRate(t) {
          if (!1 !== this.hasPlaybackControl)
            return (
              (this.playbackRate = t),
              !0 === this.isPlaying &&
                this.source.playbackRate.setTargetAtTime(
                  this.playbackRate,
                  this.context.currentTime,
                  0.01
                ),
              this
            );
          console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
          return this.playbackRate;
        }
        onEnded() {
          this.isPlaying = !1;
        }
        getLoop() {
          return !1 === this.hasPlaybackControl
            ? (console.warn("THREE.Audio: this Audio has no playback control."),
              !1)
            : this.loop;
        }
        setLoop(t) {
          if (!1 !== this.hasPlaybackControl)
            return (
              (this.loop = t),
              !0 === this.isPlaying && (this.source.loop = this.loop),
              this
            );
          console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t) {
          return (this.loopStart = t), this;
        }
        setLoopEnd(t) {
          return (this.loopEnd = t), this;
        }
        getVolume() {
          return this.gain.gain.value;
        }
        setVolume(t) {
          return (
            this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
            this
          );
        }
      }
      class Dl {
        constructor(t, e, n) {
          let i, r, s;
          switch (((this.binding = t), (this.valueSize = n), e)) {
            case "quaternion":
              (i = this._slerp),
                (r = this._slerpAdditive),
                (s = this._setAdditiveIdentityQuaternion),
                (this.buffer = new Float64Array(6 * n)),
                (this._workIndex = 5);
              break;
            case "string":
            case "bool":
              (i = this._select),
                (r = this._select),
                (s = this._setAdditiveIdentityOther),
                (this.buffer = new Array(5 * n));
              break;
            default:
              (i = this._lerp),
                (r = this._lerpAdditive),
                (s = this._setAdditiveIdentityNumeric),
                (this.buffer = new Float64Array(5 * n));
          }
          (this._mixBufferRegion = i),
            (this._mixBufferRegionAdditive = r),
            (this._setIdentity = s),
            (this._origIndex = 3),
            (this._addIndex = 4),
            (this.cumulativeWeight = 0),
            (this.cumulativeWeightAdditive = 0),
            (this.useCount = 0),
            (this.referenceCount = 0);
        }
        accumulate(t, e) {
          const n = this.buffer,
            i = this.valueSize,
            r = t * i + i;
          let s = this.cumulativeWeight;
          if (0 === s) {
            for (let t = 0; t !== i; ++t) n[r + t] = n[t];
            s = e;
          } else {
            s += e;
            const t = e / s;
            this._mixBufferRegion(n, r, 0, t, i);
          }
          this.cumulativeWeight = s;
        }
        accumulateAdditive(t) {
          const e = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
          0 === this.cumulativeWeightAdditive && this._setIdentity(),
            this._mixBufferRegionAdditive(e, i, 0, t, n),
            (this.cumulativeWeightAdditive += t);
        }
        apply(t) {
          const e = this.valueSize,
            n = this.buffer,
            i = t * e + e,
            r = this.cumulativeWeight,
            s = this.cumulativeWeightAdditive,
            a = this.binding;
          if (
            ((this.cumulativeWeight = 0),
            (this.cumulativeWeightAdditive = 0),
            r < 1)
          ) {
            const t = e * this._origIndex;
            this._mixBufferRegion(n, i, t, 1 - r, e);
          }
          s > 0 &&
            this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
          for (let o = e, l = e + e; o !== l; ++o)
            if (n[o] !== n[o + e]) {
              a.setValue(n, i);
              break;
            }
        }
        saveOriginalState() {
          const t = this.binding,
            e = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
          t.getValue(e, i);
          for (let r = n, s = i; r !== s; ++r) e[r] = e[i + (r % n)];
          this._setIdentity(),
            (this.cumulativeWeight = 0),
            (this.cumulativeWeightAdditive = 0);
        }
        restoreOriginalState() {
          const t = 3 * this.valueSize;
          this.binding.setValue(this.buffer, t);
        }
        _setAdditiveIdentityNumeric() {
          const t = this._addIndex * this.valueSize,
            e = t + this.valueSize;
          for (let n = t; n < e; n++) this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
          this._setAdditiveIdentityNumeric(),
            (this.buffer[this._addIndex * this.valueSize + 3] = 1);
        }
        _setAdditiveIdentityOther() {
          const t = this._origIndex * this.valueSize,
            e = this._addIndex * this.valueSize;
          for (let n = 0; n < this.valueSize; n++)
            this.buffer[e + n] = this.buffer[t + n];
        }
        _select(t, e, n, i, r) {
          if (i >= 0.5) for (let s = 0; s !== r; ++s) t[e + s] = t[n + s];
        }
        _slerp(t, e, n, i) {
          Ct.slerpFlat(t, e, t, e, t, n, i);
        }
        _slerpAdditive(t, e, n, i, r) {
          const s = this._workIndex * r;
          Ct.multiplyQuaternionsFlat(t, s, t, e, t, n),
            Ct.slerpFlat(t, e, t, e, t, s, i);
        }
        _lerp(t, e, n, i, r) {
          const s = 1 - i;
          for (let a = 0; a !== r; ++a) {
            const r = e + a;
            t[r] = t[r] * s + t[n + a] * i;
          }
        }
        _lerpAdditive(t, e, n, i, r) {
          for (let s = 0; s !== r; ++s) {
            const r = e + s;
            t[r] = t[r] + t[n + s] * i;
          }
        }
      }
      const Il = "\\[\\]\\.:\\/",
        Nl = new RegExp("[\\[\\]\\.:\\/]", "g"),
        Ol = "[^\\[\\]\\.:\\/]",
        zl = "[^" + Il.replace("\\.", "") + "]",
        Bl = /((?:WC+[\/:])*)/.source.replace("WC", Ol),
        Ul = /(WCOD+)?/.source.replace("WCOD", zl),
        Hl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ol),
        Fl = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ol),
        Gl = new RegExp("^" + Bl + Ul + Hl + Fl + "$"),
        Vl = ["material", "materials", "bones"];
      class kl {
        constructor(t, e, n) {
          (this.path = e),
            (this.parsedPath = n || kl.parseTrackName(e)),
            (this.node = kl.findNode(t, this.parsedPath.nodeName) || t),
            (this.rootNode = t),
            (this.getValue = this._getValue_unbound),
            (this.setValue = this._setValue_unbound);
        }
        static create(t, e, n) {
          return t && t.isAnimationObjectGroup
            ? new kl.Composite(t, e, n)
            : new kl(t, e, n);
        }
        static sanitizeNodeName(t) {
          return t.replace(/\s/g, "_").replace(Nl, "");
        }
        static parseTrackName(t) {
          const e = Gl.exec(t);
          if (null === e)
            throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const n = {
              nodeName: e[2],
              objectName: e[3],
              objectIndex: e[4],
              propertyName: e[5],
              propertyIndex: e[6],
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
          if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1);
            -1 !== Vl.indexOf(t) &&
              ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
          }
          if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error(
              "PropertyBinding: can not parse propertyName from trackName: " + t
            );
          return n;
        }
        static findNode(t, e) {
          if (
            void 0 === e ||
            "" === e ||
            "." === e ||
            -1 === e ||
            e === t.name ||
            e === t.uuid
          )
            return t;
          if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n;
          }
          if (t.children) {
            const n = function (t) {
                for (let i = 0; i < t.length; i++) {
                  const r = t[i];
                  if (r.name === e || r.uuid === e) return r;
                  const s = n(r.children);
                  if (s) return s;
                }
                return null;
              },
              i = n(t.children);
            if (i) return i;
          }
          return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
          t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
          t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
          this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
          this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
          (this.targetObject[this.propertyName] = t[e]),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
          (this.targetObject[this.propertyName] = t[e]),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
          this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
          (this.resolvedProperty[this.propertyIndex] = t[e]),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
          (this.resolvedProperty[this.propertyIndex] = t[e]),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_fromArray(t, e) {
          this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _getValue_unbound(t, e) {
          this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
          this.bind(), this.setValue(t, e);
        }
        bind() {
          let t = this.node;
          const e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName;
          let r = e.propertyIndex;
          if (
            (t ||
              ((t = kl.findNode(this.rootNode, e.nodeName) || this.rootNode),
              (this.node = t)),
            (this.getValue = this._getValue_unavailable),
            (this.setValue = this._setValue_unavailable),
            !t)
          )
            return void console.error(
              "THREE.PropertyBinding: Trying to update node for track: " +
                this.path +
                " but it wasn't found."
            );
          if (n) {
            let i = e.objectIndex;
            switch (n) {
              case "materials":
                if (!t.material)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                    this
                  );
                if (!t.material.materials)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                    this
                  );
                t = t.material.materials;
                break;
              case "bones":
                if (!t.skeleton)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                    this
                  );
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++)
                  if (t[e].name === i) {
                    i = e;
                    break;
                  }
                break;
              default:
                if (void 0 === t[n])
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                    this
                  );
                t = t[n];
            }
            if (void 0 !== i) {
              if (void 0 === t[i])
                return void console.error(
                  "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                  this,
                  t
                );
              t = t[i];
            }
          }
          const s = t[i];
          if (void 0 === s) {
            const n = e.nodeName;
            return void console.error(
              "THREE.PropertyBinding: Trying to update property for track: " +
                n +
                "." +
                i +
                " but it wasn't found.",
              t
            );
          }
          let a = this.Versioning.None;
          (this.targetObject = t),
            void 0 !== t.needsUpdate
              ? (a = this.Versioning.NeedsUpdate)
              : void 0 !== t.matrixWorldNeedsUpdate &&
                (a = this.Versioning.MatrixWorldNeedsUpdate);
          let o = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
              if (!t.geometry)
                return void console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                  this
                );
              if (!t.geometry.isBufferGeometry)
                return void console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
                  this
                );
              if (!t.geometry.morphAttributes)
                return void console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                  this
                );
              void 0 !== t.morphTargetDictionary[r] &&
                (r = t.morphTargetDictionary[r]);
            }
            (o = this.BindingType.ArrayElement),
              (this.resolvedProperty = s),
              (this.propertyIndex = r);
          } else
            void 0 !== s.fromArray && void 0 !== s.toArray
              ? ((o = this.BindingType.HasFromToArray),
                (this.resolvedProperty = s))
              : Array.isArray(s)
              ? ((o = this.BindingType.EntireArray),
                (this.resolvedProperty = s))
              : (this.propertyName = i);
          (this.getValue = this.GetterByBindingType[o]),
            (this.setValue = this.SetterByBindingTypeAndVersioning[o][a]);
        }
        unbind() {
          (this.node = null),
            (this.getValue = this._getValue_unbound),
            (this.setValue = this._setValue_unbound);
        }
      }
      (kl.Composite = class {
        constructor(t, e, n) {
          const i = n || kl.parseTrackName(e);
          (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
        }
        getValue(t, e) {
          this.bind();
          const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
          void 0 !== i && i.getValue(t, e);
        }
        setValue(t, e) {
          const n = this._bindings;
          for (
            let i = this._targetGroup.nCachedObjects_, r = n.length;
            i !== r;
            ++i
          )
            n[i].setValue(t, e);
        }
        bind() {
          const t = this._bindings;
          for (
            let e = this._targetGroup.nCachedObjects_, n = t.length;
            e !== n;
            ++e
          )
            t[e].bind();
        }
        unbind() {
          const t = this._bindings;
          for (
            let e = this._targetGroup.nCachedObjects_, n = t.length;
            e !== n;
            ++e
          )
            t[e].unbind();
        }
      }),
        (kl.prototype.BindingType = {
          Direct: 0,
          EntireArray: 1,
          ArrayElement: 2,
          HasFromToArray: 3,
        }),
        (kl.prototype.Versioning = {
          None: 0,
          NeedsUpdate: 1,
          MatrixWorldNeedsUpdate: 2,
        }),
        (kl.prototype.GetterByBindingType = [
          kl.prototype._getValue_direct,
          kl.prototype._getValue_array,
          kl.prototype._getValue_arrayElement,
          kl.prototype._getValue_toArray,
        ]),
        (kl.prototype.SetterByBindingTypeAndVersioning = [
          [
            kl.prototype._setValue_direct,
            kl.prototype._setValue_direct_setNeedsUpdate,
            kl.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
          ],
          [
            kl.prototype._setValue_array,
            kl.prototype._setValue_array_setNeedsUpdate,
            kl.prototype._setValue_array_setMatrixWorldNeedsUpdate,
          ],
          [
            kl.prototype._setValue_arrayElement,
            kl.prototype._setValue_arrayElement_setNeedsUpdate,
            kl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
          ],
          [
            kl.prototype._setValue_fromArray,
            kl.prototype._setValue_fromArray_setNeedsUpdate,
            kl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
          ],
        ]);
      class Wl {
        constructor(t, e, n = null, i = e.blendMode) {
          (this._mixer = t),
            (this._clip = e),
            (this._localRoot = n),
            (this.blendMode = i);
          const r = e.tracks,
            s = r.length,
            a = new Array(s),
            o = { endingStart: O, endingEnd: O };
          for (let l = 0; l !== s; ++l) {
            const t = r[l].createInterpolant(null);
            (a[l] = t), (t.settings = o);
          }
          (this._interpolantSettings = o),
            (this._interpolants = a),
            (this._propertyBindings = new Array(s)),
            (this._cacheIndex = null),
            (this._byClipCacheIndex = null),
            (this._timeScaleInterpolant = null),
            (this._weightInterpolant = null),
            (this.loop = 2201),
            (this._loopCount = -1),
            (this._startTime = null),
            (this.time = 0),
            (this.timeScale = 1),
            (this._effectiveTimeScale = 1),
            (this.weight = 1),
            (this._effectiveWeight = 1),
            (this.repetitions = 1 / 0),
            (this.paused = !1),
            (this.enabled = !0),
            (this.clampWhenFinished = !1),
            (this.zeroSlopeAtStart = !0),
            (this.zeroSlopeAtEnd = !0);
        }
        play() {
          return this._mixer._activateAction(this), this;
        }
        stop() {
          return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
          return (
            (this.paused = !1),
            (this.enabled = !0),
            (this.time = 0),
            (this._loopCount = -1),
            (this._startTime = null),
            this.stopFading().stopWarping()
          );
        }
        isRunning() {
          return (
            this.enabled &&
            !this.paused &&
            0 !== this.timeScale &&
            null === this._startTime &&
            this._mixer._isActiveAction(this)
          );
        }
        isScheduled() {
          return this._mixer._isActiveAction(this);
        }
        startAt(t) {
          return (this._startTime = t), this;
        }
        setLoop(t, e) {
          return (this.loop = t), (this.repetitions = e), this;
        }
        setEffectiveWeight(t) {
          return (
            (this.weight = t),
            (this._effectiveWeight = this.enabled ? t : 0),
            this.stopFading()
          );
        }
        getEffectiveWeight() {
          return this._effectiveWeight;
        }
        fadeIn(t) {
          return this._scheduleFading(t, 0, 1);
        }
        fadeOut(t) {
          return this._scheduleFading(t, 1, 0);
        }
        crossFadeFrom(t, e, n) {
          if ((t.fadeOut(e), this.fadeIn(e), n)) {
            const n = this._clip.duration,
              i = t._clip.duration,
              r = i / n,
              s = n / i;
            t.warp(1, r, e), this.warp(s, 1, e);
          }
          return this;
        }
        crossFadeTo(t, e, n) {
          return t.crossFadeFrom(this, e, n);
        }
        stopFading() {
          const t = this._weightInterpolant;
          return (
            null !== t &&
              ((this._weightInterpolant = null),
              this._mixer._takeBackControlInterpolant(t)),
            this
          );
        }
        setEffectiveTimeScale(t) {
          return (
            (this.timeScale = t),
            (this._effectiveTimeScale = this.paused ? 0 : t),
            this.stopWarping()
          );
        }
        getEffectiveTimeScale() {
          return this._effectiveTimeScale;
        }
        setDuration(t) {
          return (this.timeScale = this._clip.duration / t), this.stopWarping();
        }
        syncWith(t) {
          return (
            (this.time = t.time),
            (this.timeScale = t.timeScale),
            this.stopWarping()
          );
        }
        halt(t) {
          return this.warp(this._effectiveTimeScale, 0, t);
        }
        warp(t, e, n) {
          const i = this._mixer,
            r = i.time,
            s = this.timeScale;
          let a = this._timeScaleInterpolant;
          null === a &&
            ((a = i._lendControlInterpolant()),
            (this._timeScaleInterpolant = a));
          const o = a.parameterPositions,
            l = a.sampleValues;
          return (
            (o[0] = r), (o[1] = r + n), (l[0] = t / s), (l[1] = e / s), this
          );
        }
        stopWarping() {
          const t = this._timeScaleInterpolant;
          return (
            null !== t &&
              ((this._timeScaleInterpolant = null),
              this._mixer._takeBackControlInterpolant(t)),
            this
          );
        }
        getMixer() {
          return this._mixer;
        }
        getClip() {
          return this._clip;
        }
        getRoot() {
          return this._localRoot || this._mixer._root;
        }
        _update(t, e, n, i) {
          if (!this.enabled) return void this._updateWeight(t);
          const r = this._startTime;
          if (null !== r) {
            const i = (t - r) * n;
            if (i < 0 || 0 === n) return;
            (this._startTime = null), (e = n * i);
          }
          e *= this._updateTimeScale(t);
          const s = this._updateTime(e),
            a = this._updateWeight(t);
          if (a > 0) {
            const t = this._interpolants,
              e = this._propertyBindings;
            if (2501 === this.blendMode)
              for (let n = 0, i = t.length; n !== i; ++n)
                t[n].evaluate(s), e[n].accumulateAdditive(a);
            else
              for (let n = 0, r = t.length; n !== r; ++n)
                t[n].evaluate(s), e[n].accumulate(i, a);
          }
        }
        _updateWeight(t) {
          let e = 0;
          if (this.enabled) {
            e = this.weight;
            const n = this._weightInterpolant;
            if (null !== n) {
              const i = n.evaluate(t)[0];
              (e *= i),
                t > n.parameterPositions[1] &&
                  (this.stopFading(), 0 === i && (this.enabled = !1));
            }
          }
          return (this._effectiveWeight = e), e;
        }
        _updateTimeScale(t) {
          let e = 0;
          if (!this.paused) {
            e = this.timeScale;
            const n = this._timeScaleInterpolant;
            if (null !== n) {
              (e *= n.evaluate(t)[0]),
                t > n.parameterPositions[1] &&
                  (this.stopWarping(),
                  0 === e ? (this.paused = !0) : (this.timeScale = e));
            }
          }
          return (this._effectiveTimeScale = e), e;
        }
        _updateTime(t) {
          const e = this._clip.duration,
            n = this.loop;
          let i = this.time + t,
            r = this._loopCount;
          const s = 2202 === n;
          if (0 === t) return -1 === r ? i : s && 1 === (1 & r) ? e - i : i;
          if (2200 === n) {
            -1 === r && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
            t: {
              if (i >= e) i = e;
              else {
                if (!(i < 0)) {
                  this.time = i;
                  break t;
                }
                i = 0;
              }
              this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
                (this.time = i),
                this._mixer.dispatchEvent({
                  type: "finished",
                  action: this,
                  direction: t < 0 ? -1 : 1,
                });
            }
          } else {
            if (
              (-1 === r &&
                (t >= 0
                  ? ((r = 0), this._setEndings(!0, 0 === this.repetitions, s))
                  : this._setEndings(0 === this.repetitions, !0, s)),
              i >= e || i < 0)
            ) {
              const n = Math.floor(i / e);
              (i -= e * n), (r += Math.abs(n));
              const a = this.repetitions - r;
              if (a <= 0)
                this.clampWhenFinished
                  ? (this.paused = !0)
                  : (this.enabled = !1),
                  (i = t > 0 ? e : 0),
                  (this.time = i),
                  this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: t > 0 ? 1 : -1,
                  });
              else {
                if (1 === a) {
                  const e = t < 0;
                  this._setEndings(e, !e, s);
                } else this._setEndings(!1, !1, s);
                (this._loopCount = r),
                  (this.time = i),
                  this._mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: n,
                  });
              }
            } else this.time = i;
            if (s && 1 === (1 & r)) return e - i;
          }
          return i;
        }
        _setEndings(t, e, n) {
          const i = this._interpolantSettings;
          n
            ? ((i.endingStart = z), (i.endingEnd = z))
            : ((i.endingStart = t ? (this.zeroSlopeAtStart ? z : O) : B),
              (i.endingEnd = e ? (this.zeroSlopeAtEnd ? z : O) : B));
        }
        _scheduleFading(t, e, n) {
          const i = this._mixer,
            r = i.time;
          let s = this._weightInterpolant;
          null === s &&
            ((s = i._lendControlInterpolant()), (this._weightInterpolant = s));
          const a = s.parameterPositions,
            o = s.sampleValues;
          return (a[0] = r), (o[0] = e), (a[1] = r + t), (o[1] = n), this;
        }
      }
      (class extends J {
        constructor(t) {
          super(),
            (this._root = t),
            this._initMemoryManager(),
            (this._accuIndex = 0),
            (this.time = 0),
            (this.timeScale = 1);
        }
        _bindAction(t, e) {
          const n = t._localRoot || this._root,
            i = t._clip.tracks,
            r = i.length,
            s = t._propertyBindings,
            a = t._interpolants,
            o = n.uuid,
            l = this._bindingsByRootAndName;
          let c = l[o];
          void 0 === c && ((c = {}), (l[o] = c));
          for (let h = 0; h !== r; ++h) {
            const t = i[h],
              r = t.name;
            let l = c[r];
            if (void 0 !== l) ++l.referenceCount, (s[h] = l);
            else {
              if (((l = s[h]), void 0 !== l)) {
                null === l._cacheIndex &&
                  (++l.referenceCount, this._addInactiveBinding(l, o, r));
                continue;
              }
              const i = e && e._propertyBindings[h].binding.parsedPath;
              (l = new Dl(
                kl.create(n, r, i),
                t.ValueTypeName,
                t.getValueSize()
              )),
                ++l.referenceCount,
                this._addInactiveBinding(l, o, r),
                (s[h] = l);
            }
            a[h].resultBuffer = l.buffer;
          }
        }
        _activateAction(t) {
          if (!this._isActiveAction(t)) {
            if (null === t._cacheIndex) {
              const e = (t._localRoot || this._root).uuid,
                n = t._clip.uuid,
                i = this._actionsByClip[n];
              this._bindAction(t, i && i.knownActions[0]),
                this._addInactiveAction(t, n, e);
            }
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
              const n = e[t];
              0 === n.useCount++ &&
                (this._lendBinding(n), n.saveOriginalState());
            }
            this._lendAction(t);
          }
        }
        _deactivateAction(t) {
          if (this._isActiveAction(t)) {
            const e = t._propertyBindings;
            for (let t = 0, n = e.length; t !== n; ++t) {
              const n = e[t];
              0 === --n.useCount &&
                (n.restoreOriginalState(), this._takeBackBinding(n));
            }
            this._takeBackAction(t);
          }
        }
        _initMemoryManager() {
          (this._actions = []),
            (this._nActiveActions = 0),
            (this._actionsByClip = {}),
            (this._bindings = []),
            (this._nActiveBindings = 0),
            (this._bindingsByRootAndName = {}),
            (this._controlInterpolants = []),
            (this._nActiveControlInterpolants = 0);
          const t = this;
          this.stats = {
            actions: {
              get total() {
                return t._actions.length;
              },
              get inUse() {
                return t._nActiveActions;
              },
            },
            bindings: {
              get total() {
                return t._bindings.length;
              },
              get inUse() {
                return t._nActiveBindings;
              },
            },
            controlInterpolants: {
              get total() {
                return t._controlInterpolants.length;
              },
              get inUse() {
                return t._nActiveControlInterpolants;
              },
            },
          };
        }
        _isActiveAction(t) {
          const e = t._cacheIndex;
          return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t, e, n) {
          const i = this._actions,
            r = this._actionsByClip;
          let s = r[e];
          if (void 0 === s)
            (s = { knownActions: [t], actionByRoot: {} }),
              (t._byClipCacheIndex = 0),
              (r[e] = s);
          else {
            const e = s.knownActions;
            (t._byClipCacheIndex = e.length), e.push(t);
          }
          (t._cacheIndex = i.length), i.push(t), (s.actionByRoot[n] = t);
        }
        _removeInactiveAction(t) {
          const e = this._actions,
            n = e[e.length - 1],
            i = t._cacheIndex;
          (n._cacheIndex = i), (e[i] = n), e.pop(), (t._cacheIndex = null);
          const r = t._clip.uuid,
            s = this._actionsByClip,
            a = s[r],
            o = a.knownActions,
            l = o[o.length - 1],
            c = t._byClipCacheIndex;
          (l._byClipCacheIndex = c),
            (o[c] = l),
            o.pop(),
            (t._byClipCacheIndex = null);
          delete a.actionByRoot[(t._localRoot || this._root).uuid],
            0 === o.length && delete s[r],
            this._removeInactiveBindingsForAction(t);
        }
        _removeInactiveBindingsForAction(t) {
          const e = t._propertyBindings;
          for (let n = 0, i = e.length; n !== i; ++n) {
            const t = e[n];
            0 === --t.referenceCount && this._removeInactiveBinding(t);
          }
        }
        _lendAction(t) {
          const e = this._actions,
            n = t._cacheIndex,
            i = this._nActiveActions++,
            r = e[i];
          (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _takeBackAction(t) {
          const e = this._actions,
            n = t._cacheIndex,
            i = --this._nActiveActions,
            r = e[i];
          (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _addInactiveBinding(t, e, n) {
          const i = this._bindingsByRootAndName,
            r = this._bindings;
          let s = i[e];
          void 0 === s && ((s = {}), (i[e] = s)),
            (s[n] = t),
            (t._cacheIndex = r.length),
            r.push(t);
        }
        _removeInactiveBinding(t) {
          const e = this._bindings,
            n = t.binding,
            i = n.rootNode.uuid,
            r = n.path,
            s = this._bindingsByRootAndName,
            a = s[i],
            o = e[e.length - 1],
            l = t._cacheIndex;
          (o._cacheIndex = l),
            (e[l] = o),
            e.pop(),
            delete a[r],
            0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t) {
          const e = this._bindings,
            n = t._cacheIndex,
            i = this._nActiveBindings++,
            r = e[i];
          (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _takeBackBinding(t) {
          const e = this._bindings,
            n = t._cacheIndex,
            i = --this._nActiveBindings,
            r = e[i];
          (t._cacheIndex = i), (e[i] = t), (r._cacheIndex = n), (e[n] = r);
        }
        _lendControlInterpolant() {
          const t = this._controlInterpolants,
            e = this._nActiveControlInterpolants++;
          let n = t[e];
          return (
            void 0 === n &&
              ((n = new Fo(
                new Float32Array(2),
                new Float32Array(2),
                1,
                this._controlInterpolantsResultBuffer
              )),
              (n.__cacheIndex = e),
              (t[e] = n)),
            n
          );
        }
        _takeBackControlInterpolant(t) {
          const e = this._controlInterpolants,
            n = t.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            r = e[i];
          (t.__cacheIndex = i), (e[i] = t), (r.__cacheIndex = n), (e[n] = r);
        }
        clipAction(t, e, n) {
          const i = e || this._root,
            r = i.uuid;
          let s = "string" === typeof t ? Zo.findByName(i, t) : t;
          const a = null !== s ? s.uuid : t,
            o = this._actionsByClip[a];
          let l = null;
          if (
            (void 0 === n && (n = null !== s ? s.blendMode : U), void 0 !== o)
          ) {
            const t = o.actionByRoot[r];
            if (void 0 !== t && t.blendMode === n) return t;
            (l = o.knownActions[0]), null === s && (s = l._clip);
          }
          if (null === s) return null;
          const c = new Wl(this, s, e, n);
          return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t, e) {
          const n = e || this._root,
            i = n.uuid,
            r = "string" === typeof t ? Zo.findByName(n, t) : t,
            s = r ? r.uuid : t,
            a = this._actionsByClip[s];
          return (void 0 !== a && a.actionByRoot[i]) || null;
        }
        stopAllAction() {
          const t = this._actions;
          for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
          return this;
        }
        update(t) {
          t *= this.timeScale;
          const e = this._actions,
            n = this._nActiveActions,
            i = (this.time += t),
            r = Math.sign(t),
            s = (this._accuIndex ^= 1);
          for (let l = 0; l !== n; ++l) {
            e[l]._update(i, t, r, s);
          }
          const a = this._bindings,
            o = this._nActiveBindings;
          for (let l = 0; l !== o; ++l) a[l].apply(s);
          return this;
        }
        setTime(t) {
          this.time = 0;
          for (let e = 0; e < this._actions.length; e++)
            this._actions[e].time = 0;
          return this.update(t);
        }
        getRoot() {
          return this._root;
        }
        uncacheClip(t) {
          const e = this._actions,
            n = t.uuid,
            i = this._actionsByClip,
            r = i[n];
          if (void 0 !== r) {
            const t = r.knownActions;
            for (let n = 0, i = t.length; n !== i; ++n) {
              const i = t[n];
              this._deactivateAction(i);
              const r = i._cacheIndex,
                s = e[e.length - 1];
              (i._cacheIndex = null),
                (i._byClipCacheIndex = null),
                (s._cacheIndex = r),
                (e[r] = s),
                e.pop(),
                this._removeInactiveBindingsForAction(i);
            }
            delete i[n];
          }
        }
        uncacheRoot(t) {
          const e = t.uuid,
            n = this._actionsByClip;
          for (const r in n) {
            const t = n[r].actionByRoot[e];
            void 0 !== t &&
              (this._deactivateAction(t), this._removeInactiveAction(t));
          }
          const i = this._bindingsByRootAndName[e];
          if (void 0 !== i)
            for (const r in i) {
              const t = i[r];
              t.restoreOriginalState(), this._removeInactiveBinding(t);
            }
        }
        uncacheAction(t, e) {
          const n = this.existingAction(t, e);
          null !== n &&
            (this._deactivateAction(n), this._removeInactiveAction(n));
        }
      }.prototype._controlInterpolantsResultBuffer = new Float32Array(1));
      class jl {
        constructor(t) {
          "string" === typeof t &&
            (console.warn("THREE.Uniform: Type parameter is no longer needed."),
            (t = arguments[1])),
            (this.value = t);
        }
        clone() {
          return new jl(
            void 0 === this.value.clone ? this.value : this.value.clone()
          );
        }
      }
      (class extends Rs {
        constructor(t, e, n = 1) {
          super(t, e), (this.meshPerAttribute = n);
        }
        copy(t) {
          return (
            super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
          );
        }
        clone(t) {
          const e = super.clone(t);
          return (e.meshPerAttribute = this.meshPerAttribute), e;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return (
            (e.isInstancedInterleavedBuffer = !0),
            (e.meshPerAttribute = this.meshPerAttribute),
            e
          );
        }
      }.prototype.isInstancedInterleavedBuffer = !0);
      const ql = new rt();
      class Xl {
        constructor(t = new rt(1 / 0, 1 / 0), e = new rt(-1 / 0, -1 / 0)) {
          (this.min = t), (this.max = e);
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = ql.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return (
            (this.min.x = this.min.y = 1 / 0),
            (this.max.x = this.max.y = -1 / 0),
            this
          );
        }
        isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t) {
          return this.isEmpty()
            ? t.set(0, 0)
            : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty()
            ? t.set(0, 0)
            : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        containsPoint(t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y
          );
        }
        containsBox(t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y
          );
        }
        getParameter(t, e) {
          return e.set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y)
          );
        }
        intersectsBox(t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y
          );
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return ql.copy(t).clamp(this.min, this.max).sub(t).length();
        }
        intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this;
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      Xl.prototype.isBox2 = !0;
      const Jl = new Lt(),
        Yl = new oe(),
        Zl = new oe();
      function Kl(t) {
        const e = [];
        !0 === t.isBone && e.push(t);
        for (let n = 0; n < t.children.length; n++)
          e.push.apply(e, Kl(t.children[n]));
        return e;
      }
      const Ql = new ArrayBuffer(4),
        $l = (new Float32Array(Ql), new Uint32Array(Ql), new Uint32Array(512)),
        tc = new Uint32Array(512);
      for (let rc = 0; rc < 256; ++rc) {
        const t = rc - 127;
        t < -27
          ? (($l[rc] = 0),
            ($l[256 | rc] = 32768),
            (tc[rc] = 24),
            (tc[256 | rc] = 24))
          : t < -14
          ? (($l[rc] = 1024 >> (-t - 14)),
            ($l[256 | rc] = (1024 >> (-t - 14)) | 32768),
            (tc[rc] = -t - 1),
            (tc[256 | rc] = -t - 1))
          : t <= 15
          ? (($l[rc] = (t + 15) << 10),
            ($l[256 | rc] = ((t + 15) << 10) | 32768),
            (tc[rc] = 13),
            (tc[256 | rc] = 13))
          : t < 128
          ? (($l[rc] = 31744),
            ($l[256 | rc] = 64512),
            (tc[rc] = 24),
            (tc[256 | rc] = 24))
          : (($l[rc] = 31744),
            ($l[256 | rc] = 64512),
            (tc[rc] = 13),
            (tc[256 | rc] = 13));
      }
      const ec = new Uint32Array(2048),
        nc = new Uint32Array(64),
        ic = new Uint32Array(64);
      for (let rc = 1; rc < 1024; ++rc) {
        let t = rc << 13,
          e = 0;
        for (; 0 === (8388608 & t); ) (t <<= 1), (e -= 8388608);
        (t &= -8388609), (e += 947912704), (ec[rc] = t | e);
      }
      for (let rc = 1024; rc < 2048; ++rc)
        ec[rc] = 939524096 + ((rc - 1024) << 13);
      for (let rc = 1; rc < 31; ++rc) nc[rc] = rc << 23;
      (nc[31] = 1199570944), (nc[32] = 2147483648);
      for (let rc = 33; rc < 63; ++rc) nc[rc] = 2147483648 + ((rc - 32) << 23);
      nc[63] = 3347054592;
      for (let rc = 1; rc < 64; ++rc) 32 !== rc && (ic[rc] = 1024);
      (Ta.create = function (t, e) {
        return (
          console.log("THREE.Curve.create() has been deprecated"),
          (t.prototype = Object.create(Ta.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.getPoint = e),
          t
        );
      }),
        (qa.prototype.fromPoints = function (t) {
          return (
            console.warn(
              "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
            ),
            this.setFromPoints(t)
          );
        });
      ((class extends ga {
        constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
          (n = new xt(n)), (i = new xt(i));
          const r = e / 2,
            s = t / e,
            a = t / 2,
            o = [],
            l = [];
          for (let h = 0, u = 0, d = -a; h <= e; h++, d += s) {
            o.push(-a, 0, d, a, 0, d), o.push(d, 0, -a, d, 0, a);
            const t = h === r ? n : i;
            t.toArray(l, u),
              (u += 3),
              t.toArray(l, u),
              (u += 3),
              t.toArray(l, u),
              (u += 3),
              t.toArray(l, u),
              (u += 3);
          }
          const c = new on();
          c.setAttribute("position", new Qe(o, 3)),
            c.setAttribute("color", new Qe(l, 3));
          super(c, new oa({ vertexColors: !0, toneMapped: !1 })),
            (this.type = "GridHelper");
        }
      }.prototype.setColors = function () {
        console.error(
          "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
        );
      }),
        (class extends ga {
          constructor(t) {
            const e = Kl(t),
              n = new on(),
              i = [],
              r = [],
              s = new xt(0, 0, 1),
              a = new xt(0, 1, 0);
            for (let o = 0; o < e.length; o++) {
              const t = e[o];
              t.parent &&
                t.parent.isBone &&
                (i.push(0, 0, 0),
                i.push(0, 0, 0),
                r.push(s.r, s.g, s.b),
                r.push(a.r, a.g, a.b));
            }
            n.setAttribute("position", new Qe(i, 3)),
              n.setAttribute("color", new Qe(r, 3));
            super(
              n,
              new oa({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0,
              })
            ),
              (this.type = "SkeletonHelper"),
              (this.isSkeletonHelper = !0),
              (this.root = t),
              (this.bones = e),
              (this.matrix = t.matrixWorld),
              (this.matrixAutoUpdate = !1);
          }
          updateMatrixWorld(t) {
            const e = this.bones,
              n = this.geometry,
              i = n.getAttribute("position");
            Zl.copy(this.root.matrixWorld).invert();
            for (let r = 0, s = 0; r < e.length; r++) {
              const t = e[r];
              t.parent &&
                t.parent.isBone &&
                (Yl.multiplyMatrices(Zl, t.matrixWorld),
                Jl.setFromMatrixPosition(Yl),
                i.setXYZ(s, Jl.x, Jl.y, Jl.z),
                Yl.multiplyMatrices(Zl, t.parent.matrixWorld),
                Jl.setFromMatrixPosition(Yl),
                i.setXYZ(s + 1, Jl.x, Jl.y, Jl.z),
                (s += 2));
            }
            (n.getAttribute("position").needsUpdate = !0),
              super.updateMatrixWorld(t);
          }
        }.prototype.update = function () {
          console.error(
            "THREE.SkeletonHelper: update() no longer needs to be called."
          );
        }));
      (el.prototype.extractUrlBase = function (t) {
        return (
          console.warn(
            "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
          ),
          Tl.extractUrlBase(t)
        );
      }),
        (el.Handlers = {
          add: function () {
            console.error(
              "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
            );
          },
          get: function () {
            console.error(
              "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
            );
          },
        });
      (Xl.prototype.center = function (t) {
        return (
          console.warn(
            "THREE.Box2: .center() has been renamed to .getCenter()."
          ),
          this.getCenter(t)
        );
      }),
        (Xl.prototype.empty = function () {
          return (
            console.warn(
              "THREE.Box2: .empty() has been renamed to .isEmpty()."
            ),
            this.isEmpty()
          );
        }),
        (Xl.prototype.isIntersectionBox = function (t) {
          return (
            console.warn(
              "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
            ),
            this.intersectsBox(t)
          );
        }),
        (Xl.prototype.size = function (t) {
          return (
            console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(t)
          );
        }),
        (It.prototype.center = function (t) {
          return (
            console.warn(
              "THREE.Box3: .center() has been renamed to .getCenter()."
            ),
            this.getCenter(t)
          );
        }),
        (It.prototype.empty = function () {
          return (
            console.warn(
              "THREE.Box3: .empty() has been renamed to .isEmpty()."
            ),
            this.isEmpty()
          );
        }),
        (It.prototype.isIntersectionBox = function (t) {
          return (
            console.warn(
              "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
            ),
            this.intersectsBox(t)
          );
        }),
        (It.prototype.isIntersectionSphere = function (t) {
          return (
            console.warn(
              "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
            ),
            this.intersectsSphere(t)
          );
        }),
        (It.prototype.size = function (t) {
          return (
            console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(t)
          );
        }),
        (ve.prototype.toVector3 = function () {
          console.error(
            "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
          );
        }),
        (Qt.prototype.empty = function () {
          return (
            console.warn(
              "THREE.Sphere: .empty() has been renamed to .isEmpty()."
            ),
            this.isEmpty()
          );
        }),
        (Wn.prototype.setFromMatrix = function (t) {
          return (
            console.warn(
              "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
            ),
            this.setFromProjectionMatrix(t)
          );
        }),
        (st.prototype.flattenToArrayOffset = function (t, e) {
          return (
            console.warn(
              "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
            ),
            this.toArray(t, e)
          );
        }),
        (st.prototype.multiplyVector3 = function (t) {
          return (
            console.warn(
              "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
            ),
            t.applyMatrix3(this)
          );
        }),
        (st.prototype.multiplyVector3Array = function () {
          console.error(
            "THREE.Matrix3: .multiplyVector3Array() has been removed."
          );
        }),
        (st.prototype.applyToBufferAttribute = function (t) {
          return (
            console.warn(
              "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
            ),
            t.applyMatrix3(this)
          );
        }),
        (st.prototype.applyToVector3Array = function () {
          console.error(
            "THREE.Matrix3: .applyToVector3Array() has been removed."
          );
        }),
        (st.prototype.getInverse = function (t) {
          return (
            console.warn(
              "THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
            ),
            this.copy(t).invert()
          );
        }),
        (oe.prototype.extractPosition = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
            ),
            this.copyPosition(t)
          );
        }),
        (oe.prototype.flattenToArrayOffset = function (t, e) {
          return (
            console.warn(
              "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
            ),
            this.toArray(t, e)
          );
        }),
        (oe.prototype.getPosition = function () {
          return (
            console.warn(
              "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
            ),
            new Lt().setFromMatrixColumn(this, 3)
          );
        }),
        (oe.prototype.setRotationFromQuaternion = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
            ),
            this.makeRotationFromQuaternion(t)
          );
        }),
        (oe.prototype.multiplyToArray = function () {
          console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
        }),
        (oe.prototype.multiplyVector3 = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
            ),
            t.applyMatrix4(this)
          );
        }),
        (oe.prototype.multiplyVector4 = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
            ),
            t.applyMatrix4(this)
          );
        }),
        (oe.prototype.multiplyVector3Array = function () {
          console.error(
            "THREE.Matrix4: .multiplyVector3Array() has been removed."
          );
        }),
        (oe.prototype.rotateAxis = function (t) {
          console.warn(
            "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
          ),
            t.transformDirection(this);
        }),
        (oe.prototype.crossVector = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
            ),
            t.applyMatrix4(this)
          );
        }),
        (oe.prototype.translate = function () {
          console.error("THREE.Matrix4: .translate() has been removed.");
        }),
        (oe.prototype.rotateX = function () {
          console.error("THREE.Matrix4: .rotateX() has been removed.");
        }),
        (oe.prototype.rotateY = function () {
          console.error("THREE.Matrix4: .rotateY() has been removed.");
        }),
        (oe.prototype.rotateZ = function () {
          console.error("THREE.Matrix4: .rotateZ() has been removed.");
        }),
        (oe.prototype.rotateByAxis = function () {
          console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
        }),
        (oe.prototype.applyToBufferAttribute = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
            ),
            t.applyMatrix4(this)
          );
        }),
        (oe.prototype.applyToVector3Array = function () {
          console.error(
            "THREE.Matrix4: .applyToVector3Array() has been removed."
          );
        }),
        (oe.prototype.makeFrustum = function (t, e, n, i, r, s) {
          return (
            console.warn(
              "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
            ),
            this.makePerspective(t, e, i, n, r, s)
          );
        }),
        (oe.prototype.getInverse = function (t) {
          return (
            console.warn(
              "THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."
            ),
            this.copy(t).invert()
          );
        }),
        (Gn.prototype.isIntersectionLine = function (t) {
          return (
            console.warn(
              "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
            ),
            this.intersectsLine(t)
          );
        }),
        (Ct.prototype.multiplyVector3 = function (t) {
          return (
            console.warn(
              "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
            ),
            t.applyQuaternion(this)
          );
        }),
        (Ct.prototype.inverse = function () {
          return (
            console.warn(
              "THREE.Quaternion: .inverse() has been renamed to invert()."
            ),
            this.invert()
          );
        }),
        (ae.prototype.isIntersectionBox = function (t) {
          return (
            console.warn(
              "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
            ),
            this.intersectsBox(t)
          );
        }),
        (ae.prototype.isIntersectionPlane = function (t) {
          return (
            console.warn(
              "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
            ),
            this.intersectsPlane(t)
          );
        }),
        (ae.prototype.isIntersectionSphere = function (t) {
          return (
            console.warn(
              "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
            ),
            this.intersectsSphere(t)
          );
        }),
        (ke.prototype.area = function () {
          return (
            console.warn(
              "THREE.Triangle: .area() has been renamed to .getArea()."
            ),
            this.getArea()
          );
        }),
        (ke.prototype.barycoordFromPoint = function (t, e) {
          return (
            console.warn(
              "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
            ),
            this.getBarycoord(t, e)
          );
        }),
        (ke.prototype.midpoint = function (t) {
          return (
            console.warn(
              "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
            ),
            this.getMidpoint(t)
          );
        }),
        (ke.prototypenormal = function (t) {
          return (
            console.warn(
              "THREE.Triangle: .normal() has been renamed to .getNormal()."
            ),
            this.getNormal(t)
          );
        }),
        (ke.prototype.plane = function (t) {
          return (
            console.warn(
              "THREE.Triangle: .plane() has been renamed to .getPlane()."
            ),
            this.getPlane(t)
          );
        }),
        (ke.barycoordFromPoint = function (t, e, n, i, r) {
          return (
            console.warn(
              "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
            ),
            ke.getBarycoord(t, e, n, i, r)
          );
        }),
        (ke.normal = function (t, e, n, i) {
          return (
            console.warn(
              "THREE.Triangle: .normal() has been renamed to .getNormal()."
            ),
            ke.getNormal(t, e, n, i)
          );
        }),
        (Xa.prototype.extractAllPoints = function (t) {
          return (
            console.warn(
              "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
            ),
            this.extractPoints(t)
          );
        }),
        (Xa.prototype.extrude = function (t) {
          return (
            console.warn(
              "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
            ),
            new wo(this, t)
          );
        }),
        (Xa.prototype.makeGeometry = function (t) {
          return (
            console.warn(
              "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
            ),
            new Eo(this, t)
          );
        }),
        (rt.prototype.fromAttribute = function (t, e, n) {
          return (
            console.warn(
              "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
            ),
            this.fromBufferAttribute(t, e, n)
          );
        }),
        (rt.prototype.distanceToManhattan = function (t) {
          return (
            console.warn(
              "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
            ),
            this.manhattanDistanceTo(t)
          );
        }),
        (rt.prototype.lengthManhattan = function () {
          return (
            console.warn(
              "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
            ),
            this.manhattanLength()
          );
        }),
        (Lt.prototype.setEulerFromRotationMatrix = function () {
          console.error(
            "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
          );
        }),
        (Lt.prototype.setEulerFromQuaternion = function () {
          console.error(
            "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
          );
        }),
        (Lt.prototype.getPositionFromMatrix = function (t) {
          return (
            console.warn(
              "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
            ),
            this.setFromMatrixPosition(t)
          );
        }),
        (Lt.prototype.getScaleFromMatrix = function (t) {
          return (
            console.warn(
              "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
            ),
            this.setFromMatrixScale(t)
          );
        }),
        (Lt.prototype.getColumnFromMatrix = function (t, e) {
          return (
            console.warn(
              "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
            ),
            this.setFromMatrixColumn(e, t)
          );
        }),
        (Lt.prototype.applyProjection = function (t) {
          return (
            console.warn(
              "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
            ),
            this.applyMatrix4(t)
          );
        }),
        (Lt.prototype.fromAttribute = function (t, e, n) {
          return (
            console.warn(
              "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
            ),
            this.fromBufferAttribute(t, e, n)
          );
        }),
        (Lt.prototype.distanceToManhattan = function (t) {
          return (
            console.warn(
              "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
            ),
            this.manhattanDistanceTo(t)
          );
        }),
        (Lt.prototype.lengthManhattan = function () {
          return (
            console.warn(
              "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
            ),
            this.manhattanLength()
          );
        }),
        (Et.prototype.fromAttribute = function (t, e, n) {
          return (
            console.warn(
              "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
            ),
            this.fromBufferAttribute(t, e, n)
          );
        }),
        (Et.prototype.lengthManhattan = function () {
          return (
            console.warn(
              "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
            ),
            this.manhattanLength()
          );
        }),
        (De.prototype.getChildByName = function (t) {
          return (
            console.warn(
              "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
            ),
            this.getObjectByName(t)
          );
        }),
        (De.prototype.renderDepth = function () {
          console.warn(
            "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
          );
        }),
        (De.prototype.translate = function (t, e) {
          return (
            console.warn(
              "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
            ),
            this.translateOnAxis(e, t)
          );
        }),
        (De.prototype.getWorldRotation = function () {
          console.error(
            "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
          );
        }),
        (De.prototype.applyMatrix = function (t) {
          return (
            console.warn(
              "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
            ),
            this.applyMatrix4(t)
          );
        }),
        Object.defineProperties(De.prototype, {
          eulerOrder: {
            get: function () {
              return (
                console.warn(
                  "THREE.Object3D: .eulerOrder is now .rotation.order."
                ),
                this.rotation.order
              );
            },
            set: function (t) {
              console.warn(
                "THREE.Object3D: .eulerOrder is now .rotation.order."
              ),
                (this.rotation.order = t);
            },
          },
          useQuaternion: {
            get: function () {
              console.warn(
                "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
              );
            },
            set: function () {
              console.warn(
                "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
              );
            },
          },
        }),
        (En.prototype.setDrawMode = function () {
          console.error(
            "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
          );
        }),
        Object.defineProperties(En.prototype, {
          drawMode: {
            get: function () {
              return (
                console.error(
                  "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
                ),
                0
              );
            },
            set: function () {
              console.error(
                "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
              );
            },
          },
        }),
        (Qs.prototype.initBones = function () {
          console.error("THREE.SkinnedMesh: initBones() has been removed.");
        }),
        (In.prototype.setLens = function (t, e) {
          console.warn(
            "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
          ),
            void 0 !== e && (this.filmGauge = e),
            this.setFocalLength(t);
        }),
        Object.defineProperties(ol.prototype, {
          onlyShadow: {
            set: function () {
              console.warn("THREE.Light: .onlyShadow has been removed.");
            },
          },
          shadowCameraFov: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
              ),
                (this.shadow.camera.fov = t);
            },
          },
          shadowCameraLeft: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
              ),
                (this.shadow.camera.left = t);
            },
          },
          shadowCameraRight: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
              ),
                (this.shadow.camera.right = t);
            },
          },
          shadowCameraTop: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
              ),
                (this.shadow.camera.top = t);
            },
          },
          shadowCameraBottom: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
              ),
                (this.shadow.camera.bottom = t);
            },
          },
          shadowCameraNear: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
              ),
                (this.shadow.camera.near = t);
            },
          },
          shadowCameraFar: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
              ),
                (this.shadow.camera.far = t);
            },
          },
          shadowCameraVisible: {
            set: function () {
              console.warn(
                "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
              );
            },
          },
          shadowBias: {
            set: function (t) {
              console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                (this.shadow.bias = t);
            },
          },
          shadowDarkness: {
            set: function () {
              console.warn("THREE.Light: .shadowDarkness has been removed.");
            },
          },
          shadowMapWidth: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
              ),
                (this.shadow.mapSize.width = t);
            },
          },
          shadowMapHeight: {
            set: function (t) {
              console.warn(
                "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
              ),
                (this.shadow.mapSize.height = t);
            },
          },
        }),
        Object.defineProperties(Ye.prototype, {
          length: {
            get: function () {
              return (
                console.warn(
                  "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
                ),
                this.array.length
              );
            },
          },
          dynamic: {
            get: function () {
              return (
                console.warn(
                  "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
                ),
                this.usage === j
              );
            },
            set: function () {
              console.warn(
                "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
              ),
                this.setUsage(j);
            },
          },
        }),
        (Ye.prototype.setDynamic = function (t) {
          return (
            console.warn(
              "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
            ),
            this.setUsage(!0 === t ? j : W),
            this
          );
        }),
        (Ye.prototype.copyIndicesArray = function () {
          console.error(
            "THREE.BufferAttribute: .copyIndicesArray() has been removed."
          );
        }),
        (Ye.prototype.setArray = function () {
          console.error(
            "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
          );
        }),
        (on.prototype.addIndex = function (t) {
          console.warn(
            "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
          ),
            this.setIndex(t);
        }),
        (on.prototype.addAttribute = function (t, e) {
          return (
            console.warn(
              "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
            ),
            (e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
              ? "index" === t
                ? (console.warn(
                    "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
                  ),
                  this.setIndex(e),
                  this)
                : this.setAttribute(t, e)
              : (console.warn(
                  "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
                ),
                this.setAttribute(t, new Ye(arguments[1], arguments[2])))
          );
        }),
        (on.prototype.addDrawCall = function (t, e, n) {
          void 0 !== n &&
            console.warn(
              "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
            ),
            console.warn(
              "THREE.BufferGeometry: .addDrawCall() is now .addGroup()."
            ),
            this.addGroup(t, e);
        }),
        (on.prototype.clearDrawCalls = function () {
          console.warn(
            "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
          ),
            this.clearGroups();
        }),
        (on.prototype.computeOffsets = function () {
          console.warn(
            "THREE.BufferGeometry: .computeOffsets() has been removed."
          );
        }),
        (on.prototype.removeAttribute = function (t) {
          return (
            console.warn(
              "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
            ),
            this.deleteAttribute(t)
          );
        }),
        (on.prototype.applyMatrix = function (t) {
          return (
            console.warn(
              "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
            ),
            this.applyMatrix4(t)
          );
        }),
        Object.defineProperties(on.prototype, {
          drawcalls: {
            get: function () {
              return (
                console.error(
                  "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
                ),
                this.groups
              );
            },
          },
          offsets: {
            get: function () {
              return (
                console.warn(
                  "THREE.BufferGeometry: .offsets has been renamed to .groups."
                ),
                this.groups
              );
            },
          },
        }),
        (Rs.prototype.setDynamic = function (t) {
          return (
            console.warn(
              "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
            ),
            this.setUsage(!0 === t ? j : W),
            this
          );
        }),
        (Rs.prototype.setArray = function () {
          console.error(
            "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
          );
        }),
        (wo.prototype.getArrays = function () {
          console.error(
            "THREE.ExtrudeGeometry: .getArrays() has been removed."
          );
        }),
        (wo.prototype.addShapeList = function () {
          console.error(
            "THREE.ExtrudeGeometry: .addShapeList() has been removed."
          );
        }),
        (wo.prototype.addShape = function () {
          console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
        }),
        (As.prototype.dispose = function () {
          console.error("THREE.Scene: .dispose() has been removed.");
        }),
        (jl.prototype.onUpdate = function () {
          return (
            console.warn(
              "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
            ),
            this
          );
        }),
        Object.defineProperties(je.prototype, {
          wrapAround: {
            get: function () {
              console.warn("THREE.Material: .wrapAround has been removed.");
            },
            set: function () {
              console.warn("THREE.Material: .wrapAround has been removed.");
            },
          },
          overdraw: {
            get: function () {
              console.warn("THREE.Material: .overdraw has been removed.");
            },
            set: function () {
              console.warn("THREE.Material: .overdraw has been removed.");
            },
          },
          wrapRGB: {
            get: function () {
              return (
                console.warn("THREE.Material: .wrapRGB has been removed."),
                new xt()
              );
            },
          },
          shading: {
            get: function () {
              console.error(
                "THREE." +
                  this.type +
                  ": .shading has been removed. Use the boolean .flatShading instead."
              );
            },
            set: function (t) {
              console.warn(
                "THREE." +
                  this.type +
                  ": .shading has been removed. Use the boolean .flatShading instead."
              ),
                (this.flatShading = 1 === t);
            },
          },
          stencilMask: {
            get: function () {
              return (
                console.warn(
                  "THREE." +
                    this.type +
                    ": .stencilMask has been removed. Use .stencilFuncMask instead."
                ),
                this.stencilFuncMask
              );
            },
            set: function (t) {
              console.warn(
                "THREE." +
                  this.type +
                  ": .stencilMask has been removed. Use .stencilFuncMask instead."
              ),
                (this.stencilFuncMask = t);
            },
          },
          vertexTangents: {
            get: function () {
              console.warn(
                "THREE." + this.type + ": .vertexTangents has been removed."
              );
            },
            set: function () {
              console.warn(
                "THREE." + this.type + ": .vertexTangents has been removed."
              );
            },
          },
        }),
        Object.defineProperties(Pn.prototype, {
          derivatives: {
            get: function () {
              return (
                console.warn(
                  "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
                ),
                this.extensions.derivatives
              );
            },
            set: function (t) {
              console.warn(
                "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
              ),
                (this.extensions.derivatives = t);
            },
          },
        }),
        (Ss.prototype.clearTarget = function (t, e, n, i) {
          console.warn(
            "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
          ),
            this.setRenderTarget(t),
            this.clear(e, n, i);
        }),
        (Ss.prototype.animate = function (t) {
          console.warn(
            "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
          ),
            this.setAnimationLoop(t);
        }),
        (Ss.prototype.getCurrentRenderTarget = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
            ),
            this.getRenderTarget()
          );
        }),
        (Ss.prototype.getMaxAnisotropy = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
            ),
            this.capabilities.getMaxAnisotropy()
          );
        }),
        (Ss.prototype.getPrecision = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
            ),
            this.capabilities.precision
          );
        }),
        (Ss.prototype.resetGLState = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
            ),
            this.state.reset()
          );
        }),
        (Ss.prototype.supportsFloatTextures = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
            ),
            this.extensions.get("OES_texture_float")
          );
        }),
        (Ss.prototype.supportsHalfFloatTextures = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
            ),
            this.extensions.get("OES_texture_half_float")
          );
        }),
        (Ss.prototype.supportsStandardDerivatives = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
            ),
            this.extensions.get("OES_standard_derivatives")
          );
        }),
        (Ss.prototype.supportsCompressedTextureS3TC = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
            ),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
          );
        }),
        (Ss.prototype.supportsCompressedTexturePVRTC = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
            ),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
          );
        }),
        (Ss.prototype.supportsBlendMinMax = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
            ),
            this.extensions.get("EXT_blend_minmax")
          );
        }),
        (Ss.prototype.supportsVertexTextures = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
            ),
            this.capabilities.vertexTextures
          );
        }),
        (Ss.prototype.supportsInstancedArrays = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
            ),
            this.extensions.get("ANGLE_instanced_arrays")
          );
        }),
        (Ss.prototype.enableScissorTest = function (t) {
          console.warn(
            "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
          ),
            this.setScissorTest(t);
        }),
        (Ss.prototype.initMaterial = function () {
          console.warn(
            "THREE.WebGLRenderer: .initMaterial() has been removed."
          );
        }),
        (Ss.prototype.addPrePlugin = function () {
          console.warn(
            "THREE.WebGLRenderer: .addPrePlugin() has been removed."
          );
        }),
        (Ss.prototype.addPostPlugin = function () {
          console.warn(
            "THREE.WebGLRenderer: .addPostPlugin() has been removed."
          );
        }),
        (Ss.prototype.updateShadowMap = function () {
          console.warn(
            "THREE.WebGLRenderer: .updateShadowMap() has been removed."
          );
        }),
        (Ss.prototype.setFaceCulling = function () {
          console.warn(
            "THREE.WebGLRenderer: .setFaceCulling() has been removed."
          );
        }),
        (Ss.prototype.allocTextureUnit = function () {
          console.warn(
            "THREE.WebGLRenderer: .allocTextureUnit() has been removed."
          );
        }),
        (Ss.prototype.setTexture = function () {
          console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
        }),
        (Ss.prototype.setTexture2D = function () {
          console.warn(
            "THREE.WebGLRenderer: .setTexture2D() has been removed."
          );
        }),
        (Ss.prototype.setTextureCube = function () {
          console.warn(
            "THREE.WebGLRenderer: .setTextureCube() has been removed."
          );
        }),
        (Ss.prototype.getActiveMipMapLevel = function () {
          return (
            console.warn(
              "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
            ),
            this.getActiveMipmapLevel()
          );
        }),
        Object.defineProperties(Ss.prototype, {
          shadowMapEnabled: {
            get: function () {
              return this.shadowMap.enabled;
            },
            set: function (t) {
              console.warn(
                "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
              ),
                (this.shadowMap.enabled = t);
            },
          },
          shadowMapType: {
            get: function () {
              return this.shadowMap.type;
            },
            set: function (t) {
              console.warn(
                "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
              ),
                (this.shadowMap.type = t);
            },
          },
          shadowMapCullFace: {
            get: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
              );
            },
          },
          context: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
                ),
                this.getContext()
              );
            },
          },
          vr: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .vr has been renamed to .xr"
                ),
                this.xr
              );
            },
          },
          gammaInput: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
                ),
                !1
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
              );
            },
          },
          gammaOutput: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
                ),
                !1
              );
            },
            set: function (t) {
              console.warn(
                "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
              ),
                (this.outputEncoding = !0 === t ? F : H);
            },
          },
          toneMappingWhitePoint: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
                ),
                1
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
              );
            },
          },
          gammaFactor: {
            get: function () {
              return (
                console.warn(
                  "THREE.WebGLRenderer: .gammaFactor has been removed."
                ),
                2
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .gammaFactor has been removed."
              );
            },
          },
        }),
        Object.defineProperties(ps.prototype, {
          cullFace: {
            get: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
              );
            },
          },
          renderReverseSided: {
            get: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
              );
            },
          },
          renderSingleSided: {
            get: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
              );
            },
            set: function () {
              console.warn(
                "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
              );
            },
          },
        });
      Object.defineProperties(Tt.prototype, {
        wrapS: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
              ),
              this.texture.wrapS
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."
            ),
              (this.texture.wrapS = t);
          },
        },
        wrapT: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
              ),
              this.texture.wrapT
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."
            ),
              (this.texture.wrapT = t);
          },
        },
        magFilter: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
              ),
              this.texture.magFilter
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
            ),
              (this.texture.magFilter = t);
          },
        },
        minFilter: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
              ),
              this.texture.minFilter
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
            ),
              (this.texture.minFilter = t);
          },
        },
        anisotropy: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
              ),
              this.texture.anisotropy
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
            ),
              (this.texture.anisotropy = t);
          },
        },
        offset: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .offset is now .texture.offset."
              ),
              this.texture.offset
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .offset is now .texture.offset."
            ),
              (this.texture.offset = t);
          },
        },
        repeat: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
              ),
              this.texture.repeat
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
            ),
              (this.texture.repeat = t);
          },
        },
        format: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .format is now .texture.format."
              ),
              this.texture.format
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .format is now .texture.format."
            ),
              (this.texture.format = t);
          },
        },
        type: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .type is now .texture.type."
              ),
              this.texture.type
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .type is now .texture.type."
            ),
              (this.texture.type = t);
          },
        },
        generateMipmaps: {
          get: function () {
            return (
              console.warn(
                "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
              ),
              this.texture.generateMipmaps
            );
          },
          set: function (t) {
            console.warn(
              "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
            ),
              (this.texture.generateMipmaps = t);
          },
        },
      }),
        (Pl.prototype.load = function (t) {
          console.warn(
            "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
          );
          const e = this;
          return (
            new Ll().load(t, function (t) {
              e.setBuffer(t);
            }),
            this
          );
        }),
        (On.prototype.updateCubeMap = function (t, e) {
          return (
            console.warn(
              "THREE.CubeCamera: .updateCubeMap() is now .update()."
            ),
            this.update(t, e)
          );
        }),
        (On.prototype.clear = function (t, e, n, i) {
          return (
            console.warn(
              "THREE.CubeCamera: .clear() is now .renderTarget.clear()."
            ),
            this.renderTarget.clear(t, e, n, i)
          );
        }),
        (_t.crossOrigin = void 0),
        (_t.loadTexture = function (t, e, n, i) {
          console.warn(
            "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
          );
          const r = new al();
          r.setCrossOrigin(this.crossOrigin);
          const s = r.load(t, n, void 0, i);
          return e && (s.mapping = e), s;
        }),
        (_t.loadTextureCube = function (t, e, n, i) {
          console.warn(
            "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
          );
          const r = new sl();
          r.setCrossOrigin(this.crossOrigin);
          const s = r.load(t, n, void 0, i);
          return e && (s.mapping = e), s;
        }),
        (_t.loadCompressedTexture = function () {
          console.error(
            "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
          );
        }),
        (_t.loadCompressedTextureCube = function () {
          console.error(
            "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
          );
        });
      "undefined" !== typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("register", { detail: { revision: i } })
        ),
        "undefined" !== typeof window &&
          (window.__THREE__
            ? console.warn(
                "WARNING: Multiple instances of Three.js being imported."
              )
            : (window.__THREE__ = i));
    },
  },
]);
