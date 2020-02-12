<?php

namespace App\Http\Controllers;


use App\Models\Bank;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\ProductReuest;
use App\Http\Resources\ProductResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('spa');
    }

    /* 
    * List all products
    */
    public function getProducts()
    {
        return ProductResource::collection(Product::with('bank')->get())
            ->response()
            ->setStatusCode(200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductReuest $request)
    {
        $product = new Product;
        $product->name_en = $request->nameEn;
        $product->slug_en = Str::slug($request->nameEn);
        $product->name_ar = $request->nameEn;
        $product->slug_ar =  Str::slug($request->nameAr);
        $product->percentage = $request->percentage;
        $product->bank()->associate($request->bank);
        $product->save();
        return response()->json(['success' => 'Product Created'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductReuest $request, Product $product)
    {
        try {
            $product = Product::findOrFail($product->id);
            $product->name_en = $request->nameEn;
            $product->slug_en = Str::slug($request->nameEn);
            $product->name_ar = $request->nameAr;
            $product->slug_ar = Str::slug($request->nameAr);
            $product->percentage = $request->percentage;
            $product->bank()->associate($request->bank);
            $product->save();
            return response()->json(['success' => 'Product Updated'], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['success' => 'Successfully Deleted'], 204);
    }
}
