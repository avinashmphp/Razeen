<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\ResultRequest;
use App\Http\Resources\ResultResource;


class ResultController extends Controller
{
    public function getResult(ResultRequest $request)
    {
        return ResultResource::collection(Category::with('products.bank')->where('slug_en', $request->cat)->get())
            ->response()
            ->setStatusCode(200);
    }
}
