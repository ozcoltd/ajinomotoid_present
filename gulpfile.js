const { src , dest , watch , series , parallel } = require('gulp');

const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const glob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const imgmin = require('gulp-imagemin');
const changed = require('gulp-changed');

const browsersync = require('browser-sync');



const html = done => {
    src(['./src/assets/ejs/**/*.ejs' , '!'+'./src/assets/ejs/**/_*.ejs'])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({extname: '.html'}))
    .pipe(dest('./dist'));
    done();
}



const css = done => {
    src('./src/assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(glob())
    .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
    .pipe(postcss([
        autoprefixer({
            cascade: false,
            grid: true,
        })
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist/ajinomotoid/campaign/npcp2025sp/assets/css'));
    done();
}



const js = done => {
    webpackStream( webpackConfig , webpack ).on('error',function(){
        this.emit('end');
    })
    .pipe(dest('./dist/ajinomotoid/campaign/npcp2025sp/assets/js'));
    done();
}



const img = done => {
    src('./src/assets/img/**/*')
    .pipe(changed('./dist/ajinomotoid/campaign/npcp2025sp/assets/img'))
    .pipe(imgmin())
    .pipe(dest('./dist/ajinomotoid/campaign/npcp2025sp/assets/img'));
    done();
}



const buildServer = done => {
    browsersync.init({
        port: 8080,
        notify: false,
        server: {
            baseDir: './dist',
        }
    });
    done();
}

const browserReload = done => {
    browsersync.reload();
    done();
}



const watchFiles = done => {
    watch('./src/assets/ejs/**/*.ejs' , series( html , browserReload ));
    watch('./src/assets/scss/**/*.scss' , series( css , browserReload ));
    watch('./src/assets/js/**/*.js' , series( js , browserReload ));
    watch('./src/assets/img/**/*' , series( img , browserReload ));
    done();
}



exports.default = parallel( buildServer , watchFiles );